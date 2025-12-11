import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { ReviewService } from '../../src/modules/review/review.service';
import { ReviewModule } from '../../src/modules/review/review.module';
import { ConflictException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.setTimeout(30000);

describe('ReviewService (e2e)', () => {
  let app: INestApplication;
  let reviewService: ReviewService;
  let prismaService: PrismaService;
  let createdReviewIds: number[] = [];
  let createdUserIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ReviewModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    reviewService = moduleFixture.get<ReviewService>(ReviewService);
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
    if (createdReviewIds.length > 0) {
      await prismaService.reviews.deleteMany({
        where: { id: { in: createdReviewIds } },
      });
      createdReviewIds = [];
    }

    if (createdUserIds.length > 0) {
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
      await prismaService.reviews.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
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
    const uniqueUsername = `r${uniqueId}${username.substring(
      0,
      Math.max(0, 20 - uniqueId.length - 1),
    )}`.substring(0, 20);
    const uniqueEmail = `rev_${username}_${Date.now()}_${Math.random().toString(36).substring(7)}@example.com`;
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
    const uniqueTitle = `rev_${title}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
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
    it('should create a review successfully', async () => {
      const user = await createTestUser('review_user1');
      const game = await createTestGame('Review Game 1');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 5,
        content: 'Excellent game!',
      };

      const review = await reviewService.create(createReviewDto);
      createdReviewIds.push(review.id);

      expect(review).toBeDefined();
      expect(review.id).toBeDefined();
      expect(review.user_id).toBe(user.id);
      expect(review.game_id).toBe(game.id);
      expect(review.rating).toBe(5);
      expect(review.content).toBe('Excellent game!');
      expect(review.users).toBeDefined();
      expect(review.users.id).toBe(user.id);
      expect(review.games).toBeDefined();
      expect(review.games.id).toBe(game.id);
    });

    it('should create a review without content', async () => {
      const user = await createTestUser('review_user2');
      const game = await createTestGame('Review Game 2');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 4,
      };

      const review = await reviewService.create(createReviewDto);
      createdReviewIds.push(review.id);

      expect(review.rating).toBe(4);
      expect(review.content).toBeNull();
    });

    it('should create a review with minimum rating', async () => {
      const user = await createTestUser('review_user3');
      const game = await createTestGame('Review Game 3');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 1,
        content: 'Not good',
      };

      const review = await reviewService.create(createReviewDto);
      createdReviewIds.push(review.id);

      expect(review.rating).toBe(1);
    });

    it('should create a review with maximum rating', async () => {
      const user = await createTestUser('review_user4');
      const game = await createTestGame('Review Game 4');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 5,
        content: 'Perfect!',
      };

      const review = await reviewService.create(createReviewDto);
      createdReviewIds.push(review.id);

      expect(review.rating).toBe(5);
    });

    it('should throw ConflictException when review already exists', async () => {
      const user = await createTestUser('review_user5');
      const game = await createTestGame('Review Game 5');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 3,
        content: 'First review',
      };

      const review = await reviewService.create(createReviewDto);
      createdReviewIds.push(review.id);

      await expect(reviewService.create(createReviewDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw NotFoundException when user does not exist', async () => {
      const game = await createTestGame('Review Game 6');

      const createReviewDto = {
        user_id: 999999,
        game_id: game.id,
        rating: 5,
        content: 'Test review',
      };

      await expect(reviewService.create(createReviewDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const user = await createTestUser('review_user7');

      const createReviewDto = {
        user_id: user.id,
        game_id: 999999,
        rating: 5,
        content: 'Test review',
      };

      await expect(reviewService.create(createReviewDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle transaction rollback on error', async () => {
      const user = await createTestUser('review_user8');
      const game = await createTestGame('Review Game 8');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 4,
        content: 'Test review',
      };

      const review = await reviewService.create(createReviewDto);
      createdReviewIds.push(review.id);

      const reviewCountBefore = await prismaService.reviews.count({
        where: {
          user_id: user.id,
          game_id: game.id,
        },
      });
      expect(reviewCountBefore).toBe(1);

      await expect(reviewService.create(createReviewDto)).rejects.toThrow(
        ConflictException,
      );

      const reviewCountAfter = await prismaService.reviews.count({
        where: {
          user_id: user.id,
          game_id: game.id,
        },
      });
      expect(reviewCountAfter).toBe(1);
    });

    it('should fail with invalid foreign key constraint', async () => {
      const user = await createTestUser('review_user9');
      await prismaService.users.delete({ where: { id: user.id } });
      createdUserIds = createdUserIds.filter((id) => id !== user.id);

      const game = await createTestGame('Review Game 9');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 5,
        content: 'Test',
      };

      await expect(reviewService.create(createReviewDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should fail when trying to create review with deleted game', async () => {
      const user = await createTestUser('review_user10');
      const game = await createTestGame('Review Game 10');
      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 5,
        content: 'Test',
      };

      await expect(reviewService.create(createReviewDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findAll', () => {
    it('should return all reviews', async () => {
      const user1 = await createTestUser('findall_user1');
      const user2 = await createTestUser('findall_user2');
      const game = await createTestGame('FindAll Game');

      const review1 = await reviewService.create({
        user_id: user1.id,
        game_id: game.id,
        rating: 5,
        content: 'Review 1',
      });
      createdReviewIds.push(review1.id);

      const review2 = await reviewService.create({
        user_id: user2.id,
        game_id: game.id,
        rating: 4,
        content: 'Review 2',
      });
      createdReviewIds.push(review2.id);

      const result = await reviewService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(2);
      expect(result.some((r) => r.id === review1.id)).toBe(true);
      expect(result.some((r) => r.id === review2.id)).toBe(true);
    });

    it('should return reviews ordered by id desc', async () => {
      const user1 = await createTestUser('order_user1');
      const user2 = await createTestUser('order_user2');
      const game = await createTestGame('Order Game');

      const review1 = await reviewService.create({
        user_id: user1.id,
        game_id: game.id,
        rating: 5,
      });
      createdReviewIds.push(review1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const review2 = await reviewService.create({
        user_id: user2.id,
        game_id: game.id,
        rating: 4,
      });
      createdReviewIds.push(review2.id);

      const result = await reviewService.findAll();
      const review1Index = result.findIndex((r) => r.id === review1.id);
      const review2Index = result.findIndex((r) => r.id === review2.id);
      expect(review2Index).toBeLessThan(review1Index);
    });

    it('should return reviews with pagination', async () => {
      const user1 = await createTestUser('pagination_user1');
      const user2 = await createTestUser('pagination_user2');
      const user3 = await createTestUser('pagination_user3');
      const game = await createTestGame('Pagination Game');

      const review1 = await reviewService.create({
        user_id: user1.id,
        game_id: game.id,
        rating: 5,
      });
      createdReviewIds.push(review1.id);

      const review2 = await reviewService.create({
        user_id: user2.id,
        game_id: game.id,
        rating: 4,
      });
      createdReviewIds.push(review2.id);

      const review3 = await reviewService.create({
        user_id: user3.id,
        game_id: game.id,
        rating: 3,
      });
      createdReviewIds.push(review3.id);

      const result = await reviewService.findAll(0, 2);
      expect(result.length).toBe(2);
    });

    it('should include user and game information', async () => {
      const user = await createTestUser('include_user');
      const game = await createTestGame('Include Game');

      const review = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 5,
        content: 'Great!',
      });
      createdReviewIds.push(review.id);

      const result = await reviewService.findAll();
      const foundReview = result.find((r) => r.id === review.id);

      expect(foundReview).toBeDefined();
      expect(foundReview!.users).toBeDefined();
      expect(foundReview!.users.id).toBe(user.id);
      expect(foundReview!.users.username).toBe(user.username);
      expect(foundReview!.games).toBeDefined();
      expect(foundReview!.games.id).toBe(game.id);
      expect(foundReview!.games.title).toBe(game.title);
    });
  });

  describe('findOne', () => {
    it('should return a review by id', async () => {
      const user = await createTestUser('findone_user');
      const game = await createTestGame('FindOne Game');

      const createReviewDto = {
        user_id: user.id,
        game_id: game.id,
        rating: 5,
        content: 'Excellent!',
      };

      const createdReview = await reviewService.create(createReviewDto);
      createdReviewIds.push(createdReview.id);

      const review = await reviewService.findOne(createdReview.id);

      expect(review).toBeDefined();
      expect(review.id).toBe(createdReview.id);
      expect(review.user_id).toBe(user.id);
      expect(review.game_id).toBe(game.id);
      expect(review.rating).toBe(5);
      expect(review.content).toBe('Excellent!');
      expect(review.users).toBeDefined();
      expect(review.games).toBeDefined();
    });

    it('should throw NotFoundException when review does not exist', async () => {
      await expect(reviewService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByUser', () => {
    it('should return reviews for a specific user', async () => {
      const user = await createTestUser('findbyuser_user');
      const game1 = await createTestGame('FindByUser Game 1');
      const game2 = await createTestGame('FindByUser Game 2');

      const review1 = await reviewService.create({
        user_id: user.id,
        game_id: game1.id,
        rating: 5,
        content: 'Review 1',
      });
      createdReviewIds.push(review1.id);

      const review2 = await reviewService.create({
        user_id: user.id,
        game_id: game2.id,
        rating: 4,
        content: 'Review 2',
      });
      createdReviewIds.push(review2.id);

      const reviews = await reviewService.findByUser(user.id);

      expect(reviews).toBeDefined();
      expect(reviews.length).toBe(2);
      expect(reviews.some((r) => r.id === review1.id)).toBe(true);
      expect(reviews.some((r) => r.id === review2.id)).toBe(true);
      expect(reviews[0].games).toBeDefined();
    });

    it('should return reviews with pagination', async () => {
      const user = await createTestUser('pagination_user');
      const game1 = await createTestGame('Pagination Game 1');
      const game2 = await createTestGame('Pagination Game 2');
      const game3 = await createTestGame('Pagination Game 3');

      const review1 = await reviewService.create({
        user_id: user.id,
        game_id: game1.id,
        rating: 5,
      });
      createdReviewIds.push(review1.id);

      const review2 = await reviewService.create({
        user_id: user.id,
        game_id: game2.id,
        rating: 4,
      });
      createdReviewIds.push(review2.id);

      const review3 = await reviewService.create({
        user_id: user.id,
        game_id: game3.id,
        rating: 3,
      });
      createdReviewIds.push(review3.id);

      const result = await reviewService.findByUser(user.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when user has no reviews', async () => {
      const user = await createTestUser('noreviews_user');

      const reviews = await reviewService.findByUser(user.id);

      expect(reviews).toBeDefined();
      expect(reviews.length).toBe(0);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(reviewService.findByUser(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByGame', () => {
    it('should return reviews for a specific game', async () => {
      const user1 = await createTestUser('findbygame_user1');
      const user2 = await createTestUser('findbygame_user2');
      const game = await createTestGame('FindByGame Game');

      const review1 = await reviewService.create({
        user_id: user1.id,
        game_id: game.id,
        rating: 5,
        content: 'Review 1',
      });
      createdReviewIds.push(review1.id);

      const review2 = await reviewService.create({
        user_id: user2.id,
        game_id: game.id,
        rating: 4,
        content: 'Review 2',
      });
      createdReviewIds.push(review2.id);

      const reviews = await reviewService.findByGame(game.id);

      expect(reviews).toBeDefined();
      expect(reviews.length).toBe(2);
      expect(reviews.some((r) => r.id === review1.id)).toBe(true);
      expect(reviews.some((r) => r.id === review2.id)).toBe(true);
      expect(reviews[0].users).toBeDefined();
    });

    it('should return reviews with pagination', async () => {
      const user1 = await createTestUser('pag_game_user1');
      const user2 = await createTestUser('pag_game_user2');
      const user3 = await createTestUser('pag_game_user3');
      const game = await createTestGame('Pagination Game');

      const review1 = await reviewService.create({
        user_id: user1.id,
        game_id: game.id,
        rating: 5,
      });
      createdReviewIds.push(review1.id);

      const review2 = await reviewService.create({
        user_id: user2.id,
        game_id: game.id,
        rating: 4,
      });
      createdReviewIds.push(review2.id);

      const review3 = await reviewService.create({
        user_id: user3.id,
        game_id: game.id,
        rating: 3,
      });
      createdReviewIds.push(review3.id);

      const result = await reviewService.findByGame(game.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when game has no reviews', async () => {
      const game = await createTestGame('NoReviews Game');

      const reviews = await reviewService.findByGame(game.id);

      expect(reviews).toBeDefined();
      expect(reviews.length).toBe(0);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(reviewService.findByGame(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update review rating successfully', async () => {
      const user = await createTestUser('update_user');
      const game = await createTestGame('Update Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 3,
        content: 'Original review',
      });
      createdReviewIds.push(createdReview.id);

      const updateDto = {
        rating: 5,
      };

      const updatedReview = await reviewService.update(
        createdReview.id,
        updateDto,
      );

      expect(updatedReview.rating).toBe(5);
      expect(updatedReview.content).toBe('Original review');
    });

    it('should update review content successfully', async () => {
      const user = await createTestUser('update_content_user');
      const game = await createTestGame('Update Content Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 4,
        content: 'Original content',
      });
      createdReviewIds.push(createdReview.id);

      const updateDto = {
        content: 'Updated content with more details',
      };

      const updatedReview = await reviewService.update(
        createdReview.id,
        updateDto,
      );

      expect(updatedReview.content).toBe('Updated content with more details');
      expect(updatedReview.rating).toBe(4);
    });

    it('should update both rating and content', async () => {
      const user = await createTestUser('update_both_user');
      const game = await createTestGame('Update Both Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 3,
        content: 'Original',
      });
      createdReviewIds.push(createdReview.id);

      const updateDto = {
        rating: 5,
        content: 'Much better now!',
      };

      const updatedReview = await reviewService.update(
        createdReview.id,
        updateDto,
      );

      expect(updatedReview.rating).toBe(5);
      expect(updatedReview.content).toBe('Much better now!');
    });

    it('should throw NotFoundException when review does not exist', async () => {
      const updateDto = {
        rating: 5,
      };

      await expect(reviewService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle empty update', async () => {
      const user = await createTestUser('empty_update_user');
      const game = await createTestGame('Empty Update Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 4,
        content: 'Original',
      });
      createdReviewIds.push(createdReview.id);

      const originalRating = createdReview.rating;
      const originalContent = createdReview.content;

      const updatedReview = await reviewService.update(createdReview.id, {});

      expect(updatedReview.rating).toBe(originalRating);
      expect(updatedReview.content).toBe(originalContent);
    });

    it('should fail when updating non-existent review', async () => {
      const user = await createTestUser('fail_update_user');
      const game = await createTestGame('Fail Update Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 4,
      });
      createdReviewIds.push(createdReview.id);

      await prismaService.reviews.delete({ where: { id: createdReview.id } });
      createdReviewIds = createdReviewIds.filter(
        (id) => id !== createdReview.id,
      );

      await expect(
        reviewService.update(createdReview.id, { rating: 5 }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should delete review successfully', async () => {
      const user = await createTestUser('delete_user');
      const game = await createTestGame('Delete Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 4,
        content: 'To be deleted',
      });
      const reviewId = createdReview.id;

      const result = await reviewService.remove(reviewId);
      expect(result.message).toContain(reviewId.toString());

      await expect(reviewService.findOne(reviewId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when review does not exist', async () => {
      await expect(reviewService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle foreign key constraints on delete', async () => {
      const user = await createTestUser('fk_delete_user');
      const game = await createTestGame('FK Delete Game');

      const createdReview = await reviewService.create({
        user_id: user.id,
        game_id: game.id,
        rating: 4,
      });
      createdReviewIds.push(createdReview.id);

      await reviewService.remove(createdReview.id);
      createdReviewIds = createdReviewIds.filter(
        (id) => id !== createdReview.id,
      );

      const review = await prismaService.reviews.findUnique({
        where: { id: createdReview.id },
      });
      expect(review).toBeNull();
    });
  });
});
