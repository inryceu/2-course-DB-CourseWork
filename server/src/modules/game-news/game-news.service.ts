import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateGameNewsDto } from './dto/create-game-news.dto';
import { UpdateGameNewsDto } from './dto/update-game-news.dto';

@Injectable()
export class GameNewsService {
  constructor(private prisma: PrismaService) {}

  async create(createGameNewsDto: CreateGameNewsDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const game = await tx.games.findUnique({
        where: { id: createGameNewsDto.game_id },
      });

      if (!game) {
        throw new NotFoundException(
          `Game with ID ${createGameNewsDto.game_id} not found`,
        );
      }

      const gameNews = await tx.game_news.create({
        data: {
          game_id: createGameNewsDto.game_id,
          title: createGameNewsDto.title,
          content: createGameNewsDto.content,
          published_at: createGameNewsDto.published_at
            ? new Date(createGameNewsDto.published_at)
            : undefined,
        },
        include: {
          games: {
            select: {
              id: true,
              title: true,
              cover: true,
            },
          },
        },
      });

      return gameNews;
    });
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.game_news.findMany({
      skip,
      take,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
          },
        },
      },
      orderBy: {
        published_at: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const gameNews = await this.prisma.game_news.findUnique({
      where: { id },
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
    });

    if (!gameNews) {
      throw new NotFoundException(`Game news with ID ${id} not found`);
    }

    return gameNews;
  }

  async findByGame(gameId: number, skip?: number, take?: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    return this.prisma.game_news.findMany({
      where: { game_id: gameId },
      skip,
      take,
      orderBy: {
        published_at: 'desc',
      },
    });
  }

  async update(id: number, updateGameNewsDto: UpdateGameNewsDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingGameNews = await tx.game_news.findUnique({
        where: { id },
      });

      if (!existingGameNews) {
        throw new NotFoundException(`Game news with ID ${id} not found`);
      }

      if (updateGameNewsDto.game_id) {
        const game = await tx.games.findUnique({
          where: { id: updateGameNewsDto.game_id },
        });

        if (!game) {
          throw new NotFoundException(
            `Game with ID ${updateGameNewsDto.game_id} not found`,
          );
        }
      }

      const updateData: any = {};

      if (updateGameNewsDto.game_id !== undefined)
        updateData.game_id = updateGameNewsDto.game_id;
      if (updateGameNewsDto.title) updateData.title = updateGameNewsDto.title;
      if (updateGameNewsDto.content)
        updateData.content = updateGameNewsDto.content;
      if (updateGameNewsDto.published_at)
        updateData.published_at = new Date(updateGameNewsDto.published_at);

      const gameNews = await tx.game_news.update({
        where: { id },
        data: updateData,
        include: {
          games: {
            select: {
              id: true,
              title: true,
              cover: true,
            },
          },
        },
      });

      return gameNews;
    });
  }

  async remove(id: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const gameNews = await tx.game_news.findUnique({
        where: { id },
      });

      if (!gameNews) {
        throw new NotFoundException(`Game news with ID ${id} not found`);
      }

      await tx.game_news.delete({
        where: { id },
      });

      return { message: `Game news with ID ${id} has been deleted` };
    });
  }
}
