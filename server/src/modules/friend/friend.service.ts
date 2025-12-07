import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';

@Injectable()
export class FriendService {
  constructor(private prisma: PrismaService) {}

  async create(createFriendDto: CreateFriendDto) {
    if (createFriendDto.user_id === createFriendDto.friend_id) {
      throw new BadRequestException('User cannot add themselves as a friend');
    }

    const existingFriend = await this.prisma.friends.findUnique({
      where: {
        user_id_friend_id: {
          user_id: createFriendDto.user_id,
          friend_id: createFriendDto.friend_id,
        },
      },
    });

    if (existingFriend) {
      throw new ConflictException(
        'Friendship relationship already exists',
      );
    }

    const user = await this.prisma.users.findUnique({
      where: { id: createFriendDto.user_id },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createFriendDto.user_id} not found`,
      );
    }

    const friend = await this.prisma.users.findUnique({
      where: { id: createFriendDto.friend_id },
    });

    if (!friend) {
      throw new NotFoundException(
        `Friend with ID ${createFriendDto.friend_id} not found`,
      );
    }

    const friendship = await this.prisma.friends.create({
      data: {
        user_id: createFriendDto.user_id,
        friend_id: createFriendDto.friend_id,
        status: createFriendDto.status ?? 'pending',
      },
      include: {
        users_friends_user_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        users_friends_friend_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
    });

    return friendship;
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.friends.findMany({
      skip,
      take,
      include: {
        users_friends_user_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        users_friends_friend_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        user_id: 'asc',
      },
    });
  }

  async findByUser(userId: number, skip?: number, take?: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.friends.findMany({
      where: { user_id: userId },
      skip,
      take,
      include: {
        users_friends_friend_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        friend_id: 'asc',
      },
    });
  }

  async findByFriend(friendId: number, skip?: number, take?: number) {
    const friend = await this.prisma.users.findUnique({
      where: { id: friendId },
    });

    if (!friend) {
      throw new NotFoundException(`Friend with ID ${friendId} not found`);
    }

    return this.prisma.friends.findMany({
      where: { friend_id: friendId },
      skip,
      take,
      include: {
        users_friends_user_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        user_id: 'asc',
      },
    });
  }

  async findOne(userId: number, friendId: number) {
    const friendship = await this.prisma.friends.findUnique({
      where: {
        user_id_friend_id: {
          user_id: userId,
          friend_id: friendId,
        },
      },
      include: {
        users_friends_user_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        users_friends_friend_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!friendship) {
      throw new NotFoundException(
        `Friendship between user ${userId} and friend ${friendId} not found`,
      );
    }

    return friendship;
  }

  async update(userId: number, friendId: number, updateFriendDto: UpdateFriendDto) {
    const existingFriendship = await this.prisma.friends.findUnique({
      where: {
        user_id_friend_id: {
          user_id: userId,
          friend_id: friendId,
        },
      },
    });

    if (!existingFriendship) {
      throw new NotFoundException(
        `Friendship between user ${userId} and friend ${friendId} not found`,
      );
    }

    const updateData: any = {};

    if (updateFriendDto.status) updateData.status = updateFriendDto.status;

    const friendship = await this.prisma.friends.update({
      where: {
        user_id_friend_id: {
          user_id: userId,
          friend_id: friendId,
        },
      },
      data: updateData,
      include: {
        users_friends_user_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        users_friends_friend_idTousers: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
    });

    return friendship;
  }

  async remove(userId: number, friendId: number) {
    const friendship = await this.prisma.friends.findUnique({
      where: {
        user_id_friend_id: {
          user_id: userId,
          friend_id: friendId,
        },
      },
    });

    if (!friendship) {
      throw new NotFoundException(
        `Friendship between user ${userId} and friend ${friendId} not found`,
      );
    }

    await this.prisma.friends.delete({
      where: {
        user_id_friend_id: {
          user_id: userId,
          friend_id: friendId,
        },
      },
    });

    return { message: `Friendship between user ${userId} and friend ${friendId} has been deleted` };
  }
}

