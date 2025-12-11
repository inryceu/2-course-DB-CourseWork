import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { UserService } from '../../src/modules/user/user.service';
import { UserModule } from '../../src/modules/user/user.module';
import { ConflictException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.setTimeout(30000);

describe('UserService (e2e)', () => {
  let app: INestApplication;
  let userService: UserService;
  let prismaService: PrismaService;
  let createdUserIds: number[] = [];
  let createdGameIds: number[] = [];
  let createdAchievementIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userService = moduleFixture.get<UserService>(UserService);
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
    if (createdAchievementIds.length > 0) {
      await prismaService.user_achieve_connection.deleteMany({
        where: {
          achievement_id: { in: createdAchievementIds },
        },
      });
      await prismaService.achievements.deleteMany({
        where: { id: { in: createdAchievementIds } },
      });
      createdAchievementIds = [];
    }

    if (createdUserIds.length > 0) {
      await prismaService.user_achieve_connection.deleteMany({
        where: {
          user_id: { in: createdUserIds },
        },
      });
      await prismaService.libraries.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.reviews.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.saves.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.friends.deleteMany({
        where: {
          OR: [
            { user_id: { in: createdUserIds } },
            { friend_id: { in: createdUserIds } },
          ],
        },
      });
      await prismaService.users.deleteMany({
        where: { id: { in: createdUserIds } },
      });
      createdUserIds = [];
    }

    if (createdGameIds.length > 0) {
      await prismaService.games.deleteMany({
        where: { id: { in: createdGameIds } },
      });
      createdGameIds = [];
    }
  });

  afterAll(async () => {
    await app.close();
  });

  describe('create', () => {
    it('should create a user successfully', async () => {
      const createUserDto = {
        username: 'testuser1',
        email: 'test1@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
        avatar: 'https://example.com/avatar.jpg',
      };

      const user = await userService.create(createUserDto);
      createdUserIds.push(user.id);

      expect(user).toBeDefined();
      expect(user.id).toBeDefined();
      expect(user.username).toBe(createUserDto.username);
      expect(user.email).toBe(createUserDto.email);
      expect(user.age).toBe(createUserDto.age);
      expect(user.region).toBe(createUserDto.region);
      expect(user.avatar).toBe(createUserDto.avatar);
      expect(user.created_at).toBeDefined();
      expect(user['password_hash']).toBeUndefined();

      const dbUser = await prismaService.users.findUnique({
        where: { id: user.id },
      });
      expect(dbUser).toBeDefined();
      expect(dbUser?.password_hash).toBeDefined();
      const isPasswordValid = await bcrypt.compare(
        createUserDto.password,
        dbUser?.password_hash || '',
      );
      expect(isPasswordValid).toBe(true);
    });

    it('should create a user without avatar', async () => {
      const createUserDto = {
        username: 'testuser2',
        email: 'test2@example.com',
        password: 'password123',
        age: 30,
        region: 'CA',
      };

      const user = await userService.create(createUserDto);
      createdUserIds.push(user.id);

      expect(user.avatar).toBeNull();
    });

    it('should throw ConflictException when username already exists', async () => {
      const createUserDto = {
        username: 'duplicate_user',
        email: 'unique@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const user = await userService.create(createUserDto);
      createdUserIds.push(user.id);

      await expect(
        userService.create({
          ...createUserDto,
          email: 'different@example.com',
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('should throw ConflictException when email already exists', async () => {
      const createUserDto = {
        username: 'unique_user',
        email: 'duplicate@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const user = await userService.create(createUserDto);
      createdUserIds.push(user.id);

      await expect(
        userService.create({
          ...createUserDto,
          username: 'different_user',
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('should handle transaction rollback on error', async () => {
      const createUserDto = {
        username: 'rollback_test',
        email: 'rollback@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const user = await userService.create(createUserDto);
      createdUserIds.push(user.id);

      const userCountBefore = await prismaService.users.count({
        where: { username: 'rollback_test' },
      });
      expect(userCountBefore).toBe(1);

      await expect(userService.create(createUserDto)).rejects.toThrow(
        ConflictException,
      );

      const userCountAfter = await prismaService.users.count({
        where: { username: 'rollback_test' },
      });
      expect(userCountAfter).toBe(1);
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const users = [
        {
          username: 'findall1',
          email: 'findall1@example.com',
          password: 'password123',
          age: 20,
          region: 'US',
        },
        {
          username: 'findall2',
          email: 'findall2@example.com',
          password: 'password123',
          age: 25,
          region: 'CA',
        },
        {
          username: 'findall3',
          email: 'findall3@example.com',
          password: 'password123',
          age: 30,
          region: 'UK',
        },
      ];

      for (const userData of users) {
        const user = await userService.create(userData);
        createdUserIds.push(user.id);
      }

      const result = await userService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(3);
      expect(result.some((u) => u.username === 'findall1')).toBe(true);
      expect(result.some((u) => u.username === 'findall2')).toBe(true);
      expect(result.some((u) => u.username === 'findall3')).toBe(true);
    });

    it('should return users with pagination', async () => {
      const users = [
        {
          username: 'pagination1',
          email: 'pagination1@example.com',
          password: 'password123',
          age: 20,
          region: 'US',
        },
        {
          username: 'pagination2',
          email: 'pagination2@example.com',
          password: 'password123',
          age: 25,
          region: 'CA',
        },
        {
          username: 'pagination3',
          email: 'pagination3@example.com',
          password: 'password123',
          age: 30,
          region: 'UK',
        },
      ];

      for (const userData of users) {
        const user = await userService.create(userData);
        createdUserIds.push(user.id);
      }

      const result = await userService.findAll(0, 2);
      expect(result.length).toBe(2);
    });

    it('should return users ordered by created_at desc', async () => {
      const user1 = await userService.create({
        username: 'order1',
        email: 'order1@example.com',
        password: 'password123',
        age: 20,
        region: 'US',
      });
      createdUserIds.push(user1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const user2 = await userService.create({
        username: 'order2',
        email: 'order2@example.com',
        password: 'password123',
        age: 25,
        region: 'CA',
      });
      createdUserIds.push(user2.id);

      const result = await userService.findAll();
      const order1Index = result.findIndex((u) => u.id === user1.id);
      const order2Index = result.findIndex((u) => u.id === user2.id);
      expect(order2Index).toBeLessThan(order1Index);
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const createUserDto = {
        username: 'findone_user',
        email: 'findone@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const user = await userService.findOne(createdUser.id);

      expect(user).toBeDefined();
      expect(user.id).toBe(createdUser.id);
      expect(user.username).toBe(createUserDto.username);
      expect(user.email).toBe(createUserDto.email);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(userService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByUsername', () => {
    it('should return a user by username', async () => {
      const createUserDto = {
        username: 'findbyusername',
        email: 'findbyusername@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const user = await userService.findByUsername(createUserDto.username);

      expect(user).toBeDefined();
      expect(user.username).toBe(createUserDto.username);
      expect(user.email).toBe(createUserDto.email);
    });

    it('should throw NotFoundException when username does not exist', async () => {
      await expect(
        userService.findByUsername('nonexistent_user'),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update user successfully', async () => {
      const createUserDto = {
        username: 'update_user',
        email: 'update@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const updateDto = {
        username: 'updated_username',
        age: 30,
        region: 'CA',
      };

      const updatedUser = await userService.update(createdUser.id, updateDto);

      expect(updatedUser.username).toBe(updateDto.username);
      expect(updatedUser.age).toBe(updateDto.age);
      expect(updatedUser.region).toBe(updateDto.region);
      expect(updatedUser.email).toBe(createUserDto.email);
    });

    it('should update user password', async () => {
      const createUserDto = {
        username: 'update_password',
        email: 'updatepassword@example.com',
        password: 'oldpassword123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const updateDto = {
        password: 'newpassword123',
      };

      await userService.update(createdUser.id, updateDto);

      const dbUser = await prismaService.users.findUnique({
        where: { id: createdUser.id },
      });
      expect(dbUser).toBeDefined();
      const isNewPasswordValid = await bcrypt.compare(
        'newpassword123',
        dbUser?.password_hash || '',
      );
      expect(isNewPasswordValid).toBe(true);
    });

    it('should update user avatar', async () => {
      const createUserDto = {
        username: 'update_avatar',
        email: 'updateavatar@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const updateDto = {
        avatar: 'https://example.com/new-avatar.jpg',
      };

      const updatedUser = await userService.update(createdUser.id, updateDto);
      expect(updatedUser.avatar).toBe(updateDto.avatar);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      const updateDto = {
        username: 'new_username',
      };

      await expect(userService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException when username is taken', async () => {
      const user1 = await userService.create({
        username: 'conflict_user1',
        email: 'conflict1@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user1.id);

      const user2 = await userService.create({
        username: 'conflict_user2',
        email: 'conflict2@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user2.id);

      await expect(
        userService.update(user2.id, { username: 'conflict_user1' }),
      ).rejects.toThrow(ConflictException);
    });

    it('should throw ConflictException when email is taken', async () => {
      const user1 = await userService.create({
        username: 'email_conflict1',
        email: 'emailconflict1@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user1.id);

      const user2 = await userService.create({
        username: 'email_conflict2',
        email: 'emailconflict2@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user2.id);

      await expect(
        userService.update(user2.id, { email: 'emailconflict1@example.com' }),
      ).rejects.toThrow(ConflictException);
    });

    it('should allow updating to same username', async () => {
      const createUserDto = {
        username: 'same_username',
        email: 'sameusername@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const updateDto = {
        username: 'same_username',
        age: 30,
      };

      const updatedUser = await userService.update(createdUser.id, updateDto);
      expect(updatedUser.username).toBe('same_username');
      expect(updatedUser.age).toBe(30);
    });

    it('should handle partial updates', async () => {
      const createUserDto = {
        username: 'partial_update',
        email: 'partial@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
        avatar: 'https://example.com/old.jpg',
      };

      const createdUser = await userService.create(createUserDto);
      createdUserIds.push(createdUser.id);

      const updateDto = {
        age: 30,
      };

      const updatedUser = await userService.update(createdUser.id, updateDto);
      expect(updatedUser.age).toBe(30);
      expect(updatedUser.username).toBe(createUserDto.username);
      expect(updatedUser.email).toBe(createUserDto.email);
      expect(updatedUser.avatar).toBe(createUserDto.avatar);
    });
  });

  describe('remove', () => {
    it('should delete user successfully', async () => {
      const createUserDto = {
        username: 'delete_user',
        email: 'delete@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const createdUser = await userService.create(createUserDto);
      const userId = createdUser.id;

      const result = await userService.remove(userId);
      expect(result.message).toContain(userId.toString());

      await expect(userService.findOne(userId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(userService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle cascade delete of related records', async () => {
      const user = await userService.create({
        username: 'cascade_user',
        email: 'cascade@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const game = await prismaService.games.create({
        data: {
          title: 'Cascade Test Game',
          price: 29.99,
          release_date: new Date('2024-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      await prismaService.libraries.create({
        data: {
          user_id: user.id,
          game_id: game.id,
          ownership: 'purchased',
        },
      });

      await userService.remove(user.id);

      const library = await prismaService.libraries.findFirst({
        where: { user_id: user.id },
      });
      expect(library).toBeNull();
    });
  });

  describe('unlockAchievement', () => {
    it('should unlock achievement for user', async () => {
      const user = await userService.create({
        username: 'achievement_user',
        email: 'achievement@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const game = await prismaService.games.create({
        data: {
          title: 'Achievement Game',
          price: 19.99,
          release_date: new Date('2025-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'First Achievement',
          icon: 'https://example.com/icon.jpg',
        },
      });
      createdAchievementIds.push(achievement.id);

      const result = await userService.unlockAchievement(
        user.id,
        achievement.id,
      );

      expect(result.message).toContain(achievement.id.toString());
      expect(result.message).toContain(user.id.toString());

      const connection = await prismaService.user_achieve_connection.findUnique(
        {
          where: {
            user_id_achievement_id: {
              user_id: user.id,
              achievement_id: achievement.id,
            },
          },
        },
      );
      expect(connection).toBeDefined();
    });

    it('should throw NotFoundException when user does not exist', async () => {
      const game = await prismaService.games.create({
        data: {
          title: 'Test Game',
          price: 19.99,
          release_date: new Date('2025-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'Test Achievement',
          icon: 'https://example.com/icon.jpg',
        },
      });
      createdAchievementIds.push(achievement.id);

      await expect(
        userService.unlockAchievement(999999, achievement.id),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when achievement does not exist', async () => {
      const user = await userService.create({
        username: 'no_achievement_user',
        email: 'noachievement@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      await expect(
        userService.unlockAchievement(user.id, 999999),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException when achievement already unlocked', async () => {
      const user = await userService.create({
        username: 'dup_ach_user',
        email: 'duplicateachievement@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const game = await prismaService.games.create({
        data: {
          title: 'Duplicate Game',
          price: 19.99,
          release_date: new Date('2024-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'Duplicate Achievement',
          icon: 'https://example.com/icon.jpg',
        },
      });
      createdAchievementIds.push(achievement.id);

      await userService.unlockAchievement(user.id, achievement.id);

      await expect(
        userService.unlockAchievement(user.id, achievement.id),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('removeAchievement', () => {
    it('should remove achievement from user', async () => {
      const user = await userService.create({
        username: 'remove_ach_user',
        email: 'removeachievement@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const game = await prismaService.games.create({
        data: {
          title: 'Remove Achievement Game',
          price: 19.99,
          release_date: new Date('2024-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'Remove Achievement',
          icon: 'https://example.com/icon.jpg',
        },
      });
      createdAchievementIds.push(achievement.id);

      await userService.unlockAchievement(user.id, achievement.id);

      const result = await userService.removeAchievement(
        user.id,
        achievement.id,
      );

      expect(result.message).toContain(achievement.id.toString());
      expect(result.message).toContain(user.id.toString());

      const connection = await prismaService.user_achieve_connection.findUnique(
        {
          where: {
            user_id_achievement_id: {
              user_id: user.id,
              achievement_id: achievement.id,
            },
          },
        },
      );
      expect(connection).toBeNull();
    });

    it('should throw NotFoundException when connection does not exist', async () => {
      const user = await userService.create({
        username: 'no_connection_user',
        email: 'noconnection@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const game = await prismaService.games.create({
        data: {
          title: 'No Connection Game',
          price: 19.99,
          release_date: new Date('2024-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'No Connection Achievement',
          icon: 'https://example.com/icon.jpg',
        },
      });
      createdAchievementIds.push(achievement.id);

      await expect(
        userService.removeAchievement(user.id, achievement.id),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('getUserAchievements', () => {
    it('should return user achievements', async () => {
      const user = await userService.create({
        username: 'get_ach_user',
        email: 'getachievements@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const game = await prismaService.games.create({
        data: {
          title: 'Get Achievements Game',
          price: 19.99,
          release_date: new Date('2024-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement1 = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'Achievement 1',
          icon: 'https://example.com/icon1.jpg',
        },
      });
      createdAchievementIds.push(achievement1.id);

      const achievement2 = await prismaService.achievements.create({
        data: {
          game_id: game.id,
          title: 'Achievement 2',
          icon: 'https://example.com/icon2.jpg',
        },
      });
      createdAchievementIds.push(achievement2.id);

      await userService.unlockAchievement(user.id, achievement1.id);
      await userService.unlockAchievement(user.id, achievement2.id);

      const achievements = await userService.getUserAchievements(user.id);

      expect(achievements).toBeDefined();
      expect(achievements.length).toBe(2);
      expect(achievements.some((a) => a.id === achievement1.id)).toBe(true);
      expect(achievements.some((a) => a.id === achievement2.id)).toBe(true);
      expect(achievements[0].games).toBeDefined();
    });

    it('should return empty array when user has no achievements', async () => {
      const user = await userService.create({
        username: 'no_achievements_user',
        email: 'noachievements@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      });
      createdUserIds.push(user.id);

      const achievements = await userService.getUserAchievements(user.id);

      expect(achievements).toBeDefined();
      expect(achievements.length).toBe(0);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(userService.getUserAchievements(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
