import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { GameNewsService } from '../src/modules/game-news/game-news.service';
import { GameNewsModule } from '../src/modules/game-news/game-news.module';
import { NotFoundException } from '@nestjs/common';

jest.setTimeout(30000);

describe('GameNewsService (e2e)', () => {
  let app: INestApplication;
  let gameNewsService: GameNewsService;
  let prismaService: PrismaService;
  let createdGameNewsIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GameNewsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    gameNewsService = moduleFixture.get<GameNewsService>(GameNewsService);
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    if (createdGameNewsIds.length > 0) {
      await prismaService.game_news.deleteMany({
        where: { id: { in: createdGameNewsIds } },
      });
      createdGameNewsIds = [];
    }

    if (createdGameIds.length > 0) {
      await prismaService.game_news.deleteMany({
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
  });

  afterAll(async () => {
    await app.close();
  });

  async function createTestGame(title: string) {
    const uniqueTitle = `gn_${title}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
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
    it('should create a game news article successfully', async () => {
      const game = await createTestGame('Game News Game 1');

      const createGameNewsDto = {
        game_id: game.id,
        title: 'New Update Released',
        content: 'We are excited to announce a major update...',
      };

      const gameNews = await gameNewsService.create(createGameNewsDto);
      createdGameNewsIds.push(gameNews.id);

      expect(gameNews).toBeDefined();
      expect(gameNews.id).toBeDefined();
      expect(gameNews.game_id).toBe(game.id);
      expect(gameNews.title).toBe(createGameNewsDto.title);
      expect(gameNews.content).toBe(createGameNewsDto.content);
      expect(gameNews.published_at).toBeDefined();
      expect(gameNews.games).toBeDefined();
      expect(gameNews.games.id).toBe(game.id);
    });

    it('should create a game news article with custom published_at', async () => {
      const game = await createTestGame('Game News Game 2');
      const customDate = '2025-06-15T10:00:00Z';

      const createGameNewsDto = {
        game_id: game.id,
        title: 'Scheduled News',
        content: 'This news will be published later',
        published_at: customDate,
      };

      const gameNews = await gameNewsService.create(createGameNewsDto);
      createdGameNewsIds.push(gameNews.id);

      expect(gameNews.published_at).toBeDefined();
      const publishedDate = new Date(gameNews.published_at);
      const expectedDate = new Date(customDate);
      expect(publishedDate.getTime()).toBe(expectedDate.getTime());
    });

    it('should create a game news article with maximum length title', async () => {
      const game = await createTestGame('Game News Game 3');
      const maxTitle = 'A'.repeat(200);

      const createGameNewsDto = {
        game_id: game.id,
        title: maxTitle,
        content: 'Content here',
      };

      const gameNews = await gameNewsService.create(createGameNewsDto);
      createdGameNewsIds.push(gameNews.id);

      expect(gameNews.title).toBe(maxTitle);
    });

    it('should create a game news article with long content', async () => {
      const game = await createTestGame('Game News Game 4');
      const longContent = 'A'.repeat(5000);

      const createGameNewsDto = {
        game_id: game.id,
        title: 'Long Content News',
        content: longContent,
      };

      const gameNews = await gameNewsService.create(createGameNewsDto);
      createdGameNewsIds.push(gameNews.id);

      expect(gameNews.content).toBe(longContent);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const createGameNewsDto = {
        game_id: 999999,
        title: 'Test News',
        content: 'Test content',
      };

      await expect(gameNewsService.create(createGameNewsDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle transaction rollback on error', async () => {
      const game = await createTestGame('Game News Game 5');

      const createGameNewsDto = {
        game_id: game.id,
        title: 'Rollback Test',
        content: 'Test content',
      };

      const gameNews = await gameNewsService.create(createGameNewsDto);
      createdGameNewsIds.push(gameNews.id);

      const newsCountBefore = await prismaService.game_news.count({
        where: { game_id: game.id },
      });
      expect(newsCountBefore).toBeGreaterThanOrEqual(1);

      await expect(
        gameNewsService.create({
          ...createGameNewsDto,
          game_id: 999999,
        }),
      ).rejects.toThrow(NotFoundException);

      const newsCountAfter = await prismaService.game_news.count({
        where: { game_id: game.id },
      });
      expect(newsCountAfter).toBe(newsCountBefore);
    });

    it('should fail with invalid foreign key constraint for game', async () => {
      const game = await createTestGame('Game News Game 6');
      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      const createGameNewsDto = {
        game_id: game.id,
        title: 'Invalid FK Test',
        content: 'Test content',
      };

      await expect(gameNewsService.create(createGameNewsDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findAll', () => {
    it('should return all game news articles', async () => {
      const game1 = await createTestGame('FindAll Game 1');
      const game2 = await createTestGame('FindAll Game 2');

      const news1 = await gameNewsService.create({
        game_id: game1.id,
        title: 'News 1',
        content: 'Content 1',
      });
      createdGameNewsIds.push(news1.id);

      const news2 = await gameNewsService.create({
        game_id: game2.id,
        title: 'News 2',
        content: 'Content 2',
      });
      createdGameNewsIds.push(news2.id);

      const result = await gameNewsService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(2);
      expect(result.some((n) => n.id === news1.id)).toBe(true);
      expect(result.some((n) => n.id === news2.id)).toBe(true);
    });

    it('should return game news ordered by published_at desc', async () => {
      const game = await createTestGame('Order Game');

      const news1 = await gameNewsService.create({
        game_id: game.id,
        title: 'Older News',
        content: 'Content 1',
        published_at: '2025-01-01T10:00:00Z',
      });
      createdGameNewsIds.push(news1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const news2 = await gameNewsService.create({
        game_id: game.id,
        title: 'Newer News',
        content: 'Content 2',
        published_at: '2025-01-02T10:00:00Z',
      });
      createdGameNewsIds.push(news2.id);

      const result = await gameNewsService.findAll();
      const news1Index = result.findIndex((n) => n.id === news1.id);
      const news2Index = result.findIndex((n) => n.id === news2.id);
      expect(news2Index).toBeLessThan(news1Index);
    });

    it('should return game news with pagination', async () => {
      const game = await createTestGame('Pagination Game');

      const news1 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 1',
        content: 'Content 1',
      });
      createdGameNewsIds.push(news1.id);

      const news2 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 2',
        content: 'Content 2',
      });
      createdGameNewsIds.push(news2.id);

      const news3 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 3',
        content: 'Content 3',
      });
      createdGameNewsIds.push(news3.id);

      const result = await gameNewsService.findAll(0, 2);
      expect(result.length).toBe(2);
    });

    it('should include game information', async () => {
      const game = await createTestGame('Include Game');

      const gameNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Include Test',
        content: 'Content',
      });
      createdGameNewsIds.push(gameNews.id);

      const result = await gameNewsService.findAll();
      const foundNews = result.find((n) => n.id === gameNews.id);

      expect(foundNews).toBeDefined();
      expect(foundNews?.games).toBeDefined();
      expect(foundNews?.games.id).toBe(game.id);
      expect(foundNews?.games.title).toBe(game.title);
    });
  });

  describe('findOne', () => {
    it('should return a game news article by id', async () => {
      const game = await createTestGame('FindOne Game');

      const createGameNewsDto = {
        game_id: game.id,
        title: 'Find One Test',
        content: 'This is test content',
      };

      const createdNews = await gameNewsService.create(createGameNewsDto);
      createdGameNewsIds.push(createdNews.id);

      const gameNews = await gameNewsService.findOne(createdNews.id);

      expect(gameNews).toBeDefined();
      expect(gameNews.id).toBe(createdNews.id);
      expect(gameNews.game_id).toBe(game.id);
      expect(gameNews.title).toBe(createGameNewsDto.title);
      expect(gameNews.content).toBe(createGameNewsDto.content);
      expect(gameNews.games).toBeDefined();
    });

    it('should throw NotFoundException when game news does not exist', async () => {
      await expect(gameNewsService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByGame', () => {
    it('should return game news articles for a specific game', async () => {
      const game = await createTestGame('FindByGame Game');

      const news1 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 1',
        content: 'Content 1',
      });
      createdGameNewsIds.push(news1.id);

      const news2 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 2',
        content: 'Content 2',
      });
      createdGameNewsIds.push(news2.id);

      const newsArticles = await gameNewsService.findByGame(game.id);

      expect(newsArticles).toBeDefined();
      expect(newsArticles.length).toBe(2);
      expect(newsArticles.some((n) => n.id === news1.id)).toBe(true);
      expect(newsArticles.some((n) => n.id === news2.id)).toBe(true);
    });

    it('should return game news ordered by published_at desc', async () => {
      const game = await createTestGame('OrderByGame Game');

      const news1 = await gameNewsService.create({
        game_id: game.id,
        title: 'Older',
        content: 'Content 1',
        published_at: '2025-01-01T10:00:00Z',
      });
      createdGameNewsIds.push(news1.id);

      const news2 = await gameNewsService.create({
        game_id: game.id,
        title: 'Newer',
        content: 'Content 2',
        published_at: '2025-01-02T10:00:00Z',
      });
      createdGameNewsIds.push(news2.id);

      const result = await gameNewsService.findByGame(game.id);
      expect(result.length).toBe(2);
      expect(result[0].id).toBe(news2.id);
      expect(result[1].id).toBe(news1.id);
    });

    it('should return game news with pagination', async () => {
      const game = await createTestGame('Pagination Game');

      const news1 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 1',
        content: 'Content 1',
      });
      createdGameNewsIds.push(news1.id);

      const news2 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 2',
        content: 'Content 2',
      });
      createdGameNewsIds.push(news2.id);

      const news3 = await gameNewsService.create({
        game_id: game.id,
        title: 'News 3',
        content: 'Content 3',
      });
      createdGameNewsIds.push(news3.id);

      const result = await gameNewsService.findByGame(game.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when game has no news', async () => {
      const game = await createTestGame('NoNews Game');

      const newsArticles = await gameNewsService.findByGame(game.id);

      expect(newsArticles).toBeDefined();
      expect(newsArticles.length).toBe(0);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(gameNewsService.findByGame(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update game news title successfully', async () => {
      const game = await createTestGame('Update Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Original Title',
        content: 'Original content',
      });
      createdGameNewsIds.push(createdNews.id);

      const updateDto = {
        title: 'Updated Title',
      };

      const updatedNews = await gameNewsService.update(
        createdNews.id,
        updateDto,
      );

      expect(updatedNews.title).toBe('Updated Title');
      expect(updatedNews.content).toBe('Original content');
    });

    it('should update game news content successfully', async () => {
      const game = await createTestGame('Update Content Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Test Title',
        content: 'Original content',
      });
      createdGameNewsIds.push(createdNews.id);

      const updateDto = {
        content: 'Updated content with more details',
      };

      const updatedNews = await gameNewsService.update(
        createdNews.id,
        updateDto,
      );

      expect(updatedNews.content).toBe('Updated content with more details');
      expect(updatedNews.title).toBe('Test Title');
    });

    it('should update game_id successfully', async () => {
      const game1 = await createTestGame('Update Game 1');
      const game2 = await createTestGame('Update Game 2');

      const createdNews = await gameNewsService.create({
        game_id: game1.id,
        title: 'Test Title',
        content: 'Test content',
      });
      createdGameNewsIds.push(createdNews.id);

      const updateDto = {
        game_id: game2.id,
      };

      const updatedNews = await gameNewsService.update(
        createdNews.id,
        updateDto,
      );

      expect(updatedNews.game_id).toBe(game2.id);
      expect(updatedNews.games.id).toBe(game2.id);
    });

    it('should update published_at successfully', async () => {
      const game = await createTestGame('Update Date Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Test Title',
        content: 'Test content',
        published_at: '2025-01-01T10:00:00Z',
      });
      createdGameNewsIds.push(createdNews.id);

      const newDate = '2025-06-15T15:30:00Z';
      const updateDto = {
        published_at: newDate,
      };

      const updatedNews = await gameNewsService.update(
        createdNews.id,
        updateDto,
      );

      const updatedDate = new Date(updatedNews.published_at);
      const expectedDate = new Date(newDate);
      expect(updatedDate.getTime()).toBe(expectedDate.getTime());
    });

    it('should update all fields simultaneously', async () => {
      const game1 = await createTestGame('Update All Game 1');
      const game2 = await createTestGame('Update All Game 2');

      const createdNews = await gameNewsService.create({
        game_id: game1.id,
        title: 'Original Title',
        content: 'Original content',
        published_at: '2025-01-01T10:00:00Z',
      });
      createdGameNewsIds.push(createdNews.id);

      const updateDto = {
        game_id: game2.id,
        title: 'New Title',
        content: 'New content',
        published_at: '2025-12-31T23:59:59Z',
      };

      const updatedNews = await gameNewsService.update(
        createdNews.id,
        updateDto,
      );

      expect(updatedNews.game_id).toBe(game2.id);
      expect(updatedNews.title).toBe('New Title');
      expect(updatedNews.content).toBe('New content');
      const updatedDate = new Date(updatedNews.published_at);
      const expectedDate = new Date(updateDto.published_at);
      expect(updatedDate.getTime()).toBe(expectedDate.getTime());
    });

    it('should throw NotFoundException when game news does not exist', async () => {
      const updateDto = {
        title: 'New Title',
      };

      await expect(gameNewsService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when updating to non-existent game', async () => {
      const game = await createTestGame('Update Invalid Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Test Title',
        content: 'Test content',
      });
      createdGameNewsIds.push(createdNews.id);

      const updateDto = {
        game_id: 999999,
      };

      await expect(
        gameNewsService.update(createdNews.id, updateDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should handle empty update', async () => {
      const game = await createTestGame('Empty Update Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Original Title',
        content: 'Original content',
      });
      createdGameNewsIds.push(createdNews.id);

      const originalTitle = createdNews.title;
      const originalContent = createdNews.content;

      const updatedNews = await gameNewsService.update(createdNews.id, {});

      expect(updatedNews.title).toBe(originalTitle);
      expect(updatedNews.content).toBe(originalContent);
    });

    it('should fail when updating non-existent game news', async () => {
      const game = await createTestGame('Fail Update Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Test Title',
        content: 'Test content',
      });
      createdGameNewsIds.push(createdNews.id);

      await prismaService.game_news.delete({ where: { id: createdNews.id } });
      createdGameNewsIds = createdGameNewsIds.filter(
        (id) => id !== createdNews.id,
      );

      await expect(
        gameNewsService.update(createdNews.id, { title: 'New Title' }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should fail when updating game_id to deleted game', async () => {
      const game1 = await createTestGame('Update FK Game 1');
      const game2 = await createTestGame('Update FK Game 2');

      const createdNews = await gameNewsService.create({
        game_id: game1.id,
        title: 'Test Title',
        content: 'Test content',
      });
      createdGameNewsIds.push(createdNews.id);

      await prismaService.games.delete({ where: { id: game2.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game2.id);

      await expect(
        gameNewsService.update(createdNews.id, { game_id: game2.id }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should delete game news successfully', async () => {
      const game = await createTestGame('Delete Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'To Be Deleted',
        content: 'This will be deleted',
      });
      const newsId = createdNews.id;

      const result = await gameNewsService.remove(newsId);
      expect(result.message).toContain(newsId.toString());

      await expect(gameNewsService.findOne(newsId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when game news does not exist', async () => {
      await expect(gameNewsService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle cascade delete when game is deleted', async () => {
      const game = await createTestGame('Cascade Game');

      const createdNews = await gameNewsService.create({
        game_id: game.id,
        title: 'Cascade Test',
        content: 'This will be cascade deleted',
      });
      createdGameNewsIds.push(createdNews.id);

      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      const news = await prismaService.game_news.findUnique({
        where: { id: createdNews.id },
      });
      expect(news).toBeNull();
    });
  });
});
