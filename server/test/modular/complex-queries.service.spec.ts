import { Test, TestingModule } from '@nestjs/testing';
import { ComplexQueriesService } from '../../src/modules/complex-queries/complex-queries.service';
import { PrismaService } from '../../src/prisma/prisma.service';
import {
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateCompleteGameDto } from '../../src/modules/complex-queries/dto/create-complete-game.dto';
import {
  CompleteGamePurchaseDto,
  OwnershipType,
} from '../../src/modules/complex-queries/dto/complete-game-purchase.dto';
import { CreateUserWithInitialSetupDto } from '../../src/modules/complex-queries/dto/create-user-with-initial-setup.dto';
import * as bcrypt from 'bcrypt';

describe('ComplexQueriesService', () => {
  let service: ComplexQueriesService;

  const mockPrismaService = {
    executeTransaction: jest.fn(),
    games: {
      findUnique: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
    },
    tags: {
      findMany: jest.fn(),
    },
    devs: {
      findMany: jest.fn(),
    },
    achievements: {
      create: jest.fn(),
      findFirst: jest.fn(),
      findMany: jest.fn(),
    },
    game_tag_connection: {
      create: jest.fn(),
    },
    game_dev_connection: {
      create: jest.fn(),
    },
    game_news: {
      create: jest.fn(),
    },
    users: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
    },
    libraries: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    friends: {
      create: jest.fn(),
    },
    saves: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    user_achieve_connection: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    reviews: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComplexQueriesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ComplexQueriesService>(ComplexQueriesService);

    jest.clearAllMocks();
  });

  describe('createCompleteGame', () => {
    const createCompleteGameDto: CreateCompleteGameDto = {
      game: {
        title: 'Test Game',
        price: 29.99,
        release_date: '2025-01-01',
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: true,
      },
      tagIds: [1, 2],
      devIds: [1],
      achievements: [
        {
          title: 'First Achievement',
          icon: 'https://example.com/icon1.png',
        },
        {
          title: 'Second Achievement',
          icon: 'https://example.com/icon2.png',
        },
      ],
      initialNews: {
        title: 'Game Launch',
        content: 'The game has been launched!',
      },
    };

    it('should create a complete game with all related data', async () => {
      const mockGame = {
        id: 1,
        title: 'Test Game',
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: true,
      };

      const mockTags = [
        { id: 1, tag_name: 'action' },
        { id: 2, tag_name: 'adventure' },
      ];

      const mockDevs = [{ id: 1, dev_name: 'Test Dev', dev_type: 'developer' }];

      const mockResult = {
        ...mockGame,
        achievements: [
          {
            id: 1,
            title: 'First Achievement',
            icon: 'https://example.com/icon1.png',
          },
          {
            id: 2,
            title: 'Second Achievement',
            icon: 'https://example.com/icon2.png',
          },
        ],
        game_tag_connection: [
          { tags: { id: 1, tag_name: 'action' } },
          { tags: { id: 2, tag_name: 'adventure' } },
        ],
        game_dev_connection: [{ devs: mockDevs[0] }],
        game_news: [
          {
            id: 1,
            title: 'Game Launch',
            content: 'The game has been launched!',
          },
        ],
      };

      const mockTx = {
        games: {
          findUnique: jest.fn((args: any) => {
            if (args.where.title) {
              return Promise.resolve(null);
            }
            if (args.where.id) {
              return Promise.resolve(mockResult);
            }
            return Promise.resolve(null);
          }),
          create: jest.fn().mockResolvedValue(mockGame),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue(mockTags),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue(mockDevs),
        },
        achievements: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
        game_tag_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_dev_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_news: {
          create: jest.fn().mockResolvedValue({
            id: 1,
            title: 'Game Launch',
            content: 'The game has been launched!',
          }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.createCompleteGame(createCompleteGameDto);

      expect(mockPrismaService.executeTransaction).toHaveBeenCalled();
      expect(mockTx.games.findUnique).toHaveBeenCalledWith({
        where: { title: 'Test Game' },
      });
      expect(mockTx.games.create).toHaveBeenCalledWith({
        data: {
          title: 'Test Game',
          price: 29.99,
          release_date: new Date('2025-01-01'),
          age_rating: 'E',
          cover: 'https://example.com/cover.jpg',
          description: 'A test game',
          system_requirements: { minRAM: '8GB' },
          base_game_id: undefined,
          is_multiplayer: true,
        },
      });
      expect(mockTx.tags.findMany).toHaveBeenCalledWith({
        where: { id: { in: [1, 2] } },
      });
      expect(mockTx.devs.findMany).toHaveBeenCalledWith({
        where: { id: { in: [1] } },
      });
      expect(mockTx.achievements.create).toHaveBeenCalledTimes(2);
      expect(mockTx.game_tag_connection.create).toHaveBeenCalledTimes(2);
      expect(mockTx.game_dev_connection.create).toHaveBeenCalledTimes(1);
      expect(mockTx.game_news.create).toHaveBeenCalledWith({
        data: {
          game_id: 1,
          title: 'Game Launch',
          content: 'The game has been launched!',
        },
      });
      expect(result).toEqual(mockResult);
    });

    it('should throw ConflictException when game title already exists', async () => {
      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValue({ id: 1, title: 'Test Game' }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createCompleteGame(createCompleteGameDto),
      ).rejects.toThrow(ConflictException);
      expect(mockTx.games.findUnique).toHaveBeenCalledWith({
        where: { title: 'Test Game' },
      });
    });

    it('should throw NotFoundException when tag not found', async () => {
      const mockTx = {
        games: {
          findUnique: jest.fn().mockResolvedValue(null),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue([{ id: 1 }]),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createCompleteGame(createCompleteGameDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when developer not found', async () => {
      const mockTx = {
        games: {
          findUnique: jest.fn().mockResolvedValue(null),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue([{ id: 1 }, { id: 2 }]),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue([]),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createCompleteGame(createCompleteGameDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when base game not found', async () => {
      const dtoWithBaseGame = {
        ...createCompleteGameDto,
        game: {
          ...createCompleteGameDto.game,
          base_game_id: 999,
        },
      };

      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce(null),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue([{ id: 1 }, { id: 2 }]),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue([{ id: 1 }]),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(service.createCompleteGame(dtoWithBaseGame)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should create game with base_game_id when provided', async () => {
      const dtoWithBaseGame = {
        ...createCompleteGameDto,
        game: {
          ...createCompleteGameDto.game,
          base_game_id: 1,
        },
      };

      const mockGame = {
        id: 2,
        title: 'Test Game',
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: true,
        base_game_id: 1,
      };

      const mockBaseGame = { id: 1, title: 'Base Game' };
      const mockTags = [
        { id: 1, tag_name: 'action' },
        { id: 2, tag_name: 'adventure' },
      ];
      const mockDevs = [{ id: 1, dev_name: 'Test Dev', dev_type: 'developer' }];

      const mockResult = {
        ...mockGame,
        achievements: [],
        game_tag_connection: [],
        game_dev_connection: [],
        game_news: [],
      };

      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce(mockBaseGame)
            .mockResolvedValueOnce(mockResult),
          create: jest.fn().mockResolvedValue(mockGame),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue(mockTags),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue(mockDevs),
        },
        achievements: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
        game_tag_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_dev_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_news: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.createCompleteGame(dtoWithBaseGame);

      expect(mockTx.games.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          base_game_id: 1,
        }),
      });
      expect(result).toBeDefined();
    });

    it('should create all achievements for the game', async () => {
      const mockGame = {
        id: 1,
        title: 'Test Game',
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: true,
      };

      const mockTags = [
        { id: 1, tag_name: 'action' },
        { id: 2, tag_name: 'adventure' },
      ];
      const mockDevs = [{ id: 1, dev_name: 'Test Dev', dev_type: 'developer' }];

      const mockResult = {
        ...mockGame,
        achievements: [
          {
            id: 1,
            title: 'First Achievement',
            icon: 'https://example.com/icon1.png',
          },
          {
            id: 2,
            title: 'Second Achievement',
            icon: 'https://example.com/icon2.png',
          },
        ],
        game_tag_connection: [],
        game_dev_connection: [],
        game_news: [],
      };

      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce(mockResult),
          create: jest.fn().mockResolvedValue(mockGame),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue(mockTags),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue(mockDevs),
        },
        achievements: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
        game_tag_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_dev_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_news: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await service.createCompleteGame(createCompleteGameDto);

      expect(mockTx.achievements.create).toHaveBeenCalledTimes(2);
      expect(mockTx.achievements.create).toHaveBeenNthCalledWith(1, {
        data: {
          game_id: 1,
          title: 'First Achievement',
          icon: 'https://example.com/icon1.png',
        },
      });
      expect(mockTx.achievements.create).toHaveBeenNthCalledWith(2, {
        data: {
          game_id: 1,
          title: 'Second Achievement',
          icon: 'https://example.com/icon2.png',
        },
      });
    });

    it('should create all tag connections for the game', async () => {
      const mockGame = {
        id: 1,
        title: 'Test Game',
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: true,
      };

      const mockTags = [
        { id: 1, tag_name: 'action' },
        { id: 2, tag_name: 'adventure' },
      ];
      const mockDevs = [{ id: 1, dev_name: 'Test Dev', dev_type: 'developer' }];

      const mockResult = {
        ...mockGame,
        achievements: [],
        game_tag_connection: [],
        game_dev_connection: [],
        game_news: [],
      };

      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce(mockResult),
          create: jest.fn().mockResolvedValue(mockGame),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue(mockTags),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue(mockDevs),
        },
        achievements: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
        game_tag_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_dev_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_news: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await service.createCompleteGame(createCompleteGameDto);

      expect(mockTx.game_tag_connection.create).toHaveBeenCalledTimes(2);
      expect(mockTx.game_tag_connection.create).toHaveBeenNthCalledWith(1, {
        data: {
          game_id: 1,
          tag_id: 1,
        },
      });
      expect(mockTx.game_tag_connection.create).toHaveBeenNthCalledWith(2, {
        data: {
          game_id: 1,
          tag_id: 2,
        },
      });
    });

    it('should create all developer connections for the game', async () => {
      const mockGame = {
        id: 1,
        title: 'Test Game',
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: true,
      };

      const mockTags = [
        { id: 1, tag_name: 'action' },
        { id: 2, tag_name: 'adventure' },
      ];
      const mockDevs = [
        { id: 1, dev_name: 'Test Dev 1', dev_type: 'developer' },
        { id: 2, dev_name: 'Test Dev 2', dev_type: 'publisher' },
      ];

      const dtoWithMultipleDevs = {
        ...createCompleteGameDto,
        devIds: [1, 2],
      };

      const mockResult = {
        ...mockGame,
        achievements: [],
        game_tag_connection: [],
        game_dev_connection: [],
        game_news: [],
      };

      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce(mockResult),
          create: jest.fn().mockResolvedValue(mockGame),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue(mockTags),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue(mockDevs),
        },
        achievements: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
        game_tag_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_dev_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_news: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await service.createCompleteGame(dtoWithMultipleDevs);

      expect(mockTx.game_dev_connection.create).toHaveBeenCalledTimes(2);
      expect(mockTx.game_dev_connection.create).toHaveBeenNthCalledWith(1, {
        data: {
          game_id: 1,
          dev_id: 1,
        },
      });
      expect(mockTx.game_dev_connection.create).toHaveBeenNthCalledWith(2, {
        data: {
          game_id: 1,
          dev_id: 2,
        },
      });
    });

    it('should set is_multiplayer to false by default', async () => {
      const dtoWithoutMultiplayer = {
        ...createCompleteGameDto,
        game: {
          ...createCompleteGameDto.game,
          is_multiplayer: undefined,
        },
      };

      const mockGame = {
        id: 1,
        title: 'Test Game',
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        description: 'A test game',
        system_requirements: { minRAM: '8GB' },
        is_multiplayer: false,
      };

      const mockTags = [
        { id: 1, tag_name: 'action' },
        { id: 2, tag_name: 'adventure' },
      ];
      const mockDevs = [{ id: 1, dev_name: 'Test Dev', dev_type: 'developer' }];

      const mockResult = {
        ...mockGame,
        achievements: [],
        game_tag_connection: [],
        game_dev_connection: [],
        game_news: [],
      };

      const mockTx = {
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce(mockResult),
          create: jest.fn().mockResolvedValue(mockGame),
        },
        tags: {
          findMany: jest.fn().mockResolvedValue(mockTags),
        },
        devs: {
          findMany: jest.fn().mockResolvedValue(mockDevs),
        },
        achievements: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
        game_tag_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_dev_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
        game_news: {
          create: jest.fn().mockResolvedValue({ id: 1 }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await service.createCompleteGame(dtoWithoutMultiplayer);

      expect(mockTx.games.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          is_multiplayer: false,
        }),
      });
    });
  });

  describe('completeGamePurchase', () => {
    const completeGamePurchaseDto: CompleteGamePurchaseDto = {
      userId: 1,
      gameId: 1,
      ownership: OwnershipType.purchased,
      initialSaveData: { level: 1, progress: 0 },
      initialReview: {
        rating: 5,
        content: 'Great game!',
      },
    };

    it('should complete game purchase with all optional fields', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockSave = {
        id: 1,
        user_id: 1,
        game_id: 1,
        save_data: { level: 1, progress: 0 },
      };
      const mockAchievement = {
        id: 1,
        game_id: 1,
        title: 'First Achievement',
      };
      const mockReview = {
        id: 1,
        user_id: 1,
        game_id: 1,
        rating: 5,
        content: 'Great game!',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [mockAchievement],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockSave),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(mockAchievement),
        },
        user_achieve_connection: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue({}),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockReview),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(
        completeGamePurchaseDto,
      );

      expect(mockPrismaService.executeTransaction).toHaveBeenCalled();
      expect(mockTx.users.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockTx.games.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockTx.libraries.findUnique).toHaveBeenCalledWith({
        where: {
          user_id_game_id: {
            user_id: 1,
            game_id: 1,
          },
        },
      });
      expect(mockTx.libraries.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          ownership: 'purchased',
          hours_played: 0,
          download_status: 'not_installed',
        },
      });
      expect(mockTx.saves.findUnique).toHaveBeenCalledWith({
        where: {
          user_id_game_id: {
            user_id: 1,
            game_id: 1,
          },
        },
      });
      expect(mockTx.saves.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          save_data: { level: 1, progress: 0 },
        },
      });
      expect(mockTx.achievements.findFirst).toHaveBeenCalledWith({
        where: { game_id: 1 },
        orderBy: { id: 'asc' },
      });
      expect(mockTx.user_achieve_connection.findUnique).toHaveBeenCalledWith({
        where: {
          user_id_achievement_id: {
            user_id: 1,
            achievement_id: 1,
          },
        },
      });
      expect(mockTx.user_achieve_connection.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          achievement_id: 1,
        },
      });
      expect(mockTx.reviews.findUnique).toHaveBeenCalledWith({
        where: {
          user_id_game_id: {
            user_id: 1,
            game_id: 1,
          },
        },
      });
      expect(mockTx.reviews.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          rating: 5,
          content: 'Great game!',
        },
      });
      expect(result.library).toEqual(mockLibrary);
      expect(result.save).toEqual(mockSave);
      expect(result.achievementUnlocked).toEqual(mockAchievement);
      expect(result.review).toEqual(mockReview);
      expect(result.game).toEqual(mockGameWithAchievements);
    });

    it('should complete game purchase with minimal fields', async () => {
      const minimalDto: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.purchased,
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(minimalDto);

      expect(mockTx.libraries.create).toHaveBeenCalled();
      expect(mockTx.saves.findUnique).not.toHaveBeenCalled();
      expect(mockTx.saves.create).not.toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.create).not.toHaveBeenCalled();
      expect(mockTx.reviews.findUnique).not.toHaveBeenCalled();
      expect(mockTx.reviews.create).not.toHaveBeenCalled();
      expect(result.save).toBeNull();
      expect(result.achievementUnlocked).toBeNull();
      expect(result.review).toBeNull();
    });

    it('should throw NotFoundException when user not found', async () => {
      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.completeGamePurchase(completeGamePurchaseDto),
      ).rejects.toThrow(NotFoundException);
      expect(mockTx.users.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw NotFoundException when game not found', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.completeGamePurchase(completeGamePurchaseDto),
      ).rejects.toThrow(NotFoundException);
      expect(mockTx.games.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw ConflictException when user already owns the game', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const existingLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest.fn().mockResolvedValue(mockGame),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(existingLibrary),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.completeGamePurchase(completeGamePurchaseDto),
      ).rejects.toThrow(ConflictException);
      expect(mockTx.libraries.findUnique).toHaveBeenCalledWith({
        where: {
          user_id_game_id: {
            user_id: 1,
            game_id: 1,
          },
        },
      });
    });

    it('should throw BadRequestException when rating is less than 1', async () => {
      const dtoWithInvalidRating = {
        ...completeGamePurchaseDto,
        initialReview: {
          rating: 0,
          content: 'Test',
        },
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest.fn().mockResolvedValue(mockGame),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.completeGamePurchase(dtoWithInvalidRating),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when rating is greater than 5', async () => {
      const dtoWithInvalidRating = {
        ...completeGamePurchaseDto,
        initialReview: {
          rating: 6,
          content: 'Test',
        },
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest.fn().mockResolvedValue(mockGame),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.completeGamePurchase(dtoWithInvalidRating),
      ).rejects.toThrow(BadRequestException);
    });

    it('should not create save if save data already exists', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const existingSave = {
        id: 1,
        user_id: 1,
        game_id: 1,
        save_data: { level: 1, progress: 0 },
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn().mockResolvedValue(existingSave),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(
        completeGamePurchaseDto,
      );

      expect(mockTx.saves.findUnique).toHaveBeenCalled();
      expect(mockTx.saves.create).not.toHaveBeenCalled();
      expect(result.save).toBeNull();
    });

    it('should not create achievement unlock if already unlocked', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockAchievement = {
        id: 1,
        game_id: 1,
        title: 'First Achievement',
      };
      const existingUnlock = {
        user_id: 1,
        achievement_id: 1,
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [mockAchievement],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(mockAchievement),
        },
        user_achieve_connection: {
          findUnique: jest.fn().mockResolvedValue(existingUnlock),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(
        completeGamePurchaseDto,
      );

      expect(mockTx.user_achieve_connection.findUnique).toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.create).not.toHaveBeenCalled();
      expect(result.achievementUnlocked).toBeNull();
    });

    it('should not create review if review already exists', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const existingReview = {
        id: 1,
        user_id: 1,
        game_id: 1,
        rating: 5,
        content: 'Great game!',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(existingReview),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(
        completeGamePurchaseDto,
      );

      expect(mockTx.reviews.findUnique).toHaveBeenCalled();
      expect(mockTx.reviews.create).not.toHaveBeenCalled();
      expect(result.review).toBeNull();
    });

    it('should handle game without achievements', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(
        completeGamePurchaseDto,
      );

      expect(mockTx.achievements.findFirst).toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.findUnique).not.toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.create).not.toHaveBeenCalled();
      expect(result.achievementUnlocked).toBeNull();
    });

    it('should complete game purchase with rented ownership type', async () => {
      const dtoWithRented: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.rented,
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'rented',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(dtoWithRented);

      expect(mockTx.libraries.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          ownership: 'rented',
          hours_played: 0,
          download_status: 'not_installed',
        },
      });
      expect(result.library.ownership).toBe('rented');
    });

    it('should complete game purchase with wishlist ownership type', async () => {
      const dtoWithWishlist: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.wishlist,
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'wishlist',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(dtoWithWishlist);

      expect(mockTx.libraries.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          ownership: 'wishlist',
          hours_played: 0,
          download_status: 'not_installed',
        },
      });
      expect(result.library.ownership).toBe('wishlist');
    });

    it('should complete game purchase with only save data', async () => {
      const dtoWithOnlySave: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.purchased,
        initialSaveData: { level: 1, progress: 50 },
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockSave = {
        id: 1,
        user_id: 1,
        game_id: 1,
        save_data: { level: 1, progress: 50 },
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockSave),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(dtoWithOnlySave);

      expect(mockTx.saves.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          save_data: { level: 1, progress: 50 },
        },
      });
      expect(mockTx.reviews.findUnique).not.toHaveBeenCalled();
      expect(mockTx.reviews.create).not.toHaveBeenCalled();
      expect(result.save).toEqual(mockSave);
      expect(result.review).toBeNull();
    });

    it('should complete game purchase with only review', async () => {
      const dtoWithOnlyReview: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.purchased,
        initialReview: {
          rating: 4,
          content: 'Good game',
        },
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockReview = {
        id: 1,
        user_id: 1,
        game_id: 1,
        rating: 4,
        content: 'Good game',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockReview),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(dtoWithOnlyReview);

      expect(mockTx.saves.findUnique).not.toHaveBeenCalled();
      expect(mockTx.saves.create).not.toHaveBeenCalled();
      expect(mockTx.reviews.create).toHaveBeenCalledWith({
        data: {
          user_id: 1,
          game_id: 1,
          rating: 4,
          content: 'Good game',
        },
      });
      expect(result.save).toBeNull();
      expect(result.review).toEqual(mockReview);
    });

    it('should accept rating value of 1', async () => {
      const dtoWithMinRating: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.purchased,
        initialReview: {
          rating: 1,
          content: 'Poor game',
        },
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockReview = {
        id: 1,
        user_id: 1,
        game_id: 1,
        rating: 1,
        content: 'Poor game',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockReview),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(dtoWithMinRating);

      expect(result.review.rating).toBe(1);
    });

    it('should accept rating value of 5', async () => {
      const dtoWithMaxRating: CompleteGamePurchaseDto = {
        userId: 1,
        gameId: 1,
        ownership: OwnershipType.purchased,
        initialReview: {
          rating: 5,
          content: 'Excellent game',
        },
      };

      const mockUser = { id: 1, username: 'testuser' };
      const mockGame = { id: 1, title: 'Test Game' };
      const mockLibrary = {
        id: 1,
        user_id: 1,
        game_id: 1,
        ownership: 'purchased',
        hours_played: 0,
        download_status: 'not_installed',
      };
      const mockReview = {
        id: 1,
        user_id: 1,
        game_id: 1,
        rating: 5,
        content: 'Excellent game',
      };
      const mockGameWithAchievements = {
        ...mockGame,
        achievements: [],
      };

      const mockTx = {
        users: {
          findUnique: jest.fn().mockResolvedValue(mockUser),
        },
        games: {
          findUnique: jest
            .fn()
            .mockResolvedValueOnce(mockGame)
            .mockResolvedValueOnce(mockGameWithAchievements),
        },
        libraries: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockLibrary),
        },
        saves: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        achievements: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        user_achieve_connection: {
          findUnique: jest.fn(),
          create: jest.fn(),
        },
        reviews: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockReview),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const result = await service.completeGamePurchase(dtoWithMaxRating);

      expect(result.review.rating).toBe(5);
    });
  });

  describe('createUserWithInitialSetup', () => {
    const createUserWithInitialSetupDto: CreateUserWithInitialSetupDto = {
      user: {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        age: 25,
        region: 'US',
        avatar: 'https://example.com/avatar.jpg',
      },
      initialGameIds: [1, 2],
      friendIds: [3, 4],
      achievementIds: [1, 2],
    };

    it('should create user with all initial setup data', async () => {
      const mockUser = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        age: 25,
        region: 'US',
        avatar: 'https://example.com/avatar.jpg',
      };

      const mockGames = [
        { id: 1, title: 'Game 1', cover: 'cover1.jpg' },
        { id: 2, title: 'Game 2', cover: 'cover2.jpg' },
      ];

      const mockFriends = [
        { id: 3, username: 'friend1', avatar: 'avatar1.jpg' },
        { id: 4, username: 'friend2', avatar: 'avatar2.jpg' },
      ];

      const mockAchievements = [
        { id: 1, title: 'Achievement 1' },
        { id: 2, title: 'Achievement 2' },
      ];

      const mockResult = {
        ...mockUser,
        libraries: [
          {
            games: { id: 1, title: 'Game 1', cover: 'cover1.jpg' },
          },
          {
            games: { id: 2, title: 'Game 2', cover: 'cover2.jpg' },
          },
        ],
        friends_friends_user_idTousers: [
          {
            users_friends_friend_idTousers: {
              id: 3,
              username: 'friend1',
              avatar: 'avatar1.jpg',
            },
          },
          {
            users_friends_friend_idTousers: {
              id: 4,
              username: 'friend2',
              avatar: 'avatar2.jpg',
            },
          },
        ],
        user_achieve_connection: [
          {
            achievements: {
              id: 1,
              title: 'Achievement 1',
              games: { id: 1, title: 'Game 1' },
            },
          },
          {
            achievements: {
              id: 2,
              title: 'Achievement 2',
              games: { id: 1, title: 'Game 1' },
            },
          },
        ],
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockUser),
          findUnique: jest.fn().mockResolvedValue(mockResult),
          findMany: jest.fn().mockResolvedValue(mockFriends),
        },
        games: {
          findMany: jest.fn().mockResolvedValue(mockGames),
        },
        libraries: {
          create: jest.fn().mockResolvedValue({}),
        },
        friends: {
          create: jest.fn().mockResolvedValue({}),
        },
        achievements: {
          findMany: jest.fn().mockResolvedValue(mockAchievements),
        },
        user_achieve_connection: {
          create: jest.fn().mockResolvedValue({}),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      const result = await service.createUserWithInitialSetup(
        createUserWithInitialSetupDto,
      );

      expect(mockPrismaService.executeTransaction).toHaveBeenCalled();
      expect(mockTx.users.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [{ username: 'testuser' }, { email: 'test@example.com' }],
        },
      });
      expect(mockTx.games.findMany).toHaveBeenCalledWith({
        where: { id: { in: [1, 2] } },
      });
      expect(mockTx.users.findMany).toHaveBeenCalledWith({
        where: { id: { in: [3, 4] } },
      });
      expect(mockTx.achievements.findMany).toHaveBeenCalledWith({
        where: { id: { in: [1, 2] } },
      });
      expect(mockTx.users.create).toHaveBeenCalledWith({
        data: {
          username: 'testuser',
          email: 'test@example.com',
          password_hash: 'hashedPassword',
          age: 25,
          region: 'US',
          avatar: 'https://example.com/avatar.jpg',
        },
      });
      expect(mockTx.libraries.create).toHaveBeenCalledTimes(2);
      expect(mockTx.friends.create).toHaveBeenCalledTimes(2);
      expect(mockTx.user_achieve_connection.create).toHaveBeenCalledTimes(2);
      expect(result).toEqual(mockResult);
    });

    it('should create user with minimal fields', async () => {
      const minimalDto: CreateUserWithInitialSetupDto = {
        user: {
          username: 'minimaluser',
          email: 'minimal@example.com',
          password: 'password123',
          age: 20,
          region: 'EU',
        },
      };

      const mockUser = {
        id: 2,
        username: 'minimaluser',
        email: 'minimal@example.com',
        age: 20,
        region: 'EU',
      };

      const mockResult = {
        ...mockUser,
        libraries: [],
        friends_friends_user_idTousers: [],
        user_achieve_connection: [],
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockUser),
          findUnique: jest.fn().mockResolvedValue(mockResult),
        },
        games: {
          findMany: jest.fn(),
        },
        libraries: {
          create: jest.fn(),
        },
        friends: {
          create: jest.fn(),
        },
        achievements: {
          findMany: jest.fn(),
        },
        user_achieve_connection: {
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      const result = await service.createUserWithInitialSetup(minimalDto);

      expect(mockTx.games.findMany).not.toHaveBeenCalled();
      expect(mockTx.libraries.create).not.toHaveBeenCalled();
      expect(mockTx.friends.create).not.toHaveBeenCalled();
      expect(mockTx.achievements.findMany).not.toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.create).not.toHaveBeenCalled();
      expect(result).toEqual(mockResult);
    });

    it('should throw ConflictException when username already exists', async () => {
      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue({
            id: 1,
            username: 'testuser',
          }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createUserWithInitialSetup(createUserWithInitialSetupDto),
      ).rejects.toThrow(ConflictException);
      expect(mockTx.users.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [{ username: 'testuser' }, { email: 'test@example.com' }],
        },
      });
    });

    it('should throw ConflictException when email already exists', async () => {
      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue({
            id: 1,
            email: 'test@example.com',
          }),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createUserWithInitialSetup(createUserWithInitialSetupDto),
      ).rejects.toThrow(ConflictException);
    });

    it('should throw BadRequestException when age is less than 13', async () => {
      const dtoWithInvalidAge: CreateUserWithInitialSetupDto = {
        ...createUserWithInitialSetupDto,
        user: {
          ...createUserWithInitialSetupDto.user,
          age: 12,
        },
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createUserWithInitialSetup(dtoWithInvalidAge),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when age is greater than 120', async () => {
      const dtoWithInvalidAge: CreateUserWithInitialSetupDto = {
        ...createUserWithInitialSetupDto,
        user: {
          ...createUserWithInitialSetupDto.user,
          age: 121,
        },
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createUserWithInitialSetup(dtoWithInvalidAge),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when region is not 2 characters', async () => {
      const dtoWithInvalidRegion: CreateUserWithInitialSetupDto = {
        ...createUserWithInitialSetupDto,
        user: {
          ...createUserWithInitialSetupDto.user,
          region: 'USA',
        },
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      await expect(
        service.createUserWithInitialSetup(dtoWithInvalidRegion),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException when game not found', async () => {
      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
        },
        games: {
          findMany: jest.fn().mockResolvedValue([{ id: 1 }]),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      await expect(
        service.createUserWithInitialSetup(createUserWithInitialSetupDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when friend not found', async () => {
      const mockGames = [
        { id: 1, title: 'Game 1' },
        { id: 2, title: 'Game 2' },
      ];

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          findMany: jest.fn().mockResolvedValue([{ id: 3 }]),
        },
        games: {
          findMany: jest.fn().mockResolvedValue(mockGames),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      await expect(
        service.createUserWithInitialSetup(createUserWithInitialSetupDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when achievement not found', async () => {
      const mockGames = [
        { id: 1, title: 'Game 1' },
        { id: 2, title: 'Game 2' },
      ];

      const mockFriends = [
        { id: 3, username: 'friend1' },
        { id: 4, username: 'friend2' },
      ];

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          findMany: jest
            .fn()
            .mockResolvedValueOnce(mockFriends)
            .mockResolvedValueOnce(mockFriends),
        },
        games: {
          findMany: jest.fn().mockResolvedValue(mockGames),
        },
        achievements: {
          findMany: jest.fn().mockResolvedValue([{ id: 1 }]),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      await expect(
        service.createUserWithInitialSetup(createUserWithInitialSetupDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should create user with only initial games', async () => {
      const dtoWithOnlyGames: CreateUserWithInitialSetupDto = {
        ...createUserWithInitialSetupDto,
        friendIds: undefined,
        achievementIds: undefined,
      };

      const mockUser = {
        id: 3,
        username: 'testuser',
        email: 'test@example.com',
        age: 25,
        region: 'US',
      };

      const mockGames = [
        { id: 1, title: 'Game 1', cover: 'cover1.jpg' },
        { id: 2, title: 'Game 2', cover: 'cover2.jpg' },
      ];

      const mockResult = {
        ...mockUser,
        libraries: [
          { games: { id: 1, title: 'Game 1', cover: 'cover1.jpg' } },
          { games: { id: 2, title: 'Game 2', cover: 'cover2.jpg' } },
        ],
        friends_friends_user_idTousers: [],
        user_achieve_connection: [],
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockUser),
          findUnique: jest.fn().mockResolvedValue(mockResult),
        },
        games: {
          findMany: jest.fn().mockResolvedValue(mockGames),
        },
        libraries: {
          create: jest.fn().mockResolvedValue({}),
        },
        friends: {
          create: jest.fn(),
        },
        achievements: {
          findMany: jest.fn(),
        },
        user_achieve_connection: {
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      const result = await service.createUserWithInitialSetup(dtoWithOnlyGames);

      expect(mockTx.libraries.create).toHaveBeenCalledTimes(2);
      expect(mockTx.friends.create).not.toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.create).not.toHaveBeenCalled();
      expect(result?.libraries).toHaveLength(2);
    });

    it('should create user with empty optional arrays', async () => {
      const dtoWithEmptyArrays: CreateUserWithInitialSetupDto = {
        ...createUserWithInitialSetupDto,
        initialGameIds: [],
        friendIds: [],
        achievementIds: [],
      };

      const mockUser = {
        id: 4,
        username: 'testuser',
        email: 'test@example.com',
        age: 25,
        region: 'US',
      };

      const mockResult = {
        ...mockUser,
        libraries: [],
        friends_friends_user_idTousers: [],
        user_achieve_connection: [],
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockUser),
          findUnique: jest.fn().mockResolvedValue(mockResult),
        },
        games: {
          findMany: jest.fn(),
        },
        libraries: {
          create: jest.fn(),
        },
        friends: {
          create: jest.fn(),
        },
        achievements: {
          findMany: jest.fn(),
        },
        user_achieve_connection: {
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      const result =
        await service.createUserWithInitialSetup(dtoWithEmptyArrays);

      expect(mockTx.games.findMany).not.toHaveBeenCalled();
      expect(mockTx.libraries.create).not.toHaveBeenCalled();
      expect(mockTx.friends.create).not.toHaveBeenCalled();
      expect(mockTx.achievements.findMany).not.toHaveBeenCalled();
      expect(mockTx.user_achieve_connection.create).not.toHaveBeenCalled();
      expect(result).toEqual(mockResult);
    });

    it('should hash password before creating user', async () => {
      const mockUser = {
        id: 5,
        username: 'testuser',
        email: 'test@example.com',
        age: 25,
        region: 'US',
      };

      const mockResult = {
        ...mockUser,
        libraries: [],
        friends_friends_user_idTousers: [],
        user_achieve_connection: [],
      };

      const mockTx = {
        users: {
          findFirst: jest.fn().mockResolvedValue(null),
          create: jest.fn().mockResolvedValue(mockUser),
          findUnique: jest.fn().mockResolvedValue(mockResult),
        },
        games: {
          findMany: jest.fn(),
        },
        libraries: {
          create: jest.fn(),
        },
        friends: {
          create: jest.fn(),
        },
        achievements: {
          findMany: jest.fn(),
        },
        user_achieve_connection: {
          create: jest.fn(),
        },
      };

      mockPrismaService.executeTransaction.mockImplementation(
        async (callback: any) => {
          return callback(mockTx);
        },
      );

      const hashSpy = jest
        .spyOn(bcrypt, 'hash')
        .mockResolvedValue('hashedPassword123');

      const minimalDto: CreateUserWithInitialSetupDto = {
        user: {
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123',
          age: 25,
          region: 'US',
        },
      };

      await service.createUserWithInitialSetup(minimalDto);

      expect(hashSpy).toHaveBeenCalledWith('password123', 10);
      expect(mockTx.users.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          password_hash: 'hashedPassword123',
        }),
      });
    });
  });
});
