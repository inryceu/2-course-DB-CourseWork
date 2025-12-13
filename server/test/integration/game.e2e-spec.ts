import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { GameService } from '../../src/modules/game/game.service';
import { GameModule } from '../../src/modules/game/game.module';
import { DatabaseConfigModule } from '../../src/config/database-config.module';
import {
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

jest.setTimeout(30000);

describe('GameService (e2e)', () => {
  let app: INestApplication;
  let gameService: GameService;
  let prismaService: PrismaService;
  let createdGameIds: number[] = [];
  let createdTagIds: number[] = [];
  let createdDevIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DatabaseConfigModule, GameModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    gameService = moduleFixture.get<GameService>(GameService);
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
    if (createdGameIds.length > 0) {
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
      await prismaService.saves.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.games.deleteMany({
        where: { id: { in: createdGameIds } },
      });
      createdGameIds = [];
    }

    if (createdTagIds.length > 0) {
      await prismaService.game_tag_connection.deleteMany({
        where: { tag_id: { in: createdTagIds } },
      });
      await prismaService.tags.deleteMany({
        where: { id: { in: createdTagIds } },
      });
      createdTagIds = [];
    }

    if (createdDevIds.length > 0) {
      await prismaService.game_dev_connection.deleteMany({
        where: { dev_id: { in: createdDevIds } },
      });
      await prismaService.devs.deleteMany({
        where: { id: { in: createdDevIds } },
      });
      createdDevIds = [];
    }
  });

  afterAll(async () => {
    await app.close();
  });

  async function createTestGame(title: string, baseGameId?: number) {
    const uniqueTitle = `g_${title}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const game = await prismaService.games.create({
      data: {
        title: uniqueTitle.substring(0, 50),
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
        base_game_id: baseGameId,
      },
    });
    createdGameIds.push(game.id);
    return game;
  }

  async function createTestTag(tagName: string) {
    const sanitizedName = tagName.toLowerCase().replace(/[^a-z]/g, '');
    const uniqueId =
      Date.now().toString(36).replace(/\d/g, '') +
      Math.random().toString(36).substring(2, 5).replace(/\d/g, '');
    const uniqueTagName = `${sanitizedName}${uniqueId}`.substring(0, 25);
    const tag = await prismaService.tags.create({
      data: {
        tag_name: uniqueTagName,
      },
    });
    createdTagIds.push(tag.id);
    return tag;
  }

  async function createTestDev(devName: string) {
    const uniqueDevName = `g_${devName}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const dev = await prismaService.devs.create({
      data: {
        dev_name: uniqueDevName.substring(0, 50),
        contacts: {},
        dev_type: 'developer',
      },
    });
    createdDevIds.push(dev.id);
    return dev;
  }

  describe('create', () => {
    it('should create a game successfully', async () => {
      const createGameDto = {
        title: `Test Game ${Date.now()}`,
        price: 29.99,
        release_date: '2025-01-01',
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'Test game description',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: false,
      };

      const game = await gameService.create(createGameDto);
      createdGameIds.push(game.id);

      expect(game).toBeDefined();
      expect(game.id).toBeDefined();
      expect(game.title).toBe(createGameDto.title);
      expect(Number(game.price)).toBe(createGameDto.price);
      expect(game.age_rating).toBe(createGameDto.age_rating);
      expect(game.cover).toBe(createGameDto.cover);
      expect(game.description).toBe(createGameDto.description);
      expect(game.system_requirements).toEqual(
        createGameDto.system_requirements,
      );
      expect(game.is_multiplayer).toBe(false);
    });

    it('should create a game with base_game_id', async () => {
      const baseGame = await createTestGame('Base Game');

      const createGameDto = {
        title: `DLC Game ${Date.now()}`,
        price: 9.99,
        release_date: '2025-02-01',
        age_rating: 'T',
        cover: 'https://example.com/dlc.jpg',
        system_requirements: {},
        base_game_id: baseGame.id,
      };

      const game = await gameService.create(createGameDto);
      createdGameIds.push(game.id);

      expect(game.base_game_id).toBe(baseGame.id);
    });

    it('should create a game with is_multiplayer true', async () => {
      const createGameDto = {
        title: `Multiplayer Game ${Date.now()}`,
        price: 39.99,
        release_date: '2025-03-01',
        age_rating: 'M',
        cover: 'https://example.com/multi.jpg',
        system_requirements: {},
        is_multiplayer: true,
      };

      const game = await gameService.create(createGameDto);
      createdGameIds.push(game.id);

      expect(game.is_multiplayer).toBe(true);
    });

    it('should create a game without optional fields', async () => {
      const createGameDto = {
        title: `Minimal Game ${Date.now()}`,
        release_date: '2025-01-01',
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
      };

      const game = await gameService.create(createGameDto);
      createdGameIds.push(game.id);

      expect(game.price).toBeNull();
      expect(game.description).toBeNull();
      expect(game.is_multiplayer).toBe(false);
    });

    it('should throw ConflictException when title already exists', async () => {
      const createGameDto = {
        title: `Duplicate Title ${Date.now()}`,
        release_date: '2025-01-01',
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
      };

      const game = await gameService.create(createGameDto);
      createdGameIds.push(game.id);

      await expect(gameService.create(createGameDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw BadRequestException when base_game_id does not exist', async () => {
      const createGameDto = {
        title: `Invalid Base Game ${Date.now()}`,
        release_date: '2025-01-01',
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
        base_game_id: 999999,
      };

      await expect(gameService.create(createGameDto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should handle transaction rollback on error', async () => {
      const createGameDto = {
        title: `Rollback Game ${Date.now()}`,
        release_date: '2025-01-01',
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
      };

      const game = await gameService.create(createGameDto);
      createdGameIds.push(game.id);

      const gameCountBefore = await prismaService.games.count({
        where: { title: createGameDto.title },
      });
      expect(gameCountBefore).toBe(1);

      await expect(gameService.create(createGameDto)).rejects.toThrow(
        ConflictException,
      );

      const gameCountAfter = await prismaService.games.count({
        where: { title: createGameDto.title },
      });
      expect(gameCountAfter).toBe(1);
    });
  });

  describe('findAll', () => {
    it('should return all games', async () => {
      const game1 = await createTestGame('FindAll Game 1');
      const game2 = await createTestGame('FindAll Game 2');

      const result = await gameService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(2);
      expect(result.some((g) => g.id === game1.id)).toBe(true);
      expect(result.some((g) => g.id === game2.id)).toBe(true);
    });

    it('should return games ordered by release_date desc', async () => {
      const game1 = await createTestGame('Order Game 1');
      await prismaService.games.update({
        where: { id: game1.id },
        data: { release_date: new Date('2025-01-01') },
      });

      await new Promise((resolve) => setTimeout(resolve, 100));

      const game2 = await createTestGame('Order Game 2');
      await prismaService.games.update({
        where: { id: game2.id },
        data: { release_date: new Date('2025-12-31') },
      });

      const result = await gameService.findAll();
      const game1Index = result.findIndex((g) => g.id === game1.id);
      const game2Index = result.findIndex((g) => g.id === game2.id);
      expect(game2Index).toBeLessThan(game1Index);
    });

    it('should return games with pagination', async () => {
      await createTestGame('Pagination Game 1');
      await createTestGame('Pagination Game 2');
      await createTestGame('Pagination Game 3');

      const result = await gameService.findAll(0, 2);
      expect(result.length).toBe(2);
    });
  });

  describe('findOne', () => {
    it('should return a game by id', async () => {
      const createdGame = await createTestGame('FindOne Game');

      const game = await gameService.findOne(createdGame.id);

      expect(game).toBeDefined();
      expect(game.id).toBe(createdGame.id);
      expect(game.title).toBe(createdGame.title);
      expect(game.games).toBeDefined();
      expect(game.other_games).toBeDefined();
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(gameService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByTitle', () => {
    it('should return a game by title', async () => {
      const createdGame = await createTestGame('FindByTitle Game');

      const game = await gameService.findByTitle(createdGame.title);

      expect(game).toBeDefined();
      expect(game.title).toBe(createdGame.title);
      expect(game.id).toBe(createdGame.id);
    });

    it('should throw NotFoundException when title does not exist', async () => {
      await expect(
        gameService.findByTitle('Nonexistent Game Title'),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update game title successfully', async () => {
      const createdGame = await createTestGame('Update Game');

      const updateDto = {
        title: `Updated Title ${Date.now()}`,
      };

      const updatedGame = await gameService.update(createdGame.id, updateDto);

      expect(updatedGame.title).toBe(updateDto.title);
    });

    it('should update game price successfully', async () => {
      const createdGame = await createTestGame('Update Price Game');

      const updateDto = {
        price: 19.99,
      };

      const updatedGame = await gameService.update(createdGame.id, updateDto);

      expect(Number(updatedGame.price)).toBe(19.99);
    });

    it('should update base_game_id successfully', async () => {
      const baseGame = await createTestGame('Base Game Update');
      const game = await createTestGame('Update Base Game');

      const updateDto = {
        base_game_id: baseGame.id,
      };

      const updatedGame = await gameService.update(game.id, updateDto);

      expect(updatedGame.base_game_id).toBe(baseGame.id);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const updateDto = {
        title: 'New Title',
      };

      await expect(gameService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException when title is taken', async () => {
      const game1 = await createTestGame('Conflict Game 1');
      const game2 = await createTestGame('Conflict Game 2');

      await expect(
        gameService.update(game2.id, { title: game1.title }),
      ).rejects.toThrow(ConflictException);
    });

    it('should throw BadRequestException when base_game_id does not exist', async () => {
      const game = await createTestGame('Invalid Base Game');

      await expect(
        gameService.update(game.id, { base_game_id: 999999 }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when game is its own base game', async () => {
      const game = await createTestGame('Self Base Game');

      await expect(
        gameService.update(game.id, { base_game_id: game.id }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should handle empty update', async () => {
      const game = await createTestGame('Empty Update Game');

      const originalTitle = game.title;
      const originalPrice = game.price;

      const updatedGame = await gameService.update(game.id, {});

      expect(updatedGame.title).toBe(originalTitle);
      expect(updatedGame.price).toEqual(originalPrice);
    });

    it('should fail when updating non-existent game', async () => {
      const game = await createTestGame('Fail Update Game');

      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      await expect(
        gameService.update(game.id, { title: 'New Title' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should delete game successfully', async () => {
      const game = await createTestGame('Delete Game');
      const gameId = game.id;

      const result = await gameService.remove(gameId);
      expect(result.message).toContain(gameId.toString());

      await expect(gameService.findOne(gameId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(gameService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('addTagToGame', () => {
    it('should add tag to game successfully', async () => {
      const game = await createTestGame('Add Tag Game');
      const tag = await createTestTag('Add Tag');

      const result = await gameService.addTagToGame(game.id, tag.id);

      expect(result.message).toContain(tag.id.toString());
      expect(result.message).toContain(game.id.toString());

      const connection = await prismaService.game_tag_connection.findUnique({
        where: {
          game_id_tag_id: {
            game_id: game.id,
            tag_id: tag.id,
          },
        },
      });
      expect(connection).toBeDefined();
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const tag = await createTestTag('No Game Tag');

      await expect(gameService.addTagToGame(999999, tag.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when tag does not exist', async () => {
      const game = await createTestGame('No Tag Game');

      await expect(gameService.addTagToGame(game.id, 999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException when tag already associated', async () => {
      const game = await createTestGame('Duplicate Tag Game');
      const tag = await createTestTag('Duplicate Tag');

      await gameService.addTagToGame(game.id, tag.id);

      await expect(gameService.addTagToGame(game.id, tag.id)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should fail with invalid foreign key constraint for game', async () => {
      const game = await createTestGame('FK Tag Game');
      const tag = await createTestTag('FK Tag');
      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      await expect(gameService.addTagToGame(game.id, tag.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should fail with invalid foreign key constraint for tag', async () => {
      const game = await createTestGame('FK Tag Game 2');
      const tag = await createTestTag('FK Tag 2');
      await prismaService.tags.delete({ where: { id: tag.id } });
      createdTagIds = createdTagIds.filter((id) => id !== tag.id);

      await expect(gameService.addTagToGame(game.id, tag.id)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('removeTagFromGame', () => {
    it('should remove tag from game successfully', async () => {
      const game = await createTestGame('Remove Tag Game');
      const tag = await createTestTag('Remove Tag');

      await gameService.addTagToGame(game.id, tag.id);

      const result = await gameService.removeTagFromGame(game.id, tag.id);

      expect(result.message).toContain(tag.id.toString());
      expect(result.message).toContain(game.id.toString());

      const connection = await prismaService.game_tag_connection.findUnique({
        where: {
          game_id_tag_id: {
            game_id: game.id,
            tag_id: tag.id,
          },
        },
      });
      expect(connection).toBeNull();
    });

    it('should throw NotFoundException when connection does not exist', async () => {
      const game = await createTestGame('No Connection Game');
      const tag = await createTestTag('No Connection Tag');

      await expect(
        gameService.removeTagFromGame(game.id, tag.id),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('getGameTags', () => {
    it('should return tags for a game', async () => {
      const game = await createTestGame('Get Tags Game');
      const tag1 = await createTestTag('Tag 1');
      const tag2 = await createTestTag('Tag 2');

      await gameService.addTagToGame(game.id, tag1.id);
      await gameService.addTagToGame(game.id, tag2.id);

      const tags = await gameService.getGameTags(game.id);

      expect(tags).toBeDefined();
      expect(tags.length).toBe(2);
      expect(tags.some((t) => t.id === tag1.id)).toBe(true);
      expect(tags.some((t) => t.id === tag2.id)).toBe(true);
    });

    it('should return empty array when game has no tags', async () => {
      const game = await createTestGame('No Tags Game');

      const tags = await gameService.getGameTags(game.id);

      expect(tags).toBeDefined();
      expect(tags.length).toBe(0);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(gameService.getGameTags(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('addDeveloperToGame', () => {
    it('should add developer to game successfully', async () => {
      const game = await createTestGame('Add Dev Game');
      const dev = await createTestDev('Add Dev');

      const result = await gameService.addDeveloperToGame(game.id, dev.id);

      expect(result.message).toContain(dev.id.toString());
      expect(result.message).toContain(game.id.toString());

      const connection = await prismaService.game_dev_connection.findUnique({
        where: {
          game_id_dev_id: {
            game_id: game.id,
            dev_id: dev.id,
          },
        },
      });
      expect(connection).toBeDefined();
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const dev = await createTestDev('No Game Dev');

      await expect(
        gameService.addDeveloperToGame(999999, dev.id),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when developer does not exist', async () => {
      const game = await createTestGame('No Dev Game');

      await expect(
        gameService.addDeveloperToGame(game.id, 999999),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException when developer already associated', async () => {
      const game = await createTestGame('Duplicate Dev Game');
      const dev = await createTestDev('Duplicate Dev');

      await gameService.addDeveloperToGame(game.id, dev.id);

      await expect(
        gameService.addDeveloperToGame(game.id, dev.id),
      ).rejects.toThrow(ConflictException);
    });

    it('should fail with invalid foreign key constraint for game', async () => {
      const game = await createTestGame('FK Dev Game');
      const dev = await createTestDev('FK Dev');
      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      await expect(
        gameService.addDeveloperToGame(game.id, dev.id),
      ).rejects.toThrow(NotFoundException);
    });

    it('should fail with invalid foreign key constraint for developer', async () => {
      const game = await createTestGame('FK Dev Game 2');
      const dev = await createTestDev('FK Dev 2');
      await prismaService.devs.delete({ where: { id: dev.id } });
      createdDevIds = createdDevIds.filter((id) => id !== dev.id);

      await expect(
        gameService.addDeveloperToGame(game.id, dev.id),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('removeDeveloperFromGame', () => {
    it('should remove developer from game successfully', async () => {
      const game = await createTestGame('Remove Dev Game');
      const dev = await createTestDev('Remove Dev');

      await gameService.addDeveloperToGame(game.id, dev.id);

      const result = await gameService.removeDeveloperFromGame(game.id, dev.id);

      expect(result.message).toContain(dev.id.toString());
      expect(result.message).toContain(game.id.toString());

      const connection = await prismaService.game_dev_connection.findUnique({
        where: {
          game_id_dev_id: {
            game_id: game.id,
            dev_id: dev.id,
          },
        },
      });
      expect(connection).toBeNull();
    });

    it('should throw NotFoundException when connection does not exist', async () => {
      const game = await createTestGame('No Connection Dev Game');
      const dev = await createTestDev('No Connection Dev');

      await expect(
        gameService.removeDeveloperFromGame(game.id, dev.id),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('getGameDevelopers', () => {
    it('should return developers for a game', async () => {
      const game = await createTestGame('Get Devs Game');
      const dev1 = await createTestDev('Dev 1');
      const dev2 = await createTestDev('Dev 2');

      await gameService.addDeveloperToGame(game.id, dev1.id);
      await gameService.addDeveloperToGame(game.id, dev2.id);

      const developers = await gameService.getGameDevelopers(game.id);

      expect(developers).toBeDefined();
      expect(developers.length).toBe(2);
      expect(developers.some((d) => d.id === dev1.id)).toBe(true);
      expect(developers.some((d) => d.id === dev2.id)).toBe(true);
    });

    it('should return empty array when game has no developers', async () => {
      const game = await createTestGame('No Devs Game');

      const developers = await gameService.getGameDevelopers(game.id);

      expect(developers).toBeDefined();
      expect(developers.length).toBe(0);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(gameService.getGameDevelopers(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
