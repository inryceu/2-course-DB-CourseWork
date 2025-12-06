import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ev_type } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto) {
    const game = await this.prisma.games.findUnique({
      where: { id: createEventDto.game_id },
    });

    if (!game) {
      throw new NotFoundException(
        `Game with ID ${createEventDto.game_id} not found`,
      );
    }

    const startDate = new Date(createEventDto.start_date);
    const endDate = new Date(createEventDto.end_date);

    if (endDate <= startDate) {
      throw new BadRequestException('End date must be after start date');
    }

    const event = await this.prisma.events.create({
      data: {
        game_id: createEventDto.game_id,
        discount: createEventDto.discount,
        start_date: startDate,
        end_date: endDate,
        type: createEventDto.type as ev_type,
      },
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            price: true,
          },
        },
      },
    });

    return event;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.events.findMany({
      skip,
      take,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            price: true,
          },
        },
      },
      orderBy: {
        start_date: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const event = await this.prisma.events.findUnique({
      where: { id },
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            price: true,
            description: true,
          },
        },
      },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }

  async findByGame(gameId: number, skip?: number, take?: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException(`Game with ID ${gameId} not found`);
    }

    return this.prisma.events.findMany({
      where: { game_id: gameId },
      skip,
      take,
      orderBy: {
        start_date: 'desc',
      },
    });
  }

  async findActive(skip?: number, take?: number) {
    const now = new Date();

    return this.prisma.events.findMany({
      where: {
        AND: [
          { start_date: { lte: now } },
          { end_date: { gte: now } },
        ],
      },
      skip,
      take,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            price: true,
          },
        },
      },
      orderBy: {
        start_date: 'desc',
      },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const existingEvent = await this.prisma.events.findUnique({
      where: { id },
    });

    if (!existingEvent) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    if (updateEventDto.game_id) {
      const game = await this.prisma.games.findUnique({
        where: { id: updateEventDto.game_id },
      });

      if (!game) {
        throw new NotFoundException(
          `Game with ID ${updateEventDto.game_id} not found`,
        );
      }
    }

    const startDate = updateEventDto.start_date
      ? new Date(updateEventDto.start_date)
      : existingEvent.start_date;
    const endDate = updateEventDto.end_date
      ? new Date(updateEventDto.end_date)
      : existingEvent.end_date;

    if (endDate <= startDate) {
      throw new BadRequestException('End date must be after start date');
    }

    const updateData: any = {};

    if (updateEventDto.game_id !== undefined)
      updateData.game_id = updateEventDto.game_id;
    if (updateEventDto.discount !== undefined)
      updateData.discount = updateEventDto.discount;
    if (updateEventDto.start_date)
      updateData.start_date = new Date(updateEventDto.start_date);
    if (updateEventDto.end_date)
      updateData.end_date = new Date(updateEventDto.end_date);
    if (updateEventDto.type) updateData.type = updateEventDto.type;

    const event = await this.prisma.events.update({
      where: { id },
      data: updateData,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            price: true,
          },
        },
      },
    });

    return event;
  }

  async remove(id: number) {
    const event = await this.prisma.events.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    await this.prisma.events.delete({
      where: { id },
    });

    return { message: `Event with ID ${id} has been deleted` };
  }
}

