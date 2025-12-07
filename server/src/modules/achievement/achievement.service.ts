import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Injectable()
export class AchievementService {
  constructor(private prisma: PrismaService) {}

  async create(createAchievementDto: CreateAchievementDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const game = await tx.games.findUnique({
        where: { id: createAchievementDto.game_id },
      });

      if (!game) {
        throw new NotFoundException(
          `Game with ID ${createAchievementDto.game_id} not found`,
        );
      }

      const achievement = await tx.achievements.create({
        data: {
          game_id: createAchievementDto.game_id,
          title: createAchievementDto.title,
          icon: createAchievementDto.icon,
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

      return achievement;
    });
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.achievements.findMany({
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
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const achievement = await this.prisma.achievements.findUnique({
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

    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }

    return achievement;
  }

  async findByGame(gameId: number, skip?: number, take?: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    return this.prisma.achievements.findMany({
      where: { game_id: gameId },
      skip,
      take,
      orderBy: {
        id: 'desc',
      },
    });
  }

  async update(id: number, updateAchievementDto: UpdateAchievementDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingAchievement = await tx.achievements.findUnique({
        where: { id },
      });

      if (!existingAchievement) {
        throw new NotFoundException(`Achievement with ID ${id} not found`);
      }

      if (updateAchievementDto.game_id) {
        const game = await tx.games.findUnique({
          where: { id: updateAchievementDto.game_id },
        });

        if (!game) {
          throw new NotFoundException(
            `Game with ID ${updateAchievementDto.game_id} not found`,
          );
        }
      }

      const updateData: any = {};

      if (updateAchievementDto.game_id !== undefined)
        updateData.game_id = updateAchievementDto.game_id;
      if (updateAchievementDto.title)
        updateData.title = updateAchievementDto.title;
      if (updateAchievementDto.icon) updateData.icon = updateAchievementDto.icon;

      const achievement = await tx.achievements.update({
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

      return achievement;
    });
  }

  async remove(id: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const achievement = await tx.achievements.findUnique({
        where: { id },
      });

      if (!achievement) {
        throw new NotFoundException(`Achievement with ID ${id} not found`);
      }

      await tx.achievements.delete({
        where: { id },
      });

      return { message: `Achievement with ID ${id} has been deleted` };
    });
  }

  async getAchievementUnlockers(
    achievementId: number,
    skip?: number,
    take?: number,
  ) {
    const achievement = await this.prisma.achievements.findUnique({
      where: { id: achievementId },
    });

    if (!achievement) {
      throw new NotFoundException(
        `Achievement with ID ${achievementId} not found`,
      );
    }

    const connections = await this.prisma.user_achieve_connection.findMany({
      where: { achievement_id: achievementId },
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
        user_id: 'asc',
      },
    });

    return connections.map((conn) => conn.users);
  }
}
