import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { UserModule } from '../../src/modules/user/user.module';
import { DatabaseConfigModule } from '../../src/config/database-config.module';
import * as bcrypt from 'bcrypt';

jest.setTimeout(30000);

describe('User Module (CQS - Commands and Queries)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let createdUserIds: number[] = [];
  let createdGameIds: number[] = [];
  let createdAchievementIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DatabaseConfigModule, UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    await prismaService.$executeRawUnsafe(`
      TRUNCATE TABLE "users", "achievements", "games", "user_achieve_connection" RESTART IDENTITY CASCADE;
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

    await app?.close();
  });

  describe('POST /users (CreateUserCommand)', () => {
    it('should create user and return only ID', async () => {
      const createUserDto = {
        username: 'testuser1',
        email: 'test1@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
        avatar: 'https://example.com/avatar.jpg',
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(typeof response.body.id).toBe('number');
      expect(response.body.username).toBeUndefined();
      expect(response.body.email).toBeUndefined();

      createdUserIds.push(response.body.id);

      const dbUser = await prismaService.users.findUnique({
        where: { id: response.body.id },
      });
      expect(dbUser).toBeDefined();
      expect(dbUser!.username).toBe(createUserDto.username);

      const isPasswordValid = await bcrypt.compare(
        createUserDto.password,
        dbUser!.password_hash,
      );
      expect(isPasswordValid).toBe(true);
    });

    it('should return 409 Conflict when username already exists', async () => {
      const createUserDto = {
        username: 'duplicate_user',
        email: 'unique1@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
      };

      const firstResponse = await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(201);

      createdUserIds.push(firstResponse.body.id);

      const response = await request(app.getHttpServer())
        .post('/users')
        .send({ ...createUserDto, email: 'unique2@example.com' })
        .expect(409);

      expect(response.body.message).toContain('duplicate_user');
    });

    it('should return 400 Bad Request for invalid age', async () => {
      const createUserDto = {
        username: 'valid_user',
        email: 'valid@example.com',
        password: 'password123',
        age: 150,
        region: 'US',
      };

      await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(400);
    });
  });

  describe('GET /users/:id (GetUserByIdQuery)', () => {
    it('should return UserReadModel with achievementCount', async () => {
      const user = await prismaService.users.create({
        data: {
          username: 'queryuser',
          email: 'query@example.com',
          password_hash: 'hash',
          age: 25,
          region: 'US',
        },
      });
      createdUserIds.push(user.id);

      const response = await request(app.getHttpServer())
        .get(`/users/${user.id}`)
        .expect(200);

      expect(response.body).toMatchObject({
        id: user.id,
        username: 'queryuser',
        email: 'query@example.com',
        age: 25,
        region: 'US',
        achievementCount: 0,
      });

      expect(response.body.passwordHash).toBeUndefined();
      expect(response.body.password_hash).toBeUndefined();
    });

    it('should return 404 when user not found', async () => {
      await request(app.getHttpServer()).get('/users/99999').expect(404);
    });
  });

  describe('GET /users (GetUserListQuery)', () => {
    it('should return paginated list of UserListItemReadModels', async () => {
      const user1 = await prismaService.users.create({
        data: {
          username: 'listuser1',
          email: 'list1@example.com',
          password_hash: 'hash',
          age: 25,
          region: 'US',
        },
      });
      const user2 = await prismaService.users.create({
        data: {
          username: 'listuser2',
          email: 'list2@example.com',
          password_hash: 'hash',
          age: 30,
          region: 'CA',
        },
      });
      createdUserIds.push(user1.id, user2.id);

      const response = await request(app.getHttpServer())
        .get('/users?page=1&limit=10')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThanOrEqual(2);

      const foundUser = response.body.find((u: any) => u.id === user1.id);
      expect(foundUser).toBeDefined();
      expect(foundUser).toHaveProperty('username');
      expect(foundUser).toHaveProperty('region');
      expect(foundUser).toHaveProperty('achievementCount');
      expect(foundUser.email).toBeUndefined();
    });

    it('should filter users by search term', async () => {
      const user = await prismaService.users.create({
        data: {
          username: 'searchable',
          email: 'searchable@example.com',
          password_hash: 'hash',
          age: 25,
          region: 'US',
        },
      });
      createdUserIds.push(user.id);

      const response = await request(app.getHttpServer())
        .get('/users?search=searchable')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      const found = response.body.find((u: any) => u.username === 'searchable');
      expect(found).toBeDefined();
    });
  });

  describe('POST /users/:id/achievements/:achievementId (UnlockAchievementCommand)', () => {
    it('should unlock achievement and return 204', async () => {
      const userRes = await request(app.getHttpServer()).post('/users').send({
        username: 'achiever',
        email: 'achiever@example.com',
        password: 'password123',
        age: 20,
        region: 'US',
      });
      const userId = userRes.body.id;
      createdUserIds.push(userId);

      const game = await prismaService.games.create({
        data: {
          title: 'Test Game',
          price: 0,
          age_rating: 'E',
          release_date: new Date('2025-01-01'),
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      const achievement = await prismaService.achievements.create({
        data: { game_id: game.id, title: 'Win', icon: 'icon.png' },
      });
      createdAchievementIds.push(achievement.id);

      await request(app.getHttpServer())
        .post(`/users/${userId}/achievements/${achievement.id}`)
        .expect(204);

      const connection = await prismaService.user_achieve_connection.findUnique(
        {
          where: {
            user_id_achievement_id: {
              user_id: userId,
              achievement_id: achievement.id,
            },
          },
        },
      );
      expect(connection).toBeDefined();
    });
  });
});
