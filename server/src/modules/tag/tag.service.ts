import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    const existingTag = await this.prisma.tags.findUnique({
      where: { tag_name: createTagDto.tag_name },
    });

    if (existingTag) {
      throw new ConflictException('Tag with this name already exists');
    }

    const tag = await this.prisma.tags.create({
      data: {
        tag_name: createTagDto.tag_name,
      },
    });

    return tag;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.tags.findMany({
      skip,
      take,
      orderBy: {
        tag_name: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const tag = await this.prisma.tags.findUnique({
      where: { id },
    });

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    return tag;
  }

  async findByName(tagName: string) {
    const tag = await this.prisma.tags.findUnique({
      where: { tag_name: tagName },
    });

    if (!tag) {
      throw new NotFoundException(`Tag with name ${tagName} not found`);
    }

    return tag;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const existingTag = await this.prisma.tags.findUnique({
      where: { id },
    });

    if (!existingTag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    if (updateTagDto.tag_name) {
      const conflictTag = await this.prisma.tags.findFirst({
        where: {
          AND: [{ id: { not: id } }, { tag_name: updateTagDto.tag_name }],
        },
      });

      if (conflictTag) {
        throw new ConflictException('Tag name already taken');
      }
    }

    const updateData: any = {};

    if (updateTagDto.tag_name) updateData.tag_name = updateTagDto.tag_name;

    const tag = await this.prisma.tags.update({
      where: { id },
      data: updateData,
    });

    return tag;
  }

  async remove(id: number) {
    const tag = await this.prisma.tags.findUnique({
      where: { id },
    });

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    await this.prisma.tags.delete({
      where: { id },
    });

    return { message: `Tag with ID ${id} has been deleted` };
  }
}

