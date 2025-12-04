import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.users.findFirst({
      where: {
        OR: [
          { username: createUserDto.username },
          { email: createUserDto.email },
        ],
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'User with this username or email already exists',
      );
    }

    const passwordHash = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.users.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password_hash: passwordHash,
        age: createUserDto.age,
        region: createUserDto.region,
        avatar: createUserDto.avatar,
      },
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        region: true,
        avatar: true,
        created_at: true,
        last_login: true,
      },
    });

    return user;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.users.findMany({
      skip,
      take,
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        region: true,
        avatar: true,
        created_at: true,
        last_login: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        region: true,
        avatar: true,
        created_at: true,
        last_login: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByUsername(username: string) {
    const user = await this.prisma.users.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        region: true,
        avatar: true,
        created_at: true,
        last_login: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.prisma.users.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.username || updateUserDto.email) {
      const conflictUser = await this.prisma.users.findFirst({
        where: {
          AND: [
            { id: { not: id } },
            {
              OR: [
                updateUserDto.username
                  ? { username: updateUserDto.username }
                  : {},
                updateUserDto.email ? { email: updateUserDto.email } : {},
              ],
            },
          ],
        },
      });

      if (conflictUser) {
        throw new ConflictException('Username or email already taken');
      }
    }

    const updateData: any = {};

    if (updateUserDto.username) updateData.username = updateUserDto.username;
    if (updateUserDto.email) updateData.email = updateUserDto.email;
    if (updateUserDto.password) {
      updateData.password_hash = await bcrypt.hash(updateUserDto.password, 10);
    }
    if (updateUserDto.age !== undefined) updateData.age = updateUserDto.age;
    if (updateUserDto.region) updateData.region = updateUserDto.region;
    if (updateUserDto.avatar !== undefined)
      updateData.avatar = updateUserDto.avatar;

    const user = await this.prisma.users.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        region: true,
        avatar: true,
        created_at: true,
        last_login: true,
      },
    });

    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.prisma.users.delete({
      where: { id },
    });

    return { message: `User with ID ${id} has been deleted` };
  }
}
