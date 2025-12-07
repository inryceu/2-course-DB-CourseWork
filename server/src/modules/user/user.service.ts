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
    return this.prisma.executeTransaction(async (tx) => {
      const existingUser = await tx.users.findFirst({
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

      const user = await tx.users.create({
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
    });
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
    return this.prisma.executeTransaction(async (tx) => {
      const existingUser = await tx.users.findUnique({
        where: { id },
      });

      if (!existingUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      if (updateUserDto.username || updateUserDto.email) {
        const conflictUser = await tx.users.findFirst({
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

      const user = await tx.users.update({
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
    });
  }

  async remove(id: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const user = await tx.users.findUnique({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      await tx.users.delete({
        where: { id },
      });

      return { message: `User with ID ${id} has been deleted` };
    });
  }

  async unlockAchievement(userId: number, achievementId: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const user = await tx.users.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }

      const achievement = await tx.achievements.findUnique({
        where: { id: achievementId },
      });

      if (!achievement) {
        throw new NotFoundException(
          `Achievement with ID ${achievementId} not found`,
        );
      }

      const existingConnection =
        await tx.user_achieve_connection.findUnique({
          where: {
            user_id_achievement_id: {
              user_id: userId,
              achievement_id: achievementId,
            },
          },
        });

      if (existingConnection) {
        throw new ConflictException('User has already unlocked this achievement');
      }

      await tx.user_achieve_connection.create({
        data: {
          user_id: userId,
          achievement_id: achievementId,
        },
      });

      return {
        message: `Achievement ${achievementId} has been unlocked for user ${userId}`,
      };
    });
  }

  async removeAchievement(userId: number, achievementId: number) {
    return this.prisma.executeTransaction(async (tx) => {
      const connection = await tx.user_achieve_connection.findUnique({
        where: {
          user_id_achievement_id: {
            user_id: userId,
            achievement_id: achievementId,
          },
        },
      });

      if (!connection) {
        throw new NotFoundException(
          `User ${userId} has not unlocked achievement ${achievementId}`,
        );
      }

      await tx.user_achieve_connection.delete({
        where: {
          user_id_achievement_id: {
            user_id: userId,
            achievement_id: achievementId,
          },
        },
      });

      return {
        message: `Achievement ${achievementId} has been removed from user ${userId}`,
      };
    });
  }

  async getUserAchievements(userId: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const connections = await this.prisma.user_achieve_connection.findMany({
      where: { user_id: userId },
      include: {
        achievements: {
          include: {
            games: {
              select: {
                id: true,
                title: true,
                cover: true,
              },
            },
          },
        },
      },
    });

    return connections.map((conn) => conn.achievements);
  }
}
