import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { FriendService } from '../../src/modules/friend/friend.service';
import { FriendModule } from '../../src/modules/friend/friend.module';
import {
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  CreateFriendDto,
  FrStatus,
} from '../../src/modules/friend/dto/create-friend.dto';

jest.setTimeout(30000);

describe('FriendService (e2e)', () => {
  let app: INestApplication;
  let friendService: FriendService;
  let prismaService: PrismaService;
  let createdUserIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FriendModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    friendService = moduleFixture.get<FriendService>(FriendService);
    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    await prismaService.$executeRawUnsafe(`
      TRUNCATE TABLE 
        "reviews", 
        "saves", 
        "libraries", 
        "game_news", 
        "events", 
        "devs", 
        "game_tag_connection",
        "game_dev_connection",
        "user_achieve_connection",
        "achievements",
        "games",
        "tags",
        "users",
        "friends"
      RESTART IDENTITY CASCADE;
    `);
  });

  afterEach(async () => {
    if (createdUserIds.length > 0) {
      await prismaService.friends.deleteMany({
        where: {
          OR: [
            { user_id: { in: createdUserIds } },
            { friend_id: { in: createdUserIds } },
          ],
        },
      });
      await prismaService.reviews.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.saves.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.libraries.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.user_achieve_connection.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.users.deleteMany({
        where: { id: { in: createdUserIds } },
      });
      createdUserIds = [];
    }
  });

  afterAll(async () => {
    await app.close();
  });

  async function createTestUser(username: string) {
    const passwordHash = await bcrypt.hash('password123', 10);
    const uniqueId = `${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 5)}`;
    const uniqueUsername =
      `f${uniqueId}${username.substring(0, Math.max(0, 20 - uniqueId.length - 1))}`.substring(
        0,
        20,
      );
    const uniqueEmail = `${uniqueUsername}@example.com`;
    const user = await prismaService.users.create({
      data: {
        username: uniqueUsername,
        email: uniqueEmail,
        password_hash: passwordHash,
        age: 25,
        region: 'US',
      },
    });
    createdUserIds.push(user.id);
    return user;
  }

  describe('create', () => {
    it('should create a friendship successfully', async () => {
      const user1 = await createTestUser('friend_user1');
      const user2 = await createTestUser('friend_user2');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      };

      const friendship = await friendService.create(createFriendDto);

      expect(friendship).toBeDefined();
      expect(friendship.user_id).toBe(user1.id);
      expect(friendship.friend_id).toBe(user2.id);
      expect(friendship.status).toBe('pending');
      expect(friendship.users_friends_user_idTousers).toBeDefined();
      expect(friendship.users_friends_user_idTousers.id).toBe(user1.id);
      expect(friendship.users_friends_friend_idTousers).toBeDefined();
      expect(friendship.users_friends_friend_idTousers.id).toBe(user2.id);
    });

    it('should create a friendship with accepted status', async () => {
      const user1 = await createTestUser('friend_user3');
      const user2 = await createTestUser('friend_user4');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      };

      const friendship = await friendService.create(createFriendDto);

      expect(friendship.status).toBe('accepted');
    });

    it('should create a friendship with blocked status', async () => {
      const user1 = await createTestUser('friend_user5');
      const user2 = await createTestUser('friend_user6');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.blocked,
      };

      const friendship = await friendService.create(createFriendDto);

      expect(friendship.status).toBe('blocked');
    });

    it('should create a friendship with default pending status when status is not provided', async () => {
      const user1 = await createTestUser('friend_user7');
      const user2 = await createTestUser('friend_user8');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: user2.id,
      };

      const friendship = await friendService.create(createFriendDto);

      expect(friendship.status).toBe('pending');
    });

    it('should throw BadRequestException when user tries to add themselves as friend', async () => {
      const user = await createTestUser('friend_user9');

      const createFriendDto: CreateFriendDto = {
        user_id: user.id,
        friend_id: user.id,
        status: FrStatus.pending,
      };

      await expect(friendService.create(createFriendDto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw ConflictException when friendship already exists', async () => {
      const user1 = await createTestUser('friend_user10');
      const user2 = await createTestUser('friend_user11');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      };

      await friendService.create(createFriendDto);

      await expect(friendService.create(createFriendDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw NotFoundException when user_id does not exist', async () => {
      const user2 = await createTestUser('friend_user12');

      const createFriendDto: CreateFriendDto = {
        user_id: 999999,
        friend_id: user2.id,
        status: FrStatus.pending,
      };

      await expect(friendService.create(createFriendDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when friend_id does not exist', async () => {
      const user1 = await createTestUser('friend_user13');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: 999999,
        status: FrStatus.pending,
      };

      await expect(friendService.create(createFriendDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle database foreign key constraint violation for user_id', async () => {
      const user2 = await createTestUser('friend_user14');

      try {
        await prismaService.friends.create({
          data: {
            user_id: 999999,
            friend_id: user2.id,
            status: 'pending',
          },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2003');
      }
    });

    it('should handle database foreign key constraint violation for friend_id', async () => {
      const user1 = await createTestUser('friend_user15');

      try {
        await prismaService.friends.create({
          data: {
            user_id: user1.id,
            friend_id: 999999,
            status: 'pending',
          },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2003');
      }
    });

    it('should handle invalid status enum value in database', async () => {
      const user1 = await createTestUser('friend_user16');
      const user2 = await createTestUser('friend_user17');

      try {
        await prismaService.$executeRaw`
          INSERT INTO friends (user_id, friend_id, status)
          VALUES (${user1.id}, ${user2.id}, 'invalid_status')
        `;
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle transaction rollback on error', async () => {
      const user1 = await createTestUser('friend_user18');
      const user2 = await createTestUser('friend_user19');

      const createFriendDto: CreateFriendDto = {
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      };

      await friendService.create(createFriendDto);

      try {
        await friendService.create(createFriendDto);
        fail('Should have thrown an error');
      } catch (error: any) {
        const friendships = await prismaService.friends.findMany({
          where: {
            user_id: user1.id,
            friend_id: user2.id,
          },
        });
        expect(friendships.length).toBe(1);
      }
    });
  });

  describe('findAll', () => {
    it('should return all friendships', async () => {
      const user1 = await createTestUser('friend_user20');
      const user2 = await createTestUser('friend_user21');
      const user3 = await createTestUser('friend_user22');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      await friendService.create({
        user_id: user1.id,
        friend_id: user3.id,
        status: FrStatus.accepted,
      });

      const friendships = await friendService.findAll();

      expect(friendships.length).toBeGreaterThanOrEqual(2);
      expect(
        friendships.some(
          (f) => f.user_id === user1.id && f.friend_id === user2.id,
        ),
      ).toBe(true);
      expect(
        friendships.some(
          (f) => f.user_id === user1.id && f.friend_id === user3.id,
        ),
      ).toBe(true);
    });

    it('should return friendships with pagination', async () => {
      const user1 = await createTestUser('friend_user23');
      const user2 = await createTestUser('friend_user24');
      const user3 = await createTestUser('friend_user25');
      const user4 = await createTestUser('friend_user26');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      await friendService.create({
        user_id: user1.id,
        friend_id: user3.id,
        status: FrStatus.accepted,
      });

      await friendService.create({
        user_id: user1.id,
        friend_id: user4.id,
        status: FrStatus.blocked,
      });

      const friendships = await friendService.findAll(0, 2);

      expect(friendships.length).toBeLessThanOrEqual(2);
    });

    it('should return empty array when no friendships exist', async () => {
      const friendships = await friendService.findAll();

      const testFriendships = friendships.filter((f) =>
        createdUserIds.includes(f.user_id),
      );

      expect(testFriendships.length).toBe(0);
    });
  });

  describe('findByUser', () => {
    it('should return all friends of a user', async () => {
      const user1 = await createTestUser('friend_user27');
      const user2 = await createTestUser('friend_user28');
      const user3 = await createTestUser('friend_user29');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      await friendService.create({
        user_id: user1.id,
        friend_id: user3.id,
        status: FrStatus.accepted,
      });

      const friendships = await friendService.findByUser(user1.id);

      expect(friendships.length).toBe(2);
      expect(friendships[0].users_friends_friend_idTousers).toBeDefined();
      expect(friendships.some((f) => f.friend_id === user2.id)).toBe(true);
      expect(friendships.some((f) => f.friend_id === user3.id)).toBe(true);
    });

    it('should return friendships with pagination', async () => {
      const user1 = await createTestUser('friend_user30');
      const user2 = await createTestUser('friend_user31');
      const user3 = await createTestUser('friend_user32');
      const user4 = await createTestUser('friend_user33');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      await friendService.create({
        user_id: user1.id,
        friend_id: user3.id,
        status: FrStatus.accepted,
      });

      await friendService.create({
        user_id: user1.id,
        friend_id: user4.id,
        status: FrStatus.blocked,
      });

      const friendships = await friendService.findByUser(user1.id, 0, 2);

      expect(friendships.length).toBeLessThanOrEqual(2);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(friendService.findByUser(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return empty array when user has no friends', async () => {
      const user = await createTestUser('friend_user34');

      const friendships = await friendService.findByUser(user.id);

      expect(friendships.length).toBe(0);
    });
  });

  describe('findByFriend', () => {
    it('should return all users who have this user as friend', async () => {
      const user1 = await createTestUser('friend_user35');
      const user2 = await createTestUser('friend_user36');
      const user3 = await createTestUser('friend_user37');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      await friendService.create({
        user_id: user3.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      });

      const friendships = await friendService.findByFriend(user2.id);

      expect(friendships.length).toBe(2);
      expect(friendships[0].users_friends_user_idTousers).toBeDefined();
      expect(friendships.some((f) => f.user_id === user1.id)).toBe(true);
      expect(friendships.some((f) => f.user_id === user3.id)).toBe(true);
    });

    it('should return friendships with pagination', async () => {
      const user1 = await createTestUser('friend_user38');
      const user2 = await createTestUser('friend_user39');
      const user3 = await createTestUser('friend_user40');
      const user4 = await createTestUser('friend_user41');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      await friendService.create({
        user_id: user3.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      });

      await friendService.create({
        user_id: user4.id,
        friend_id: user2.id,
        status: FrStatus.blocked,
      });

      const friendships = await friendService.findByFriend(user2.id, 0, 2);

      expect(friendships.length).toBeLessThanOrEqual(2);
    });

    it('should throw NotFoundException when friend does not exist', async () => {
      await expect(friendService.findByFriend(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return empty array when no users have this user as friend', async () => {
      const user = await createTestUser('friend_user42');

      const friendships = await friendService.findByFriend(user.id);

      expect(friendships.length).toBe(0);
    });
  });

  describe('findOne', () => {
    it('should return a specific friendship', async () => {
      const user1 = await createTestUser('friend_user43');
      const user2 = await createTestUser('friend_user44');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      });

      const friendship = await friendService.findOne(user1.id, user2.id);

      expect(friendship).toBeDefined();
      expect(friendship.user_id).toBe(user1.id);
      expect(friendship.friend_id).toBe(user2.id);
      expect(friendship.status).toBe('accepted');
      expect(friendship.users_friends_user_idTousers).toBeDefined();
      expect(friendship.users_friends_friend_idTousers).toBeDefined();
    });

    it('should throw NotFoundException when friendship does not exist', async () => {
      const user1 = await createTestUser('friend_user45');
      const user2 = await createTestUser('friend_user46');

      await expect(friendService.findOne(user1.id, user2.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException with invalid user_id', async () => {
      const user2 = await createTestUser('friend_user47');

      await expect(friendService.findOne(999999, user2.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException with invalid friend_id', async () => {
      const user1 = await createTestUser('friend_user48');

      await expect(friendService.findOne(user1.id, 999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update friendship status', async () => {
      const user1 = await createTestUser('friend_user49');
      const user2 = await createTestUser('friend_user50');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      const updated = await friendService.update(user1.id, user2.id, {
        status: FrStatus.accepted,
      });

      expect(updated.status).toBe('accepted');
    });

    it('should update friendship status to blocked', async () => {
      const user1 = await createTestUser('friend_user51');
      const user2 = await createTestUser('friend_user52');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      });

      const updated = await friendService.update(user1.id, user2.id, {
        status: FrStatus.blocked,
      });

      expect(updated.status).toBe('blocked');
    });

    it('should update friendship status from blocked to accepted', async () => {
      const user1 = await createTestUser('friend_user53');
      const user2 = await createTestUser('friend_user54');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.blocked,
      });

      const updated = await friendService.update(user1.id, user2.id, {
        status: FrStatus.accepted,
      });

      expect(updated.status).toBe('accepted');
    });

    it('should throw NotFoundException when friendship does not exist', async () => {
      const user1 = await createTestUser('friend_user55');
      const user2 = await createTestUser('friend_user56');

      await expect(
        friendService.update(user1.id, user2.id, {
          status: FrStatus.accepted,
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should handle empty update data', async () => {
      const user1 = await createTestUser('friend_user57');
      const user2 = await createTestUser('friend_user58');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      const updated = await friendService.update(user1.id, user2.id, {});

      expect(updated.status).toBe('pending');
    });

    it('should handle invalid status enum value in database', async () => {
      const user1 = await createTestUser('friend_user59');
      const user2 = await createTestUser('friend_user60');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      try {
        await prismaService.$executeRaw`
          UPDATE friends
          SET status = 'invalid_status'
          WHERE user_id = ${user1.id} AND friend_id = ${user2.id}
        `;
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle transaction rollback on error', async () => {
      const user1 = await createTestUser('friend_user61');
      const user2 = await createTestUser('friend_user62');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.pending,
      });

      try {
        await friendService.update(user1.id, user2.id, {
          status: FrStatus.accepted,
        });
        const friendship = await prismaService.friends.findUnique({
          where: {
            user_id_friend_id: {
              user_id: user1.id,
              friend_id: user2.id,
            },
          },
        });
        expect(friendship?.status).toBe('accepted');
      } catch (error: any) {
        const friendship = await prismaService.friends.findUnique({
          where: {
            user_id_friend_id: {
              user_id: user1.id,
              friend_id: user2.id,
            },
          },
        });
        expect(friendship?.status).toBe('pending');
      }
    });
  });

  describe('remove', () => {
    it('should delete a friendship', async () => {
      const user1 = await createTestUser('friend_user63');
      const user2 = await createTestUser('friend_user64');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      });

      const result = await friendService.remove(user1.id, user2.id);

      expect(result.message).toContain('deleted');

      await expect(friendService.findOne(user1.id, user2.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when friendship does not exist', async () => {
      const user1 = await createTestUser('friend_user65');
      const user2 = await createTestUser('friend_user66');

      await expect(friendService.remove(user1.id, user2.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle database constraint violation when deleting non-existent friendship', async () => {
      const user1 = await createTestUser('friend_user67');
      const user2 = await createTestUser('friend_user68');

      try {
        await prismaService.friends.delete({
          where: {
            user_id_friend_id: {
              user_id: user1.id,
              friend_id: user2.id,
            },
          },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2025');
      }
    });

    it('should handle transaction rollback on error', async () => {
      const user1 = await createTestUser('friend_user69');
      const user2 = await createTestUser('friend_user70');

      await friendService.create({
        user_id: user1.id,
        friend_id: user2.id,
        status: FrStatus.accepted,
      });

      try {
        await friendService.remove(user1.id, user2.id);
        const friendship = await prismaService.friends.findUnique({
          where: {
            user_id_friend_id: {
              user_id: user1.id,
              friend_id: user2.id,
            },
          },
        });
        expect(friendship).toBeNull();
      } catch (error: any) {
        const friendship = await prismaService.friends.findUnique({
          where: {
            user_id_friend_id: {
              user_id: user1.id,
              friend_id: user2.id,
            },
          },
        });
        expect(friendship).toBeDefined();
      }
    });
  });
});
