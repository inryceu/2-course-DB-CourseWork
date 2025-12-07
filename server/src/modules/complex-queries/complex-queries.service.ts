import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompleteGameDto } from './dto/create-complete-game.dto';

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

      const news = await tx.game_news.create({
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
}

