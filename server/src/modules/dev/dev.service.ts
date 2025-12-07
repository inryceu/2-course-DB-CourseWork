import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';

@Injectable()
export class DevService {
  constructor(private prisma: PrismaService) {}

  async create(createDevDto: CreateDevDto) {
    const existingDev = await this.prisma.devs.findUnique({
      where: { dev_name: createDevDto.dev_name },
    });

    if (existingDev) {
      throw new ConflictException('Developer/Publisher with this name already exists');
    }

    const dev = await this.prisma.devs.create({
      data: {
        dev_name: createDevDto.dev_name,
        contacts: createDevDto.contacts,
        logo: createDevDto.logo,
        dev_type: createDevDto.dev_type,
      },
    });

    return dev;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.devs.findMany({
      skip,
      take,
      orderBy: {
        dev_name: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const dev = await this.prisma.devs.findUnique({
      where: { id },
    });

    if (!dev) {
      throw new NotFoundException(`Developer/Publisher with ID ${id} not found`);
    }

    return dev;
  }

  async findByName(devName: string) {
    const dev = await this.prisma.devs.findUnique({
      where: { dev_name: devName },
    });

    if (!dev) {
      throw new NotFoundException(`Developer/Publisher with name ${devName} not found`);
    }

    return dev;
  }

  async update(id: number, updateDevDto: UpdateDevDto) {
    const existingDev = await this.prisma.devs.findUnique({
      where: { id },
    });

    if (!existingDev) {
      throw new NotFoundException(`Developer/Publisher with ID ${id} not found`);
    }

    if (updateDevDto.dev_name) {
      const conflictDev = await this.prisma.devs.findFirst({
        where: {
          AND: [{ id: { not: id } }, { dev_name: updateDevDto.dev_name }],
        },
      });

      if (conflictDev) {
        throw new ConflictException('Developer/Publisher name already taken');
      }
    }

    const updateData: any = {};

    if (updateDevDto.dev_name) updateData.dev_name = updateDevDto.dev_name;
    if (updateDevDto.contacts) updateData.contacts = updateDevDto.contacts;
    if (updateDevDto.logo !== undefined) updateData.logo = updateDevDto.logo;
    if (updateDevDto.dev_type) updateData.dev_type = updateDevDto.dev_type;

    const dev = await this.prisma.devs.update({
      where: { id },
      data: updateData,
    });

    return dev;
  }

  async remove(id: number) {
    const dev = await this.prisma.devs.findUnique({
      where: { id },
    });

    if (!dev) {
      throw new NotFoundException(`Developer/Publisher with ID ${id} not found`);
    }

    await this.prisma.devs.delete({
      where: { id },
    });

    return { message: `Developer/Publisher with ID ${id} has been deleted` };
  }

  async getDeveloperGames(devId: number, skip?: number, take?: number) {
    const dev = await this.prisma.devs.findUnique({
      where: { id: devId },
    });

    if (!dev) {
      throw new NotFoundException(`Developer/Publisher with ID ${devId} not found`);
    }

    const connections = await this.prisma.game_dev_connection.findMany({
      where: { dev_id: devId },
      skip,
      take,
      include: {
        games: {
          select: {
            id: true,
            title: true,
            cover: true,
            price: true,
            release_date: true,
          },
        },
      },
      orderBy: {
        game_id: 'asc',
      },
    });

    return connections.map((conn) => conn.games);
  }
}

