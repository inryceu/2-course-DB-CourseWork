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

describe('UserService (e2e)', () => {
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

  afterAll(async () => {
    await app?.close();
  });

  describe('POST /users (Create)', () => {
    it('should create a user successfully and return 201', async () => {
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

      const user = response.body;
      createdUserIds.push(user.id);

      expect(user.id).toBeDefined();
      expect(user.username).toBe(createUserDto.username);
      expect(user.password_hash).toBeUndefined();

      // Перевіряємо в реальній БД
      const dbUser = await prismaService.users.findUnique({
        where: { id: user.id },
      });
      expect(dbUser).toBeDefined();

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

      await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(201);

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

  describe('POST /users/:id/achievements/:achievementId', () => {
    it('should unlock achievement and return 201', async () => {
      const userRes = await request(app.getHttpServer()).post('/users').send({
        username: 'achiever',
        email: 'achiever@example.com',
        password: 'password123',
        age: 20,
        region: 'US',
      });
      const userId = userRes.body.id;

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
      const achievement = await prismaService.achievements.create({
        data: { game_id: game.id, title: 'Win', icon: 'icon.png' },
      });

      await request(app.getHttpServer())
        .post(`/users/${userId}/achievements/${achievement.id}`)
        .expect(201);

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
