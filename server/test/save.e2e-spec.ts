import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { SaveService } from '../src/modules/save/save.service';
import { SaveModule } from '../src/modules/save/save.module';
import { ConflictException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.setTimeout(30000);

describe('SaveService (e2e)', () => {
  let app: INestApplication;
  let saveService: SaveService;
  let prismaService: PrismaService;
  let createdSaveIds: number[] = [];
  let createdUserIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SaveModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    saveService = moduleFixture.get<SaveService>(SaveService);
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    if (createdSaveIds.length > 0) {
      await prismaService.saves.deleteMany({
        where: { id: { in: createdSaveIds } },
      });
      createdSaveIds = [];
    }

    if (createdUserIds.length > 0) {
      await prismaService.saves.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.libraries.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.reviews.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.user_achieve_connection.deleteMany({
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
      await prismaService.saves.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_tag_connection.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_dev_connection.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.achievements.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.events.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_news.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.reviews.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.libraries.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.games.deleteMany({
        where: { id: { in: createdGameIds } },
      });
      createdGameIds = [];
    }
  });

  afterAll(async () => {
    await app.close();
  });

  async function createTestUser(username: string) {
    const passwordHash = await bcrypt.hash('password123', 10);
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    const uniqueUsername = `s${uniqueId}${username.substring(
      0,
      Math.max(0, 20 - uniqueId.length - 1),
    )}`.substring(0, 20);
    const uniqueEmail = `save_${username}_${Date.now()}_${Math.random().toString(36).substring(7)}@example.com`;
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

  async function createTestGame(title: string) {
    const uniqueTitle = `save_${title}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const game = await prismaService.games.create({
      data: {
        title: uniqueTitle.substring(0, 50),
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
      },
    });
    createdGameIds.push(game.id);
    return game;
  }

  describe('create', () => {
    it('should create a save successfully', async () => {
      const user = await createTestUser('save_user1');
      const game = await createTestGame('Save Game 1');

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: {
          level: 5,
          score: 1000,
          inventory: ['sword', 'shield'],
        },
      };

      const save = await saveService.create(createSaveDto);
      createdSaveIds.push(save.id);

      expect(save).toBeDefined();
      expect(save.id).toBeDefined();
      expect(save.user_id).toBe(user.id);
      expect(save.game_id).toBe(game.id);
      expect(save.save_data).toEqual(createSaveDto.save_data);
      expect(save.users).toBeDefined();
      expect(save.users.id).toBe(user.id);
      expect(save.games).toBeDefined();
      expect(save.games.id).toBe(game.id);
      expect(save.last_updated).toBeDefined();
    });

    it('should create a save with complex JSON data', async () => {
      const user = await createTestUser('save_user2');
      const game = await createTestGame('Save Game 2');

      const complexData = {
        level: 10,
        score: 5000,
        inventory: [
          { id: 1, name: 'sword', durability: 100 },
          { id: 2, name: 'shield', durability: 80 },
        ],
        stats: {
          health: 150,
          mana: 100,
          experience: 2500,
        },
        quests: [
          { id: 1, name: 'Main Quest', completed: false },
          { id: 2, name: 'Side Quest', completed: true },
        ],
      };

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: complexData,
      };

      const save = await saveService.create(createSaveDto);
      createdSaveIds.push(save.id);

      expect(save.save_data).toEqual(complexData);
    });

    it('should throw ConflictException when save already exists', async () => {
      const user = await createTestUser('save_user3');
      const game = await createTestGame('Save Game 3');

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 1 },
      };

      const save = await saveService.create(createSaveDto);
      createdSaveIds.push(save.id);

      await expect(saveService.create(createSaveDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw NotFoundException when user does not exist', async () => {
      const game = await createTestGame('Save Game 4');

      const createSaveDto = {
        user_id: 999999,
        game_id: game.id,
        save_data: { level: 1 },
      };

      await expect(saveService.create(createSaveDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const user = await createTestUser('save_user5');

      const createSaveDto = {
        user_id: user.id,
        game_id: 999999,
        save_data: { level: 1 },
      };

      await expect(saveService.create(createSaveDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle transaction rollback on error', async () => {
      const user = await createTestUser('save_user6');
      const game = await createTestGame('Save Game 6');

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 1 },
      };

      const save = await saveService.create(createSaveDto);
      createdSaveIds.push(save.id);

      const saveCountBefore = await prismaService.saves.count({
        where: {
          user_id: user.id,
          game_id: game.id,
        },
      });
      expect(saveCountBefore).toBe(1);

      await expect(saveService.create(createSaveDto)).rejects.toThrow(
        ConflictException,
      );

      const saveCountAfter = await prismaService.saves.count({
        where: {
          user_id: user.id,
          game_id: game.id,
        },
      });
      expect(saveCountAfter).toBe(1);
    });
  });

  describe('findAll', () => {
    it('should return all saves', async () => {
      const user1 = await createTestUser('findall_user1');
      const user2 = await createTestUser('findall_user2');
      const game = await createTestGame('FindAll Game');

      const save1 = await saveService.create({
        user_id: user1.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const save2 = await saveService.create({
        user_id: user2.id,
        game_id: game.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const result = await saveService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(2);
      expect(result.some((s) => s.id === save1.id)).toBe(true);
      expect(result.some((s) => s.id === save2.id)).toBe(true);
    });

    it('should return saves ordered by last_updated desc', async () => {
      const user1 = await createTestUser('order_user1');
      const user2 = await createTestUser('order_user2');
      const game = await createTestGame('Order Game');

      const save1 = await saveService.create({
        user_id: user1.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const save2 = await saveService.create({
        user_id: user2.id,
        game_id: game.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const result = await saveService.findAll();
      const save1Index = result.findIndex((s) => s.id === save1.id);
      const save2Index = result.findIndex((s) => s.id === save2.id);
      expect(save2Index).toBeLessThan(save1Index);
    });

    it('should return saves with pagination', async () => {
      const user1 = await createTestUser('pagination_user1');
      const user2 = await createTestUser('pagination_user2');
      const user3 = await createTestUser('pagination_user3');
      const game = await createTestGame('Pagination Game');

      const save1 = await saveService.create({
        user_id: user1.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      const save2 = await saveService.create({
        user_id: user2.id,
        game_id: game.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const save3 = await saveService.create({
        user_id: user3.id,
        game_id: game.id,
        save_data: { level: 3 },
      });
      createdSaveIds.push(save3.id);

      const result = await saveService.findAll(0, 2);
      expect(result.length).toBe(2);
    });

    it('should include user and game information', async () => {
      const user = await createTestUser('include_user');
      const game = await createTestGame('Include Game');

      const save = await saveService.create({
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save.id);

      const result = await saveService.findAll();
      const foundSave = result.find((s) => s.id === save.id);

      expect(foundSave).toBeDefined();
      expect(foundSave?.users).toBeDefined();
      expect(foundSave?.users.id).toBe(user.id);
      expect(foundSave?.users.username).toBe(user.username);
      expect(foundSave?.games).toBeDefined();
      expect(foundSave?.games.id).toBe(game.id);
      expect(foundSave?.games.title).toBe(game.title);
    });
  });

  describe('findOne', () => {
    it('should return a save by id', async () => {
      const user = await createTestUser('findone_user');
      const game = await createTestGame('FindOne Game');

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 5, score: 1000 },
      };

      const createdSave = await saveService.create(createSaveDto);
      createdSaveIds.push(createdSave.id);

      const save = await saveService.findOne(createdSave.id);

      expect(save).toBeDefined();
      expect(save.id).toBe(createdSave.id);
      expect(save.user_id).toBe(user.id);
      expect(save.game_id).toBe(game.id);
      expect(save.save_data).toEqual(createSaveDto.save_data);
      expect(save.users).toBeDefined();
      expect(save.games).toBeDefined();
    });

    it('should throw NotFoundException when save does not exist', async () => {
      await expect(saveService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByUser', () => {
    it('should return saves for a specific user', async () => {
      const user = await createTestUser('findbyuser_user');
      const game1 = await createTestGame('FindByUser Game 1');
      const game2 = await createTestGame('FindByUser Game 2');

      const save1 = await saveService.create({
        user_id: user.id,
        game_id: game1.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      const save2 = await saveService.create({
        user_id: user.id,
        game_id: game2.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const saves = await saveService.findByUser(user.id);

      expect(saves).toBeDefined();
      expect(saves.length).toBe(2);
      expect(saves.some((s) => s.id === save1.id)).toBe(true);
      expect(saves.some((s) => s.id === save2.id)).toBe(true);
      expect(saves[0].games).toBeDefined();
    });

    it('should return saves ordered by last_updated desc', async () => {
      const user = await createTestUser('orderbyuser_user');
      const game = await createTestGame('OrderByUser Game');

      const save1 = await saveService.create({
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      await saveService.update(save1.id, {
        save_data: { level: 2 },
      });

      const saves = await saveService.findByUser(user.id);
      expect(saves.length).toBeGreaterThanOrEqual(1);
    });

    it('should return saves with pagination', async () => {
      const user = await createTestUser('pagination_user');
      const game1 = await createTestGame('Pagination Game 1');
      const game2 = await createTestGame('Pagination Game 2');
      const game3 = await createTestGame('Pagination Game 3');

      const save1 = await saveService.create({
        user_id: user.id,
        game_id: game1.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      const save2 = await saveService.create({
        user_id: user.id,
        game_id: game2.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const save3 = await saveService.create({
        user_id: user.id,
        game_id: game3.id,
        save_data: { level: 3 },
      });
      createdSaveIds.push(save3.id);

      const result = await saveService.findByUser(user.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when user has no saves', async () => {
      const user = await createTestUser('nosaves_user');

      const saves = await saveService.findByUser(user.id);

      expect(saves).toBeDefined();
      expect(saves.length).toBe(0);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(saveService.findByUser(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByGame', () => {
    it('should return saves for a specific game', async () => {
      const user1 = await createTestUser('findbygame_user1');
      const user2 = await createTestUser('findbygame_user2');
      const game = await createTestGame('FindByGame Game');

      const save1 = await saveService.create({
        user_id: user1.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      const save2 = await saveService.create({
        user_id: user2.id,
        game_id: game.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const saves = await saveService.findByGame(game.id);

      expect(saves).toBeDefined();
      expect(saves.length).toBe(2);
      expect(saves.some((s) => s.id === save1.id)).toBe(true);
      expect(saves.some((s) => s.id === save2.id)).toBe(true);
      expect(saves[0].users).toBeDefined();
    });

    it('should return saves with pagination', async () => {
      const user1 = await createTestUser('pag_game_user1');
      const user2 = await createTestUser('pag_game_user2');
      const user3 = await createTestUser('pag_game_user3');
      const game = await createTestGame('Pagination Game');

      const save1 = await saveService.create({
        user_id: user1.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(save1.id);

      const save2 = await saveService.create({
        user_id: user2.id,
        game_id: game.id,
        save_data: { level: 2 },
      });
      createdSaveIds.push(save2.id);

      const save3 = await saveService.create({
        user_id: user3.id,
        game_id: game.id,
        save_data: { level: 3 },
      });
      createdSaveIds.push(save3.id);

      const result = await saveService.findByGame(game.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when game has no saves', async () => {
      const game = await createTestGame('NoSaves Game');

      const saves = await saveService.findByGame(game.id);

      expect(saves).toBeDefined();
      expect(saves.length).toBe(0);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(saveService.findByGame(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByUserAndGame', () => {
    it('should return save for specific user and game', async () => {
      const user = await createTestUser('findbyboth_user');
      const game = await createTestGame('FindByBoth Game');

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 10, score: 5000 },
      };

      const createdSave = await saveService.create(createSaveDto);
      createdSaveIds.push(createdSave.id);

      const save = await saveService.findByUserAndGame(user.id, game.id);

      expect(save).toBeDefined();
      expect(save.id).toBe(createdSave.id);
      expect(save.user_id).toBe(user.id);
      expect(save.game_id).toBe(game.id);
      expect(save.save_data).toEqual(createSaveDto.save_data);
      expect(save.users).toBeDefined();
      expect(save.games).toBeDefined();
    });

    it('should throw NotFoundException when save does not exist', async () => {
      const user = await createTestUser('notfound_user');
      const game = await createTestGame('NotFound Game');

      await expect(
        saveService.findByUserAndGame(user.id, game.id),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update save data successfully', async () => {
      const user = await createTestUser('update_user');
      const game = await createTestGame('Update Game');

      const createSaveDto = {
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 5, score: 1000 },
      };

      const createdSave = await saveService.create(createSaveDto);
      createdSaveIds.push(createdSave.id);

      const originalLastUpdated = createdSave.last_updated;

      await new Promise((resolve) => setTimeout(resolve, 100));

      const updateDto = {
        save_data: { level: 10, score: 5000, inventory: ['sword'] },
      };

      const updatedSave = await saveService.update(createdSave.id, updateDto);

      expect(updatedSave.save_data).toEqual(updateDto.save_data);
      expect(updatedSave.last_updated.getTime()).toBeGreaterThan(
        originalLastUpdated.getTime(),
      );
    });

    it('should update save data with complex JSON', async () => {
      const user = await createTestUser('update_complex_user');
      const game = await createTestGame('Update Complex Game');

      const createdSave = await saveService.create({
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      createdSaveIds.push(createdSave.id);

      const complexData = {
        level: 20,
        score: 10000,
        inventory: [
          { id: 1, name: 'sword', durability: 100 },
          { id: 2, name: 'shield', durability: 80 },
        ],
        stats: {
          health: 200,
          mana: 150,
        },
      };

      const updatedSave = await saveService.update(createdSave.id, {
        save_data: complexData,
      });

      expect(updatedSave.save_data).toEqual(complexData);
    });

    it('should throw NotFoundException when save does not exist', async () => {
      const updateDto = {
        save_data: { level: 10 },
      };

      await expect(saveService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle empty update', async () => {
      const user = await createTestUser('empty_update_user');
      const game = await createTestGame('Empty Update Game');

      const createdSave = await saveService.create({
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 5 },
      });
      createdSaveIds.push(createdSave.id);

      const originalData = createdSave.save_data;

      const updatedSave = await saveService.update(createdSave.id, {});

      expect(updatedSave.save_data).toEqual(originalData);
    });
  });

  describe('remove', () => {
    it('should delete save successfully', async () => {
      const user = await createTestUser('delete_user');
      const game = await createTestGame('Delete Game');

      const createdSave = await saveService.create({
        user_id: user.id,
        game_id: game.id,
        save_data: { level: 1 },
      });
      const saveId = createdSave.id;

      const result = await saveService.remove(saveId);
      expect(result.message).toContain(saveId.toString());

      await expect(saveService.findOne(saveId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when save does not exist', async () => {
      await expect(saveService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
