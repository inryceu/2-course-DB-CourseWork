import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { GetUserByIdQuery, GetUserListQuery } from './user.queries';
import { UserReadModel, UserListItemReadModel } from './user-read.models';
import { PrismaService } from '../../../../prisma/prisma.service';
import { UserNotFoundError } from '../../domain/errors/user-not-found.error';

@QueryHandler(GetUserByIdQuery)
@Injectable()
export class GetUserByIdQueryHandler implements IQueryHandler<
  GetUserByIdQuery,
  UserReadModel
> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUserByIdQuery): Promise<UserReadModel> {
    const user = await this.prisma.users.findUnique({
      where: { id: query.userId },
      include: {
        user_achieve_connection: {
          select: { achievement_id: true },
        },
      },
    });

    if (!user) {
      throw new UserNotFoundError(`User with ID ${query.userId} not found`);
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      age: user.age,
      region: user.region,
      avatar: user.avatar || undefined,
      createdAt: user.created_at,
      lastLogin: user.last_login || undefined,
      achievementCount: user.user_achieve_connection.length,
    };
  }
}

@QueryHandler(GetUserListQuery)
@Injectable()
export class GetUserListQueryHandler implements IQueryHandler<
  GetUserListQuery,
  UserListItemReadModel[]
> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUserListQuery): Promise<UserListItemReadModel[]> {
    const users = await this.prisma.users.findMany({
      where: query.searchTerm
        ? {
            OR: [
              { username: { contains: query.searchTerm } },
              { email: { contains: query.searchTerm } },
            ],
          }
        : undefined,
      skip: (query.page - 1) * query.limit,
      take: query.limit,
      include: {
        _count: {
          select: { user_achieve_connection: true },
        },
      },
    });

    return users.map((user) => ({
      id: user.id,
      username: user.username,
      region: user.region,
      avatar: user.avatar || undefined,
      achievementCount: user._count.user_achieve_connection,
    }));
  }
}
