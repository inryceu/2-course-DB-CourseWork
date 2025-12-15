import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompleteGameDto } from './dto/create-complete-game.dto';
import { CreateUserWithInitialSetupDto } from './dto/create-user-with-initial-setup.dto';
import { CompleteGamePurchaseDto } from './dto/complete-game-purchase.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ComplexQueriesService {
  constructor(private prisma: PrismaService) {}

  async createCompleteGame(dto: CreateCompleteGameDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingGame = await tx.games.findUnique({
        where: { title: dto.game.title },
      });
      if (existingGame) {
        throw new ConflictException('Game title already exists');
      }

      const tags = await tx.tags.findMany({
        where: { id: { in: dto.tagIds } },
      });
      if (tags.length !== dto.tagIds.length) {
        throw new NotFoundException('One or more tags not found');
      }

      const devs = await tx.devs.findMany({
        where: { id: { in: dto.devIds } },
      });
      if (devs.length !== dto.devIds.length) {
        throw new NotFoundException('One or more developers not found');
      }

      if (dto.game.base_game_id) {
        const baseGame = await tx.games.findUnique({
          where: { id: dto.game.base_game_id },
        });
        if (!baseGame) {
          throw new NotFoundException('Base game not found');
        }
      }

      const game = await tx.games.create({
        data: {
          title: dto.game.title,
          price: dto.game.price,
          release_date: new Date(dto.game.release_date),
          age_rating: dto.game.age_rating,
          cover: dto.game.cover,
          description: dto.game.description,
          system_requirements: dto.game.system_requirements,
          base_game_id: dto.game.base_game_id,
          is_multiplayer: dto.game.is_multiplayer ?? false,
        },
      });

      await Promise.all(
        dto.achievements.map((ach) =>
          tx.achievements.create({
            data: {
              game_id: game.id,
              title: ach.title,
              icon: ach.icon,
            },
          }),
        ),
      );

      await Promise.all(
        dto.tagIds.map((tagId) =>
          tx.game_tag_connection.create({
            data: {
              game_id: game.id,
              tag_id: tagId,
            },
          }),
        ),
      );

      await Promise.all(
        dto.devIds.map((devId) =>
          tx.game_dev_connection.create({
            data: {
              game_id: game.id,
              dev_id: devId,
            },
          }),
        ),
      );

      await tx.game_news.create({
        data: {
          game_id: game.id,
          title: dto.initialNews.title,
          content: dto.initialNews.content,
        },
      });

      return tx.games.findUnique({
        where: { id: game.id },
        include: {
          achievements: true,
          game_tag_connection: { include: { tags: true } },
          game_dev_connection: { include: { devs: true } },
          game_news: true,
        },
      });
    });
  }

  async createUserWithInitialSetup(dto: CreateUserWithInitialSetupDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingUser = await tx.users.findFirst({
        where: {
          OR: [{ username: dto.user.username }, { email: dto.user.email }],
        },
      });
      if (existingUser) {
        throw new ConflictException('Username or email already exists');
      }

      if (dto.user.age < 13 || dto.user.age > 120) {
        throw new BadRequestException('Age must be between 13 and 120');
      }

      if (dto.user.region.length !== 2) {
        throw new BadRequestException('Region must be 2 characters');
      }

      if (dto.initialGameIds && dto.initialGameIds.length > 0) {
        const games = await tx.games.findMany({
          where: { id: { in: dto.initialGameIds } },
        });
        if (games.length !== dto.initialGameIds.length) {
          throw new NotFoundException('One or more games not found');
        }
      }

      if (dto.friendIds && dto.friendIds.length > 0) {
        const friends = await tx.users.findMany({
          where: { id: { in: dto.friendIds } },
        });
        if (friends.length !== dto.friendIds.length) {
          throw new NotFoundException('One or more friends not found');
        }
      }

      if (dto.achievementIds && dto.achievementIds.length > 0) {
        const achievements = await tx.achievements.findMany({
          where: { id: { in: dto.achievementIds } },
        });
        if (achievements.length !== dto.achievementIds.length) {
          throw new NotFoundException('One or more achievements not found');
        }
      }

      const passwordHash = await bcrypt.hash(dto.user.password, 10);
      const user = await tx.users.create({
        data: {
          username: dto.user.username,
          email: dto.user.email,
          password_hash: passwordHash,
          age: dto.user.age,
          region: dto.user.region,
          avatar: dto.user.avatar,
        },
      });

      if (dto.initialGameIds) {
        await Promise.all(
          dto.initialGameIds.map((gameId) =>
            tx.libraries.create({
              data: {
                user_id: user.id,
                game_id: gameId,
                ownership: 'wishlist',
                hours_played: 0,
              },
            }),
          ),
        );
      }

      if (dto.friendIds) {
        await Promise.all(
          dto.friendIds.map((friendId) =>
            tx.friends.create({
              data: {
                user_id: user.id,
                friend_id: friendId,
                status: 'pending',
              },
            }),
          ),
        );
      }

      if (dto.achievementIds) {
        await Promise.all(
          dto.achievementIds.map((achievementId) =>
            tx.user_achieve_connection.create({
              data: {
                user_id: user.id,
                achievement_id: achievementId,
              },
            }),
          ),
        );
      }

      return tx.users.findUnique({
        where: { id: user.id },
        include: {
          libraries: {
            include: {
              games: {
                select: {
                  id: true,
                  title: true,
                  cover: true,
                },
              },
            },
          },
          friends_friends_user_idTousers: {
            include: {
              users_friends_friend_idTousers: {
                select: {
                  id: true,
                  username: true,
                  avatar: true,
                },
              },
            },
          },
          user_achieve_connection: {
            include: {
              achievements: {
                include: {
                  games: {
                    select: {
                      id: true,
                      title: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    });
  }

  async completeGamePurchase(dto: CompleteGamePurchaseDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const user = await tx.users.findUnique({
        where: { id: dto.userId },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }

      const game = await tx.games.findUnique({
        where: { id: dto.gameId },
      });
      if (!game) {
        throw new NotFoundException('Game not found');
      }

      const existingLibrary = await tx.libraries.findUnique({
        where: {
          user_id_game_id: {
            user_id: dto.userId,
            game_id: dto.gameId,
          },
        },
      });
      if (existingLibrary) {
        throw new ConflictException('User already owns this game');
      }

      if (
        dto.initialReview &&
        (dto.initialReview.rating < 1 || dto.initialReview.rating > 5)
      ) {
        throw new BadRequestException('Rating must be between 1 and 5');
      }

      const library = await tx.libraries.create({
        data: {
          user_id: dto.userId,
          game_id: dto.gameId,
          ownership: dto.ownership,
          hours_played: 0,
          download_status: 'not_installed',
        },
      });

      let save: any = null;
      if (dto.initialSaveData) {
        const existingSave = await tx.saves.findUnique({
          where: {
            user_id_game_id: {
              user_id: dto.userId,
              game_id: dto.gameId,
            },
          },
        });
        if (!existingSave) {
          save = await tx.saves.create({
            data: {
              user_id: dto.userId,
              game_id: dto.gameId,
              save_data: dto.initialSaveData,
            },
          });
        }
      }

      let review: any = null;
      if (dto.initialReview) {
        const existingReview = await tx.reviews.findUnique({
          where: {
            user_id_game_id: {
              user_id: dto.userId,
              game_id: dto.gameId,
            },
          },
        });
        if (!existingReview) {
          review = await tx.reviews.create({
            data: {
              user_id: dto.userId,
              game_id: dto.gameId,
              rating: dto.initialReview.rating,
              content: dto.initialReview.content,
            },
          });
        }
      }

      return {
        library,
        save,
        review,
        game: await tx.games.findUnique({
          where: { id: dto.gameId },
          include: {
            achievements: true,
          },
        }),
      };
    });
  }
}
