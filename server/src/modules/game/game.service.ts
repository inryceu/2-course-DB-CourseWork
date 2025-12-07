import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto) {
    const existingGame = await this.prisma.games.findUnique({
      where: { title: createGameDto.title },
    });

    if (existingGame) {
      throw new ConflictException('Game with this title already exists');
    }

    if (createGameDto.base_game_id) {
      const baseGame = await this.prisma.games.findUnique({
        where: { id: createGameDto.base_game_id },
      });

      if (!baseGame) {
        throw new BadRequestException(
          `Base game with ID ${createGameDto.base_game_id} not found`,
        );
      }
    }

    const game = await this.prisma.games.create({
      data: {
        title: createGameDto.title,
        price: createGameDto.price,
        release_date: new Date(createGameDto.release_date),
        age_rating: createGameDto.age_rating,
        cover: createGameDto.cover,
        description: createGameDto.description,
        system_requirements: createGameDto.system_requirements,
        base_game_id: createGameDto.base_game_id,
        is_multiplayer: createGameDto.is_multiplayer ?? false,
      },
    });

    return game;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.games.findMany({
      skip,
      take,
      orderBy: {
        release_date: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const game = await this.prisma.games.findUnique({
      where: { id },
      include: {
        games: true,
        other_games: true,
      },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }

    return game;
  }

  async findByTitle(title: string) {
    const game = await this.prisma.games.findUnique({
      where: { title },
      include: {
        games: true,
        other_games: true,
      },
    });

    if (!game) {
      throw new NotFoundException(`Game with title ${title} not found`);
    }

    return game;
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    const existingGame = await this.prisma.games.findUnique({
      where: { id },
    });

    if (!existingGame) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }

    if (updateGameDto.title) {
      const conflictGame = await this.prisma.games.findFirst({
        where: {
          AND: [{ id: { not: id } }, { title: updateGameDto.title }],
        },
      });

      if (conflictGame) {
        throw new ConflictException('Game title already taken');
      }
    }

    if (updateGameDto.base_game_id) {
      if (updateGameDto.base_game_id === id) {
        throw new BadRequestException('Game cannot be its own base game');
      }

      const baseGame = await this.prisma.games.findUnique({
        where: { id: updateGameDto.base_game_id },
      });

      if (!baseGame) {
        throw new BadRequestException(
          `Base game with ID ${updateGameDto.base_game_id} not found`,
        );
      }
    }

    const updateData: any = {};

    if (updateGameDto.title) updateData.title = updateGameDto.title;
    if (updateGameDto.price !== undefined)
      updateData.price = updateGameDto.price;
    if (updateGameDto.release_date)
      updateData.release_date = new Date(updateGameDto.release_date);
    if (updateGameDto.age_rating)
      updateData.age_rating = updateGameDto.age_rating;
    if (updateGameDto.cover) updateData.cover = updateGameDto.cover;
    if (updateGameDto.description !== undefined)
      updateData.description = updateGameDto.description;
    if (updateGameDto.system_requirements)
      updateData.system_requirements = updateGameDto.system_requirements;
    if (updateGameDto.base_game_id !== undefined)
      updateData.base_game_id = updateGameDto.base_game_id;
    if (updateGameDto.is_multiplayer !== undefined)
      updateData.is_multiplayer = updateGameDto.is_multiplayer;

    const game = await this.prisma.games.update({
      where: { id },
      data: updateData,
    });

    return game;
  }

  async remove(id: number) {
    const game = await this.prisma.games.findUnique({
      where: { id },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }

    await this.prisma.games.delete({
      where: { id },
    });

    return { message: `Game with ID ${id} has been deleted` };
  }

  async addTagToGame(gameId: number, tagId: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    const tag = await this.prisma.tags.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${tagId} not found`);
    }

    const existingConnection = await this.prisma.game_tag_connection.findUnique({
      where: {
        game_id_tag_id: {
          game_id: gameId,
          tag_id: tagId,
        },
      },
    });

    if (existingConnection) {
      throw new ConflictException('Tag is already associated with this game');
    }

    await this.prisma.game_tag_connection.create({
      data: {
        game_id: gameId,
        tag_id: tagId,
      },
    });

    return { message: `Tag ${tagId} has been added to game ${gameId}` };
  }

  async removeTagFromGame(gameId: number, tagId: number) {
    const connection = await this.prisma.game_tag_connection.findUnique({
      where: {
        game_id_tag_id: {
          game_id: gameId,
          tag_id: tagId,
        },
      },
    });

    if (!connection) {
      throw new NotFoundException(
        `Tag ${tagId} is not associated with game ${gameId}`,
      );
    }

    await this.prisma.game_tag_connection.delete({
      where: {
        game_id_tag_id: {
          game_id: gameId,
          tag_id: tagId,
        },
      },
    });

    return { message: `Tag ${tagId} has been removed from game ${gameId}` };
  }

  async getGameTags(gameId: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    const connections = await this.prisma.game_tag_connection.findMany({
      where: { game_id: gameId },
      include: {
        tags: true,
      },
    });

    return connections.map((conn) => conn.tags);
  }

  async addDeveloperToGame(gameId: number, devId: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    const dev = await this.prisma.devs.findUnique({
      where: { id: devId },
    });

    if (!dev) {
      throw new NotFoundException(`Developer with ID ${devId} not found`);
    }

    const existingConnection = await this.prisma.game_dev_connection.findUnique({
      where: {
        game_id_dev_id: {
          game_id: gameId,
          dev_id: devId,
        },
      },
    });

    if (existingConnection) {
      throw new ConflictException(
        'Developer is already associated with this game',
      );
    }

    await this.prisma.game_dev_connection.create({
      data: {
        game_id: gameId,
        dev_id: devId,
      },
    });

    return { message: `Developer ${devId} has been added to game ${gameId}` };
  }

  async removeDeveloperFromGame(gameId: number, devId: number) {
    const connection = await this.prisma.game_dev_connection.findUnique({
      where: {
        game_id_dev_id: {
          game_id: gameId,
          dev_id: devId,
        },
      },
    });

    if (!connection) {
      throw new NotFoundException(
        `Developer ${devId} is not associated with game ${gameId}`,
      );
    }

    await this.prisma.game_dev_connection.delete({
      where: {
        game_id_dev_id: {
          game_id: gameId,
          dev_id: devId,
        },
      },
    });

    return {
      message: `Developer ${devId} has been removed from game ${gameId}`,
    };
  }

  async getGameDevelopers(gameId: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    const connections = await this.prisma.game_dev_connection.findMany({
      where: { game_id: gameId },
      include: {
        devs: true,
      },
    });

    return connections.map((conn) => conn.devs);
  }
}
