import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSaveDto } from './dto/create-save.dto';
import { UpdateSaveDto } from './dto/update-save.dto';

@Injectable()
export class SaveService {
  constructor(private prisma: PrismaService) {}

  async create(createSaveDto: CreateSaveDto) {
    const existingSave = await this.prisma.saves.findUnique({
      where: {
        user_id_game_id: {
          user_id: createSaveDto.user_id,
          game_id: createSaveDto.game_id,
        },
      },
    });

    if (existingSave) {
      throw new ConflictException(
        'Save for this user and game already exists',
      );
    }

    const user = await this.prisma.users.findUnique({
      where: { id: createSaveDto.user_id },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createSaveDto.user_id} not found`,
      );
    }

    const game = await this.prisma.games.findUnique({
      where: { id: createSaveDto.game_id },
    });

    if (!game) {
      throw new NotFoundException(
        `Game with ID ${createSaveDto.game_id} not found`,
      );
    }

    const save = await this.prisma.saves.create({
      data: {
        user_id: createSaveDto.user_id,
        game_id: createSaveDto.game_id,
        save_data: createSaveDto.save_data,
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

    return save;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.saves.findMany({
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
        last_updated: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const save = await this.prisma.saves.findUnique({
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

    if (!save) {
      throw new NotFoundException(`Save with ID ${id} not found`);
    }

    return save;
  }

  async findByUser(userId: number, skip?: number, take?: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.saves.findMany({
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
        last_updated: 'desc',
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

    return this.prisma.saves.findMany({
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
        last_updated: 'desc',
      },
    });
  }

  async findByUserAndGame(userId: number, gameId: number) {
    const save = await this.prisma.saves.findUnique({
      where: {
        user_id_game_id: {
          user_id: userId,
          game_id: gameId,
        },
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
            description: true,
          },
        },
      },
    });

    if (!save) {
      throw new NotFoundException(
        `Save for user ${userId} and game ${gameId} not found`,
      );
    }

    return save;
  }

  async update(id: number, updateSaveDto: UpdateSaveDto) {
    const existingSave = await this.prisma.saves.findUnique({
      where: { id },
    });

    if (!existingSave) {
      throw new NotFoundException(`Save with ID ${id} not found`);
    }

    const updateData: any = {};

    if (updateSaveDto.save_data) {
      updateData.save_data = updateSaveDto.save_data;
      updateData.last_updated = new Date();
    }

    const save = await this.prisma.saves.update({
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

    return save;
  }

  async remove(id: number) {
    const save = await this.prisma.saves.findUnique({
      where: { id },
    });

    if (!save) {
      throw new NotFoundException(`Save with ID ${id} not found`);
    }

    await this.prisma.saves.delete({
      where: { id },
    });

    return { message: `Save with ID ${id} has been deleted` };
  }
}

