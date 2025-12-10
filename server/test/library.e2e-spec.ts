import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import {
  OwnType,
  DownloadType,
} from '../src/modules/library/dto/create-library.dto';
import { LibraryService } from '../src/modules/library/library.service';
import { LibraryModule } from '../src/modules/library/library.module';
import { ConflictException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.setTimeout(30000);

describe('LibraryService (e2e)', () => {
  let app: INestApplication;
  let libraryService: LibraryService;
  let prismaService: PrismaService;
  let createdLibraryIds: number[] = [];
  let createdUserIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LibraryModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    libraryService = moduleFixture.get<LibraryService>(LibraryService);
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    if (createdLibraryIds.length > 0) {
      await prismaService.libraries.deleteMany({
        where: { id: { in: createdLibraryIds } },
      });
      createdLibraryIds = [];
    }

    if (createdUserIds.length > 0) {
      await prismaService.libraries.deleteMany({
        where: { user_id: { in: createdUserIds } },
      });
      await prismaService.saves.deleteMany({
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
      await prismaService.libraries.deleteMany({
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
      await prismaService.reviews.deleteMany({
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
    const uniqueUsername = `l${uniqueId}${username.substring(
      0,
      Math.max(0, 20 - uniqueId.length - 1),
    )}`.substring(0, 20);
    const uniqueEmail = `lib_${username}_${Date.now()}_${Math.random().toString(36).substring(7)}@example.com`;
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
    const uniqueTitle = `lib_${title}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
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
    it('should create a library entry successfully', async () => {
      const user = await createTestUser('library_user1');
      const game = await createTestGame('Library Game 1');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        hours_played: 10,
        ownership: OwnType.purchased,
        download_status: DownloadType.installed,
      };

      const library = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(library.id);

      expect(library).toBeDefined();
      expect(library.id).toBeDefined();
      expect(library.user_id).toBe(user.id);
      expect(library.game_id).toBe(game.id);
      expect(library.hours_played).toBe(10);
      expect(library.ownership).toBe(OwnType.purchased);
      expect(library.download_status).toBe(DownloadType.installed);
      expect(library.users).toBeDefined();
      expect(library.users.id).toBe(user.id);
      expect(library.games).toBeDefined();
      expect(library.games.id).toBe(game.id);
    });

    it('should create a library entry with default hours_played', async () => {
      const user = await createTestUser('library_user2');
      const game = await createTestGame('Library Game 2');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.wishlist,
      };

      const library = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(library.id);

      expect(library.hours_played).toBe(0);
      expect(library.ownership).toBe(OwnType.wishlist);
    });

    it('should create a library entry with rented ownership', async () => {
      const user = await createTestUser('library_user3');
      const game = await createTestGame('Library Game 3');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.rented,
        download_status: DownloadType.not_installed,
      };

      const library = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(library.id);

      expect(library.ownership).toBe(OwnType.rented);
      expect(library.download_status).toBe(DownloadType.not_installed);
    });

    it('should create a library entry without download_status', async () => {
      const user = await createTestUser('library_user4');
      const game = await createTestGame('Library Game 4');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      };

      const library = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(library.id);

      expect(library.download_status).toBeNull();
    });

    it('should throw ConflictException when library entry already exists', async () => {
      const user = await createTestUser('library_user5');
      const game = await createTestGame('Library Game 5');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      };

      const library = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(library.id);

      await expect(libraryService.create(createLibraryDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw NotFoundException when user does not exist', async () => {
      const game = await createTestGame('Library Game 6');

      const createLibraryDto = {
        user_id: 999999,
        game_id: game.id,
        ownership: OwnType.purchased,
      };

      await expect(libraryService.create(createLibraryDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const user = await createTestUser('library_user7');

      const createLibraryDto = {
        user_id: user.id,
        game_id: 999999,
        ownership: OwnType.purchased,
      };

      await expect(libraryService.create(createLibraryDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle transaction rollback on error', async () => {
      const user = await createTestUser('library_user8');
      const game = await createTestGame('Library Game 8');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      };

      const library = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(library.id);

      const libraryCountBefore = await prismaService.libraries.count({
        where: {
          user_id: user.id,
          game_id: game.id,
        },
      });
      expect(libraryCountBefore).toBe(1);

      await expect(libraryService.create(createLibraryDto)).rejects.toThrow(
        ConflictException,
      );

      const libraryCountAfter = await prismaService.libraries.count({
        where: {
          user_id: user.id,
          game_id: game.id,
        },
      });
      expect(libraryCountAfter).toBe(1);
    });

    it('should fail with invalid foreign key constraint for user', async () => {
      const user = await createTestUser('library_user9');
      await prismaService.users.delete({ where: { id: user.id } });
      createdUserIds = createdUserIds.filter((id) => id !== user.id);

      const game = await createTestGame('Library Game 9');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      };

      await expect(libraryService.create(createLibraryDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should fail with invalid foreign key constraint for game', async () => {
      const user = await createTestUser('library_user10');
      const game = await createTestGame('Library Game 10');
      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      };

      await expect(libraryService.create(createLibraryDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findAll', () => {
    it('should return all library entries', async () => {
      const user1 = await createTestUser('findall_user1');
      const user2 = await createTestUser('findall_user2');
      const game = await createTestGame('FindAll Game');

      const library1 = await libraryService.create({
        user_id: user1.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      const library2 = await libraryService.create({
        user_id: user2.id,
        game_id: game.id,
        ownership: OwnType.wishlist,
      });
      createdLibraryIds.push(library2.id);

      const result = await libraryService.findAll();
      expect(result.length).toBeGreaterThanOrEqual(2);
      expect(result.some((l) => l.id === library1.id)).toBe(true);
      expect(result.some((l) => l.id === library2.id)).toBe(true);
    });

    it('should return library entries ordered by id desc', async () => {
      const user1 = await createTestUser('order_user1');
      const user2 = await createTestUser('order_user2');
      const game = await createTestGame('Order Game');

      const library1 = await libraryService.create({
        user_id: user1.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const library2 = await libraryService.create({
        user_id: user2.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library2.id);

      const result = await libraryService.findAll();
      const library1Index = result.findIndex((l) => l.id === library1.id);
      const library2Index = result.findIndex((l) => l.id === library2.id);
      expect(library2Index).toBeLessThan(library1Index);
    });

    it('should return library entries with pagination', async () => {
      const user1 = await createTestUser('pagination_user1');
      const user2 = await createTestUser('pagination_user2');
      const user3 = await createTestUser('pagination_user3');
      const game = await createTestGame('Pagination Game');

      const library1 = await libraryService.create({
        user_id: user1.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      const library2 = await libraryService.create({
        user_id: user2.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library2.id);

      const library3 = await libraryService.create({
        user_id: user3.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library3.id);

      const result = await libraryService.findAll(0, 2);
      expect(result.length).toBe(2);
    });

    it('should include user and game information', async () => {
      const user = await createTestUser('include_user');
      const game = await createTestGame('Include Game');

      const library = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library.id);

      const result = await libraryService.findAll();
      const foundLibrary = result.find((l) => l.id === library.id);

      expect(foundLibrary).toBeDefined();
      expect(foundLibrary?.users).toBeDefined();
      expect(foundLibrary?.users.id).toBe(user.id);
      expect(foundLibrary?.users.username).toBe(user.username);
      expect(foundLibrary?.games).toBeDefined();
      expect(foundLibrary?.games.id).toBe(game.id);
      expect(foundLibrary?.games.title).toBe(game.title);
    });
  });

  describe('findOne', () => {
    it('should return a library entry by id', async () => {
      const user = await createTestUser('findone_user');
      const game = await createTestGame('FindOne Game');

      const createLibraryDto = {
        user_id: user.id,
        game_id: game.id,
        hours_played: 50,
        ownership: OwnType.purchased,
        download_status: DownloadType.installed,
      };

      const createdLibrary = await libraryService.create(createLibraryDto);
      createdLibraryIds.push(createdLibrary.id);

      const library = await libraryService.findOne(createdLibrary.id);

      expect(library).toBeDefined();
      expect(library.id).toBe(createdLibrary.id);
      expect(library.user_id).toBe(user.id);
      expect(library.game_id).toBe(game.id);
      expect(library.hours_played).toBe(50);
      expect(library.ownership).toBe(OwnType.purchased);
      expect(library.download_status).toBe(DownloadType.installed);
      expect(library.users).toBeDefined();
      expect(library.games).toBeDefined();
    });

    it('should throw NotFoundException when library entry does not exist', async () => {
      await expect(libraryService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByUser', () => {
    it('should return library entries for a specific user', async () => {
      const user = await createTestUser('findbyuser_user');
      const game1 = await createTestGame('FindByUser Game 1');
      const game2 = await createTestGame('FindByUser Game 2');

      const library1 = await libraryService.create({
        user_id: user.id,
        game_id: game1.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      const library2 = await libraryService.create({
        user_id: user.id,
        game_id: game2.id,
        ownership: OwnType.wishlist,
      });
      createdLibraryIds.push(library2.id);

      const libraries = await libraryService.findByUser(user.id);

      expect(libraries).toBeDefined();
      expect(libraries.length).toBe(2);
      expect(libraries.some((l) => l.id === library1.id)).toBe(true);
      expect(libraries.some((l) => l.id === library2.id)).toBe(true);
      expect(libraries[0].games).toBeDefined();
    });

    it('should return library entries with pagination', async () => {
      const user = await createTestUser('pagination_user');
      const game1 = await createTestGame('Pagination Game 1');
      const game2 = await createTestGame('Pagination Game 2');
      const game3 = await createTestGame('Pagination Game 3');

      const library1 = await libraryService.create({
        user_id: user.id,
        game_id: game1.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      const library2 = await libraryService.create({
        user_id: user.id,
        game_id: game2.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library2.id);

      const library3 = await libraryService.create({
        user_id: user.id,
        game_id: game3.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library3.id);

      const result = await libraryService.findByUser(user.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when user has no library entries', async () => {
      const user = await createTestUser('nolibrary_user');

      const libraries = await libraryService.findByUser(user.id);

      expect(libraries).toBeDefined();
      expect(libraries.length).toBe(0);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      await expect(libraryService.findByUser(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByGame', () => {
    it('should return library entries for a specific game', async () => {
      const user1 = await createTestUser('findbygame_user1');
      const user2 = await createTestUser('findbygame_user2');
      const game = await createTestGame('FindByGame Game');

      const library1 = await libraryService.create({
        user_id: user1.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      const library2 = await libraryService.create({
        user_id: user2.id,
        game_id: game.id,
        ownership: OwnType.wishlist,
      });
      createdLibraryIds.push(library2.id);

      const libraries = await libraryService.findByGame(game.id);

      expect(libraries).toBeDefined();
      expect(libraries.length).toBe(2);
      expect(libraries.some((l) => l.id === library1.id)).toBe(true);
      expect(libraries.some((l) => l.id === library2.id)).toBe(true);
      expect(libraries[0].users).toBeDefined();
    });

    it('should return library entries with pagination', async () => {
      const user1 = await createTestUser('pag_game_user1');
      const user2 = await createTestUser('pag_game_user2');
      const user3 = await createTestUser('pag_game_user3');
      const game = await createTestGame('Pagination Game');

      const library1 = await libraryService.create({
        user_id: user1.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library1.id);

      const library2 = await libraryService.create({
        user_id: user2.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library2.id);

      const library3 = await libraryService.create({
        user_id: user3.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(library3.id);

      const result = await libraryService.findByGame(game.id, 0, 2);
      expect(result.length).toBe(2);
    });

    it('should return empty array when game has no library entries', async () => {
      const game = await createTestGame('NoLibrary Game');

      const libraries = await libraryService.findByGame(game.id);

      expect(libraries).toBeDefined();
      expect(libraries.length).toBe(0);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(libraryService.findByGame(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update hours_played successfully', async () => {
      const user = await createTestUser('update_user');
      const game = await createTestGame('Update Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        hours_played: 10,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(createdLibrary.id);

      const updateDto = {
        hours_played: 50,
      };

      const updatedLibrary = await libraryService.update(
        createdLibrary.id,
        updateDto,
      );

      expect(updatedLibrary.hours_played).toBe(50);
      expect(updatedLibrary.ownership).toBe(OwnType.purchased);
    });

    it('should update ownership successfully', async () => {
      const user = await createTestUser('update_ownership_user');
      const game = await createTestGame('Update Ownership Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.wishlist,
      });
      createdLibraryIds.push(createdLibrary.id);

      const updateDto = {
        ownership: OwnType.purchased,
      };

      const updatedLibrary = await libraryService.update(
        createdLibrary.id,
        updateDto,
      );

      expect(updatedLibrary.ownership).toBe(OwnType.purchased);
    });

    it('should update download_status successfully', async () => {
      const user = await createTestUser('update_download_user');
      const game = await createTestGame('Update Download Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
        download_status: DownloadType.not_installed,
      });
      createdLibraryIds.push(createdLibrary.id);

      const updateDto = {
        download_status: DownloadType.installed,
      };

      const updatedLibrary = await libraryService.update(
        createdLibrary.id,
        updateDto,
      );

      expect(updatedLibrary.download_status).toBe(DownloadType.installed);
    });

    it('should update all fields simultaneously', async () => {
      const user = await createTestUser('update_all_user');
      const game = await createTestGame('Update All Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        hours_played: 5,
        ownership: OwnType.wishlist,
        download_status: DownloadType.not_installed,
      });
      createdLibraryIds.push(createdLibrary.id);

      const updateDto = {
        hours_played: 100,
        ownership: OwnType.purchased,
        download_status: DownloadType.installed,
      };

      const updatedLibrary = await libraryService.update(
        createdLibrary.id,
        updateDto,
      );

      expect(updatedLibrary.hours_played).toBe(100);
      expect(updatedLibrary.ownership).toBe(OwnType.purchased);
      expect(updatedLibrary.download_status).toBe(DownloadType.installed);
    });

    it('should throw NotFoundException when library entry does not exist', async () => {
      const updateDto = {
        hours_played: 50,
      };

      await expect(libraryService.update(999999, updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle empty update', async () => {
      const user = await createTestUser('empty_update_user');
      const game = await createTestGame('Empty Update Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        hours_played: 20,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(createdLibrary.id);

      const originalHours = createdLibrary.hours_played;
      const originalOwnership = createdLibrary.ownership;

      const updatedLibrary = await libraryService.update(createdLibrary.id, {});

      expect(updatedLibrary.hours_played).toBe(originalHours);
      expect(updatedLibrary.ownership).toBe(originalOwnership);
    });

    it('should fail when updating non-existent library entry', async () => {
      const user = await createTestUser('fail_update_user');
      const game = await createTestGame('Fail Update Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(createdLibrary.id);

      await prismaService.libraries.delete({
        where: { id: createdLibrary.id },
      });
      createdLibraryIds = createdLibraryIds.filter(
        (id) => id !== createdLibrary.id,
      );

      await expect(
        libraryService.update(createdLibrary.id, { hours_played: 50 }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should delete library entry successfully', async () => {
      const user = await createTestUser('delete_user');
      const game = await createTestGame('Delete Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      const libraryId = createdLibrary.id;

      const result = await libraryService.remove(libraryId);
      expect(result.message).toContain(libraryId.toString());

      await expect(libraryService.findOne(libraryId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when library entry does not exist', async () => {
      await expect(libraryService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle cascade delete when user is deleted', async () => {
      const user = await createTestUser('cascade_user');
      const game = await createTestGame('Cascade Game');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(createdLibrary.id);

      await prismaService.users.delete({ where: { id: user.id } });
      createdUserIds = createdUserIds.filter((id) => id !== user.id);

      const library = await prismaService.libraries.findUnique({
        where: { id: createdLibrary.id },
      });
      expect(library).toBeNull();
    });

    it('should handle cascade delete when game is deleted', async () => {
      const user = await createTestUser('cascade_game_user');
      const game = await createTestGame('Cascade Game 2');

      const createdLibrary = await libraryService.create({
        user_id: user.id,
        game_id: game.id,
        ownership: OwnType.purchased,
      });
      createdLibraryIds.push(createdLibrary.id);

      await prismaService.games.delete({ where: { id: game.id } });
      createdGameIds = createdGameIds.filter((id) => id !== game.id);

      const library = await prismaService.libraries.findUnique({
        where: { id: createdLibrary.id },
      });
      expect(library).toBeNull();
    });
  });
});
