import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticalQueriesService } from '../../src/modules/analytical-queries/analytical-queries.service';
import { PrismaService } from '../../src/prisma/prisma.service';

describe('AnalyticalQueriesService', () => {
  let service: AnalyticalQueriesService;

  const mockPrismaService = {
    games: {
      findMany: jest.fn(),
    },
    user_achieve_connection: {
      count: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticalQueriesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<AnalyticalQueriesService>(AnalyticalQueriesService);

    jest.clearAllMocks();
  });

  describe('getAchievementDifficultyRatio', () => {
    it('should return games sorted by unlock percentage in ascending order', async () => {
      const mockGames = [
        {
          id: 1,
          title: 'Easy Game',
          cover: 'https://example.com/easy.jpg',
          achievements: [
            { id: 1, title: 'Achievement 1' },
            { id: 2, title: 'Achievement 2' },
          ],
          libraries: [{ user_id: 1 }, { user_id: 2 }],
        },
        {
          id: 2,
          title: 'Hard Game',
          cover: 'https://example.com/hard.jpg',
          achievements: [
            { id: 3, title: 'Achievement 3' },
            { id: 4, title: 'Achievement 4' },
            { id: 5, title: 'Achievement 5' },
          ],
          libraries: [{ user_id: 1 }, { user_id: 2 }, { user_id: 3 }],
        },
        {
          id: 3,
          title: 'No Achievements',
          cover: 'https://example.com/no.jpg',
          achievements: [],
          libraries: [{ user_id: 1 }],
        },
      ];

      mockPrismaService.games.findMany.mockResolvedValue(mockGames);

      mockPrismaService.user_achieve_connection.count
        .mockResolvedValueOnce(4)
        .mockResolvedValueOnce(3);

      const result = await service.getAchievementDifficultyRatio();

      expect(mockPrismaService.games.findMany).toHaveBeenCalledWith({
        include: {
          achievements: true,
          libraries: {
            where: {
              ownership: 'purchased',
            },
            select: {
              user_id: true,
            },
          },
        },
      });

      expect(
        mockPrismaService.user_achieve_connection.count,
      ).toHaveBeenCalledTimes(2);
      expect(
        mockPrismaService.user_achieve_connection.count,
      ).toHaveBeenNthCalledWith(1, {
        where: {
          achievement_id: {
            in: [1, 2],
          },
        },
      });
      expect(
        mockPrismaService.user_achieve_connection.count,
      ).toHaveBeenNthCalledWith(2, {
        where: {
          achievement_id: {
            in: [3, 4, 5],
          },
        },
      });

      expect(result).toHaveLength(2);
      expect(result[0].gameId).toBe(2);
      expect(result[0].gameTitle).toBe('Hard Game');
      expect(result[0].totalAchievements).toBe(3);
      expect(result[0].totalOwners).toBe(3);
      expect(result[0].totalUnlocks).toBe(3);
      expect(result[0].maxPossibleUnlocks).toBe(9);
      expect(result[0].unlockPercentage).toBe(33.33);

      expect(result[1].gameId).toBe(1);
      expect(result[1].gameTitle).toBe('Easy Game');
      expect(result[1].totalAchievements).toBe(2);
      expect(result[1].totalOwners).toBe(2);
      expect(result[1].totalUnlocks).toBe(4);
      expect(result[1].maxPossibleUnlocks).toBe(4);
      expect(result[1].unlockPercentage).toBe(100.0);
    });

    it('should exclude games with no achievements', async () => {
      const mockGames = [
        {
          id: 1,
          title: 'Game With Achievements',
          cover: 'https://example.com/game1.jpg',
          achievements: [{ id: 1, title: 'Achievement 1' }],
          libraries: [{ user_id: 1 }],
        },
        {
          id: 2,
          title: 'Game Without Achievements',
          cover: 'https://example.com/game2.jpg',
          achievements: [],
          libraries: [{ user_id: 1 }],
        },
      ];

      mockPrismaService.games.findMany.mockResolvedValue(mockGames);
      mockPrismaService.user_achieve_connection.count.mockResolvedValue(1);

      const result = await service.getAchievementDifficultyRatio();

      expect(result).toHaveLength(1);
      expect(result[0].gameId).toBe(1);
      expect(result[0].gameTitle).toBe('Game With Achievements');
      expect(
        mockPrismaService.user_achieve_connection.count,
      ).toHaveBeenCalledTimes(1);
    });

    it('should exclude games with no owners', async () => {
      const mockGames = [
        {
          id: 1,
          title: 'Game With Owners',
          cover: 'https://example.com/game1.jpg',
          achievements: [{ id: 1, title: 'Achievement 1' }],
          libraries: [{ user_id: 1 }],
        },
        {
          id: 2,
          title: 'Game Without Owners',
          cover: 'https://example.com/game2.jpg',
          achievements: [{ id: 2, title: 'Achievement 2' }],
          libraries: [],
        },
      ];

      mockPrismaService.games.findMany.mockResolvedValue(mockGames);
      mockPrismaService.user_achieve_connection.count.mockResolvedValue(1);

      const result = await service.getAchievementDifficultyRatio();

      expect(result).toHaveLength(1);
      expect(result[0].gameId).toBe(1);
      expect(result[0].gameTitle).toBe('Game With Owners');
      expect(
        mockPrismaService.user_achieve_connection.count,
      ).toHaveBeenCalledTimes(1);
    });

    it('should calculate unlock percentage correctly', async () => {
      const mockGames = [
        {
          id: 1,
          title: 'Test Game',
          cover: 'https://example.com/test.jpg',
          achievements: [
            { id: 1, title: 'Ach 1' },
            { id: 2, title: 'Ach 2' },
          ],
          libraries: [{ user_id: 1 }, { user_id: 2 }, { user_id: 3 }],
        },
      ];

      mockPrismaService.games.findMany.mockResolvedValue(mockGames);
      mockPrismaService.user_achieve_connection.count.mockResolvedValue(3);

      const result = await service.getAchievementDifficultyRatio();

      expect(result[0].totalAchievements).toBe(2);
      expect(result[0].totalOwners).toBe(3);
      expect(result[0].totalUnlocks).toBe(3);
      expect(result[0].maxPossibleUnlocks).toBe(6);
      expect(result[0].unlockPercentage).toBe(50.0);
    });

    it('should return empty array when no games match criteria', async () => {
      mockPrismaService.games.findMany.mockResolvedValue([]);

      const result = await service.getAchievementDifficultyRatio();

      expect(result).toEqual([]);
      expect(
        mockPrismaService.user_achieve_connection?.count,
      ).not.toHaveBeenCalled();
    });

    it('should handle games with zero unlock percentage', async () => {
      const mockGames = [
        {
          id: 1,
          title: 'Unlocked Game',
          cover: 'https://example.com/unlocked.jpg',
          achievements: [{ id: 1, title: 'Achievement 1' }],
          libraries: [{ user_id: 1 }],
        },
        {
          id: 2,
          title: 'No Unlocks Game',
          cover: 'https://example.com/no-unlocks.jpg',
          achievements: [{ id: 2, title: 'Achievement 2' }],
          libraries: [{ user_id: 1 }],
        },
      ];

      mockPrismaService.games.findMany.mockResolvedValue(mockGames);

      mockPrismaService.user_achieve_connection.count
        .mockResolvedValueOnce(1)
        .mockResolvedValueOnce(0);

      const result = await service.getAchievementDifficultyRatio();

      expect(result).toHaveLength(2);
      expect(result[0].gameId).toBe(2);
      expect(result[0].unlockPercentage).toBe(0.0);
      expect(result[1].gameId).toBe(1);
      expect(result[1].unlockPercentage).toBe(100.0);
    });
  });
});
