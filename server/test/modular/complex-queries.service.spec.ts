import { Test, TestingModule } from '@nestjs/testing';
import { ComplexQueriesService } from '../../src/modules/complex-queries/complex-queries.service';
import { PrismaService } from '../../src/prisma/prisma.service';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { CreateCompleteGameDto } from '../../src/modules/complex-queries/dto/create-complete-game.dto';

describe('ComplexQueriesService', () => {
  let service: ComplexQueriesService;

  const mockPrismaService = {
    executeTransaction: jest.fn(),
    games: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    tags: {
      findMany: jest.fn(),
    },
    devs: {
      findMany: jest.fn(),
    },
    achievements: {
      create: jest.fn(),
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
});
