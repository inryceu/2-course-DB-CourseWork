import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { User } from '../../domain/entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findById(id: number): Promise<User | null> {
    const rawUser = await this.prisma.users.findUnique({
      where: { id },
      include: {
        user_achieve_connection: {
          select: { achievement_id: true },
        },
      },
    });

    if (!rawUser) return null;

    const achievementIds = rawUser.user_achieve_connection.map(
      (conn) => conn.achievement_id,
    );
    return UserMapper.toDomain(rawUser, achievementIds);
  }

  public async findByEmail(email: string): Promise<User | null> {
    const rawUser = await this.prisma.users.findUnique({
      where: { email },
    });

    if (!rawUser) return null;
    return UserMapper.toDomain(rawUser);
  }

  public async findByUsername(username: string): Promise<User | null> {
    const rawUser = await this.prisma.users.findUnique({
      where: { username },
    });

    if (!rawUser) return null;
    return UserMapper.toDomain(rawUser);
  }

  public async save(user: User): Promise<User> {
    const persistenceData = UserMapper.toPersistence(user);

    if (!user.id) {
      const createdUser = await this.prisma.users.create({
        data: persistenceData,
      });
      return UserMapper.toDomain(createdUser);
    }

    const updatedUser = await this.prisma.users.update({
      where: { id: user.id },
      data: persistenceData,
    });

    return UserMapper.toDomain(updatedUser);
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.users.delete({
      where: { id },
    });
  }

  public async addAchievement(
    userId: number,
    achievementId: number,
  ): Promise<void> {
    await this.prisma.user_achieve_connection.create({
      data: {
        user_id: userId,
        achievement_id: achievementId,
      },
    });
  }

  public async removeAchievement(
    userId: number,
    achievementId: number,
  ): Promise<void> {
    await this.prisma.user_achieve_connection.delete({
      where: {
        user_id_achievement_id: {
          user_id: userId,
          achievement_id: achievementId,
        },
      },
    });
  }
}
