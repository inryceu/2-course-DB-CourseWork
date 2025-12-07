import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingReview = await tx.reviews.findUnique({
        where: {
          user_id_game_id: {
            user_id: createReviewDto.user_id,
            game_id: createReviewDto.game_id,
          },
        },
      });

      if (existingReview) {
        throw new ConflictException(
          'Review for this user and game already exists',
        );
      }

      const user = await tx.users.findUnique({
        where: { id: createReviewDto.user_id },
      });

      if (!user) {
        throw new NotFoundException(
          `User with ID ${createReviewDto.user_id} not found`,
        );
      }

      const game = await tx.games.findUnique({
        where: { id: createReviewDto.game_id },
      });

      if (!game) {
        throw new NotFoundException(
          `Game with ID ${createReviewDto.game_id} not found`,
        );
      }

      const review = await tx.reviews.create({
        data: {
          user_id: createReviewDto.user_id,
          game_id: createReviewDto.game_id,
          rating: createReviewDto.rating,
          content: createReviewDto.content,
        },
        include: {
          users: {
            select: {
              id: true,
              username: true,
              avatar: true,
            },
          },
          games: {
            select: {
              id: true,
              title: true,
              cover: true,
            },
          },
        },
      });

      return review;
    });
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.reviews.findMany({
      skip,
      take,
      include: {
        users: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const review = await this.prisma.reviews.findUnique({
      where: { id },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            description: true,
          },
        },
      },
    });

    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return review;
  }

  async findByUser(userId: number, skip?: number, take?: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.reviews.findMany({
      where: { user_id: userId },
      skip,
      take,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            description: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findByGame(gameId: number, skip?: number, take?: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    return this.prisma.reviews.findMany({
      where: { game_id: gameId },
      skip,
      take,
      include: {
        users: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingReview = await tx.reviews.findUnique({
        where: { id },
      });

      if (!existingReview) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }

      const updateData: any = {};

      if (updateReviewDto.rating !== undefined)
        updateData.rating = updateReviewDto.rating;
      if (updateReviewDto.content !== undefined)
        updateData.content = updateReviewDto.content;

      const review = await tx.reviews.update({
        where: { id },
        data: updateData,
        include: {
          users: {
            select: {
              id: true,
              username: true,
              avatar: true,
            },
          },
          games: {
            select: {
              id: true,
              title: true,
              cover: true,
            },
          },
        },
      });

      return review;
    });
  }

  async remove(id: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const review = await tx.reviews.findUnique({
        where: { id },
      });

      if (!review) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }

      await tx.reviews.delete({
        where: { id },
      });

      return { message: `Review with ID ${id} has been deleted` };
    });
  }
}
