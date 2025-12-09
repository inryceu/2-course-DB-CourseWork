import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { TagService } from '../src/modules/tag/tag.service';
import { TagModule } from '../src/modules/tag/tag.module';
import { ConflictException, NotFoundException } from '@nestjs/common';

jest.setTimeout(30000);

describe('TagService (e2e)', () => {
  let app: INestApplication;
  let tagService: TagService;
  let prismaService: PrismaService;
  let createdTagIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TagModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    tagService = moduleFixture.get<TagService>(TagService);
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    if (createdGameIds.length > 0) {
      await prismaService.game_tag_connection.deleteMany({
        where: {
          game_id: { in: createdGameIds },
        },
      });
      await prismaService.games.deleteMany({
        where: { id: { in: createdGameIds } },
      });
      createdGameIds = [];
    }

    if (createdTagIds.length > 0) {
      await prismaService.game_tag_connection.deleteMany({
        where: {
          tag_id: { in: createdTagIds },
        },
      });
      await prismaService.tags.deleteMany({
        where: { id: { in: createdTagIds } },
      });
      createdTagIds = [];
    }
  });

  afterAll(async () => {
    await app.close();
  });

  describe('create', () => {
    it('should create a tag successfully', async () => {
      const createTagDto = {
        tag_name: 'Action',
      };

      const tag = await tagService.create(createTagDto);
      createdTagIds.push(tag.id);

      expect(tag).toBeDefined();
      expect(tag.id).toBeDefined();
      expect(tag.tag_name).toBe(createTagDto.tag_name);

      const dbTag = await prismaService.tags.findUnique({
        where: { id: tag.id },
      });
      expect(dbTag).toBeDefined();
      expect(dbTag.tag_name).toBe(createTagDto.tag_name);
    });

    it('should create a tag with maximum length name', async () => {
      const createTagDto = {
        tag_name: 'A'.repeat(25),
      };

      const tag = await tagService.create(createTagDto);
      createdTagIds.push(tag.id);

      expect(tag.tag_name).toBe(createTagDto.tag_name);
    });

    it('should throw ConflictException when tag name already exists', async () => {
      const createTagDto = {
        tag_name: 'DuplicateTag',
      };

      const tag = await tagService.create(createTagDto);
      createdTagIds.push(tag.id);

      await expect(tagService.create(createTagDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should handle transaction rollback on error', async () => {
      const createTagDto = {
        tag_name: 'RollbackTag',
      };

      const tag = await tagService.create(createTagDto);
      createdTagIds.push(tag.id);

      const tagCountBefore = await prismaService.tags.count({
        where: { tag_name: 'RollbackTag' },
      });
      expect(tagCountBefore).toBe(1);

      await expect(tagService.create(createTagDto)).rejects.toThrow(
        ConflictException,
      );

      const tagCountAfter = await prismaService.tags.count({
        where: { tag_name: 'RollbackTag' },
      });
      expect(tagCountAfter).toBe(1);
    });
  });

  describe('findAll', () => {
    it('should return all tags', async () => {
      const tags = [
        { tag_name: 'Zebra' },
        { tag_name: 'Alpha' },
        { tag_name: 'Beta' },
      ];

      for (const tagData of tags) {
        const tag = await tagService.create(tagData);
        createdTagIds.push(tag.id);
      }

      const result = await tagService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(3);
      expect(result.some((t) => t.tag_name === 'Alpha')).toBe(true);
      expect(result.some((t) => t.tag_name === 'Beta')).toBe(true);
      expect(result.some((t) => t.tag_name === 'Zebra')).toBe(true);
    });

    it('should return tags ordered by tag_name ascending', async () => {
      const tags = [
        { tag_name: 'Zebra' },
        { tag_name: 'Alpha' },
        { tag_name: 'Beta' },
      ];

      for (const tagData of tags) {
        const tag = await tagService.create(tagData);
        createdTagIds.push(tag.id);
      }

      const result = await tagService.findAll();
      const alphaIndex = result.findIndex((t) => t.tag_name === 'Alpha');
      const betaIndex = result.findIndex((t) => t.tag_name === 'Beta');
      const zebraIndex = result.findIndex((t) => t.tag_name === 'Zebra');

      expect(alphaIndex).toBeLessThan(betaIndex);
      expect(betaIndex).toBeLessThan(zebraIndex);
    });

    it('should return tags with pagination', async () => {
      const tags = [
        { tag_name: 'Pagination1' },
        { tag_name: 'Pagination2' },
        { tag_name: 'Pagination3' },
      ];

      for (const tagData of tags) {
        const tag = await tagService.create(tagData);
        createdTagIds.push(tag.id);
      }

      const result = await tagService.findAll(0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when no tags exist', async () => {
      const result = await tagService.findAll();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('findOne', () => {
    it('should return a tag by id', async () => {
      const createTagDto = {
        tag_name: 'FindOneTag',
      };

      const createdTag = await tagService.create(createTagDto);
      createdTagIds.push(createdTag.id);

      const tag = await tagService.findOne(createdTag.id);

      expect(tag).toBeDefined();
      expect(tag.id).toBe(createdTag.id);
      expect(tag.tag_name).toBe(createTagDto.tag_name);
    });

    it('should throw NotFoundException when tag does not exist', async () => {
      await expect(tagService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByName', () => {
    it('should return a tag by name', async () => {
      const createTagDto = {
        tag_name: 'FindByNameTag',
      };

      const createdTag = await tagService.create(createTagDto);
      createdTagIds.push(createdTag.id);

      const tag = await tagService.findByName(createTagDto.tag_name);

      expect(tag).toBeDefined();
      expect(tag.tag_name).toBe(createTagDto.tag_name);
      expect(tag.id).toBe(createdTag.id);
    });

    it('should throw NotFoundException when tag name does not exist', async () => {
      await expect(tagService.findByName('NonexistentTag')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should be case sensitive', async () => {
      const createTagDto = {
        tag_name: 'CaseSensitive',
      };

      const createdTag = await tagService.create(createTagDto);
      createdTagIds.push(createdTag.id);

      await expect(tagService.findByName('casesensitive')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update tag name successfully', async () => {
      const createTagDto = {
        tag_name: 'UpdateTag',
      };

      const createdTag = await tagService.create(createTagDto);
      createdTagIds.push(createdTag.id);

      const updateDto = {
        tag_name: 'UpdatedTag',
      };

      const updatedTag = await tagService.update(createdTag.id, updateDto);

      expect(updatedTag.tag_name).toBe(updateDto.tag_name);
      expect(updatedTag.id).toBe(createdTag.id);

      const dbTag = await prismaService.tags.findUnique({
        where: { id: createdTag.id },
      });
      expect(dbTag.tag_name).toBe(updateDto.tag_name);
    });

    it('should allow updating to same name', async () => {
      const createTagDto = {
        tag_name: 'SameNameTag',
      };

      const createdTag = await tagService.create(createTagDto);
      createdTagIds.push(createdTag.id);

      const updateDto = {
        tag_name: 'SameNameTag',
      };

      const updatedTag = await tagService.update(createdTag.id, updateDto);
      expect(updatedTag.tag_name).toBe('SameNameTag');
    });

    it('should throw NotFoundException when tag does not exist', async () => {
      const updateDto = {
        tag_name: 'NewName',
      };

      await expect(tagService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException when tag name is taken', async () => {
      const tag1 = await tagService.create({
        tag_name: 'ConflictTag1',
      });
      createdTagIds.push(tag1.id);

      const tag2 = await tagService.create({
        tag_name: 'ConflictTag2',
      });
      createdTagIds.push(tag2.id);

      await expect(
        tagService.update(tag2.id, { tag_name: 'ConflictTag1' }),
      ).rejects.toThrow(ConflictException);
    });

    it('should handle empty update', async () => {
      const createTagDto = {
        tag_name: 'EmptyUpdateTag',
      };

      const createdTag = await tagService.create(createTagDto);
      createdTagIds.push(createdTag.id);

      const updateDto = {};

      const updatedTag = await tagService.update(createdTag.id, updateDto);
      expect(updatedTag.tag_name).toBe(createTagDto.tag_name);
    });
  });

  describe('remove', () => {
    it('should delete tag successfully', async () => {
      const createTagDto = {
        tag_name: 'DeleteTag',
      };

      const createdTag = await tagService.create(createTagDto);
      const tagId = createdTag.id;

      const result = await tagService.remove(tagId);
      expect(result.message).toContain(tagId.toString());

      await expect(tagService.findOne(tagId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when tag does not exist', async () => {
      await expect(tagService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle cascade delete of game connections', async () => {
      const tag = await tagService.create({
        tag_name: 'CascadeTag',
      });
      createdTagIds.push(tag.id);

      const game = await prismaService.games.create({
        data: {
          title: 'Cascade Test Game',
          price: 29.99,
          release_date: new Date('2025-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game.id);

      await prismaService.game_tag_connection.create({
        data: {
          game_id: game.id,
          tag_id: tag.id,
        },
      });

      await tagService.remove(tag.id);

      const connection = await prismaService.game_tag_connection.findFirst({
        where: { tag_id: tag.id },
      });
      expect(connection).toBeNull();
    });
  });

  describe('getGamesByTag', () => {
    it('should return games associated with tag', async () => {
      const tag = await tagService.create({
        tag_name: 'GameTag',
      });
      createdTagIds.push(tag.id);

      const game1 = await prismaService.games.create({
        data: {
          title: 'Game 1',
          price: 19.99,
          release_date: new Date('2025-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/game1.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game1.id);

      const game2 = await prismaService.games.create({
        data: {
          title: 'Game 2',
          price: 29.99,
          release_date: new Date('2025-02-01'),
          age_rating: 'T',
          cover: 'https://example.com/game2.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game2.id);

      await prismaService.game_tag_connection.create({
        data: {
          game_id: game1.id,
          tag_id: tag.id,
        },
      });

      await prismaService.game_tag_connection.create({
        data: {
          game_id: game2.id,
          tag_id: tag.id,
        },
      });

      const games = await tagService.getGamesByTag(tag.id);

      expect(games).toBeDefined();
      expect(games.length).toBe(2);
      expect(games.some((g) => g.id === game1.id)).toBe(true);
      expect(games.some((g) => g.id === game2.id)).toBe(true);
      expect(games[0]).toHaveProperty('id');
      expect(games[0]).toHaveProperty('title');
      expect(games[0]).toHaveProperty('cover');
      expect(games[0]).toHaveProperty('price');
      expect(games[0]).toHaveProperty('release_date');
    });

    it('should return games ordered by game_id ascending', async () => {
      const tag = await tagService.create({
        tag_name: 'OrderedTag',
      });
      createdTagIds.push(tag.id);

      const game1 = await prismaService.games.create({
        data: {
          title: 'Game A',
          price: 19.99,
          release_date: new Date('2025-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/gamea.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game1.id);

      const game2 = await prismaService.games.create({
        data: {
          title: 'Game B',
          price: 29.99,
          release_date: new Date('2025-02-01'),
          age_rating: 'T',
          cover: 'https://example.com/gameb.jpg',
          system_requirements: {},
        },
      });
      createdGameIds.push(game2.id);

      await prismaService.game_tag_connection.create({
        data: {
          game_id: game2.id,
          tag_id: tag.id,
        },
      });

      await prismaService.game_tag_connection.create({
        data: {
          game_id: game1.id,
          tag_id: tag.id,
        },
      });

      const games = await tagService.getGamesByTag(tag.id);

      expect(games.length).toBe(2);
      expect(games[0].id).toBeLessThanOrEqual(games[1].id);
    });

    it('should return games with pagination', async () => {
      const tag = await tagService.create({
        tag_name: 'PaginationTag',
      });
      createdTagIds.push(tag.id);

      const games = [];
      for (let i = 1; i <= 5; i++) {
        const game = await prismaService.games.create({
          data: {
            title: `Pagination Game ${i}`,
            price: 19.99,
            release_date: new Date('2025-01-01'),
            age_rating: 'E',
            cover: `https://example.com/game${i}.jpg`,
            system_requirements: {},
          },
        });
        createdGameIds.push(game.id);
        games.push(game);

        await prismaService.game_tag_connection.create({
          data: {
            game_id: game.id,
            tag_id: tag.id,
          },
        });
      }

      const result = await tagService.getGamesByTag(tag.id, 0, 3);
      expect(result.length).toBe(3);
    });

    it('should return empty array when tag has no games', async () => {
      const tag = await tagService.create({
        tag_name: 'EmptyTag',
      });
      createdTagIds.push(tag.id);

      const games = await tagService.getGamesByTag(tag.id);

      expect(games).toBeDefined();
      expect(games.length).toBe(0);
    });

    it('should throw NotFoundException when tag does not exist', async () => {
      await expect(tagService.getGamesByTag(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
