import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@Injectable()
export class LibraryService {
  constructor(private prisma: PrismaService) {}

  async create(createLibraryDto: CreateLibraryDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingLibrary = await tx.libraries.findUnique({
        where: {
          user_id_game_id: {
            user_id: createLibraryDto.user_id,
            game_id: createLibraryDto.game_id,
          },
        },
      });

      if (existingLibrary) {
        throw new ConflictException(
          'Library entry for this user and game already exists',
        );
      }

      const user = await tx.users.findUnique({
        where: { id: createLibraryDto.user_id },
      });

      if (!user) {
        throw new NotFoundException(
          `User with ID ${createLibraryDto.user_id} not found`,
        );
      }

      const game = await tx.games.findUnique({
        where: { id: createLibraryDto.game_id },
      });

      if (!game) {
        throw new NotFoundException(
          `Game with ID ${createLibraryDto.game_id} not found`,
        );
      }

      const library = await tx.libraries.create({
        data: {
          user_id: createLibraryDto.user_id,
          game_id: createLibraryDto.game_id,
          hours_played: createLibraryDto.hours_played ?? 0,
          ownership: createLibraryDto.ownership,
          download_status: createLibraryDto.download_status,
        },
        include: {
          users: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
          games: {
            select: {
              id: true,
              title: true,
              price: true,
              cover: true,
            },
          },
        },
      });

      return library;
    });
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.libraries.findMany({
      skip,
      take,
      include: {
        users: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        games: {
          select: {
            id: true,
            title: true,
            price: true,
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
    const library = await this.prisma.libraries.findUnique({
      where: { id },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        games: {
          select: {
            id: true,
            title: true,
            price: true,
            cover: true,
            description: true,
          },
        },
      },
    });

    if (!library) {
      throw new NotFoundException(`Library entry with ID ${id} not found`);
    }

    return library;
  }

  async findByUser(userId: number, skip?: number, take?: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.libraries.findMany({
      where: { user_id: userId },
      skip,
      take,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            price: true,
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

    return this.prisma.libraries.findMany({
      where: { game_id: gameId },
      skip,
      take,
      include: {
        users: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async update(id: number, updateLibraryDto: UpdateLibraryDto) {
    return this.prisma.executeTransaction(async (tx) => {
      const existingLibrary = await tx.libraries.findUnique({
        where: { id },
      });

      if (!existingLibrary) {
        throw new NotFoundException(`Library entry with ID ${id} not found`);
      }

      const updateData: any = {};

      if (updateLibraryDto.hours_played !== undefined)
        updateData.hours_played = updateLibraryDto.hours_played;
      if (updateLibraryDto.ownership)
        updateData.ownership = updateLibraryDto.ownership;
      if (updateLibraryDto.download_status !== undefined)
        updateData.download_status = updateLibraryDto.download_status;

      const library = await tx.libraries.update({
        where: { id },
        data: updateData,
        include: {
          users: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
          games: {
            select: {
              id: true,
              title: true,
              price: true,
              cover: true,
            },
          },
        },
      });

      return library;
    });
  }

  async remove(id: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const library = await tx.libraries.findUnique({
        where: { id },
      });

      if (!library) {
        throw new NotFoundException(`Library entry with ID ${id} not found`);
      }

      await tx.libraries.delete({
        where: { id },
      });

      return { message: `Library entry with ID ${id} has been deleted` };
    });
  }
}
