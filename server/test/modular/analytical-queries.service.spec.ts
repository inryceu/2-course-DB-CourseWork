import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticalQueriesService } from '../../src/modules/analytical-queries/analytical-queries.service';
import { PrismaService } from '../../src/prisma/prisma.service';

describe('AnalyticalQueriesService', () => {
  let service: AnalyticalQueriesService;

  const mockPrismaService = {
    games: {
      findMany: jest.fn(),
    },
    libraries: {
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
        mockPrismaService.user_achieve_connection.count,
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

  describe('getRegionalSalesPotential', () => {
    it('should return regional sales potential sorted by total amount descending', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '29.99' },
        },
        {
          user_id: 2,
          users: { region: 'US' },
          games: { price: '19.99' },
        },
        {
          user_id: 3,
          users: { region: 'EU' },
          games: { price: '49.99' },
        },
        {
          user_id: 4,
          users: { region: 'EU' },
          games: { price: '9.99' },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(mockPrismaService.libraries.findMany).toHaveBeenCalledWith({
        where: {
          ownership: 'wishlist',
        },
        include: {
          users: {
            select: {
              region: true,
            },
          },
          games: {
            select: {
              price: true,
            },
          },
        },
      });

      expect(result).toHaveLength(2);
      expect(result[0].region).toBe('EU');
      expect(result[0].totalAmount).toBe(59.98);
      expect(result[0].totalGames).toBe(2);
      expect(result[0].uniqueUsers).toBe(2);
      expect(result[0].averageAmountPerUser).toBe(29.99);

      expect(result[1].region).toBe('US');
      expect(result[1].totalAmount).toBe(49.98);
      expect(result[1].totalGames).toBe(2);
      expect(result[1].uniqueUsers).toBe(2);
      expect(result[1].averageAmountPerUser).toBe(24.99);
    });

    it('should handle games with null prices', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '29.99' },
        },
        {
          user_id: 2,
          users: { region: 'US' },
          games: { price: null },
        },
        {
          user_id: 3,
          users: { region: 'US' },
          games: { price: '19.99' },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(result).toHaveLength(1);
      expect(result[0].region).toBe('US');
      expect(result[0].totalAmount).toBe(49.98);
      expect(result[0].totalGames).toBe(3);
      expect(result[0].uniqueUsers).toBe(3);
      expect(result[0].averageAmountPerUser).toBe(16.66);
    });

    it('should calculate unique users correctly when same user has multiple games', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '29.99' },
        },
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '19.99' },
        },
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '9.99' },
        },
        {
          user_id: 2,
          users: { region: 'US' },
          games: { price: '39.99' },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(result).toHaveLength(1);
      expect(result[0].region).toBe('US');
      expect(result[0].totalAmount).toBe(99.96);
      expect(result[0].totalGames).toBe(4);
      expect(result[0].uniqueUsers).toBe(2);
      expect(result[0].averageAmountPerUser).toBe(49.98);
    });

    it('should return empty array when no wishlist libraries exist', async () => {
      mockPrismaService.libraries.findMany.mockResolvedValue([]);

      const result = await service.getRegionalSalesPotential();

      expect(result).toEqual([]);
    });

    it('should handle single region with single user', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'JP' },
          games: { price: '59.99' },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(result).toHaveLength(1);
      expect(result[0].region).toBe('JP');
      expect(result[0].totalAmount).toBe(59.99);
      expect(result[0].totalGames).toBe(1);
      expect(result[0].uniqueUsers).toBe(1);
      expect(result[0].averageAmountPerUser).toBe(59.99);
    });

    it('should handle multiple regions with varying user counts', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '29.99' },
        },
        {
          user_id: 2,
          users: { region: 'US' },
          games: { price: '39.99' },
        },
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '19.99' },
        },
        {
          user_id: 3,
          users: { region: 'EU' },
          games: { price: '49.99' },
        },
        {
          user_id: 4,
          users: { region: 'AS' },
          games: { price: '9.99' },
        },
        {
          user_id: 5,
          users: { region: 'AS' },
          games: { price: '14.99' },
        },
        {
          user_id: 6,
          users: { region: 'AS' },
          games: { price: '24.99' },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(result).toHaveLength(3);
      expect(result[0].region).toBe('US');
      expect(result[0].totalAmount).toBe(89.97);
      expect(result[0].totalGames).toBe(3);
      expect(result[0].uniqueUsers).toBe(2);
      expect(result[0].averageAmountPerUser).toBe(44.98);

      expect(result[1].region).toBe('EU');
      expect(result[1].totalAmount).toBe(49.99);
      expect(result[1].totalGames).toBe(1);
      expect(result[1].uniqueUsers).toBe(1);
      expect(result[1].averageAmountPerUser).toBe(49.99);

      expect(result[2].region).toBe('AS');
      expect(result[2].totalAmount).toBe(49.97);
      expect(result[2].totalGames).toBe(3);
      expect(result[2].uniqueUsers).toBe(3);
      expect(result[2].averageAmountPerUser).toBe(16.66);
    });

    it('should round totalAmount and averageAmountPerUser to 2 decimal places', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: '33.333' },
        },
        {
          user_id: 2,
          users: { region: 'US' },
          games: { price: '44.444' },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(result[0].totalAmount).toBe(77.78);
      expect(result[0].averageAmountPerUser).toBe(38.89);
    });

    it('should handle region with all null prices', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { region: 'US' },
          games: { price: null },
        },
        {
          user_id: 2,
          users: { region: 'US' },
          games: { price: null },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getRegionalSalesPotential();

      expect(result).toHaveLength(1);
      expect(result[0].region).toBe('US');
      expect(result[0].totalAmount).toBe(0);
      expect(result[0].totalGames).toBe(2);
      expect(result[0].uniqueUsers).toBe(2);
      expect(result[0].averageAmountPerUser).toBe(0);
    });
  });

  describe('getGenrePopularityByAge', () => {
    it('should return genre popularity grouped by age groups in correct order', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 20 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
              {
                tags: { id: 2, tag_name: 'RPG' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 25 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 3,
          users: { age: 15 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 3, tag_name: 'Sports' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(mockPrismaService.libraries.findMany).toHaveBeenCalledWith({
        where: {
          ownership: 'purchased',
        },
        include: {
          users: {
            select: {
              age: true,
            },
          },
          games: {
            include: {
              game_tag_connection: {
                include: {
                  tags: {
                    select: {
                      id: true,
                      tag_name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      expect(result).toHaveLength(3);
      expect(result[0].ageGroup).toBe('13-17');
      expect(result[1].ageGroup).toBe('18-24');
      expect(result[2].ageGroup).toBe('25-34');
    });

    it('should calculate tag statistics correctly for each age group', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 22 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
              {
                tags: { id: 2, tag_name: 'RPG' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 22 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result).toHaveLength(1);
      expect(result[0].ageGroup).toBe('18-24');
      expect(result[0].totalTags).toBe(2);
      expect(result[0].totalOccurrences).toBe(3);

      const actionTag = result[0].tags.find((t) => t.tagName === 'Action');
      expect(actionTag).toBeDefined();
      expect(actionTag!.totalOccurrences).toBe(2);
      expect(actionTag!.uniqueUsers).toBe(2);
      expect(actionTag!.averageOccurrencesPerUser).toBe(1.0);

      const rpgTag = result[0].tags.find((t) => t.tagName === 'RPG');
      expect(rpgTag).toBeDefined();
      expect(rpgTag!.totalOccurrences).toBe(1);
      expect(rpgTag!.uniqueUsers).toBe(1);
      expect(rpgTag!.averageOccurrencesPerUser).toBe(1.0);
    });

    it('should sort tags by totalOccurrences descending', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 30 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 30 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 2, tag_name: 'RPG' },
              },
              {
                tags: { id: 2, tag_name: 'RPG' },
              },
            ],
          },
        },
        {
          user_id: 3,
          users: { age: 30 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 3, tag_name: 'Sports' },
              },
              {
                tags: { id: 3, tag_name: 'Sports' },
              },
              {
                tags: { id: 3, tag_name: 'Sports' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result[0].tags[0].tagName).toBe('Sports');
      expect(result[0].tags[0].totalOccurrences).toBe(3);
      expect(result[0].tags[1].tagName).toBe('RPG');
      expect(result[0].tags[1].totalOccurrences).toBe(2);
      expect(result[0].tags[2].tagName).toBe('Action');
      expect(result[0].tags[2].totalOccurrences).toBe(1);
    });

    it('should handle multiple users with same tag correctly', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 28 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 28 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result[0].tags[0].tagName).toBe('Action');
      expect(result[0].tags[0].totalOccurrences).toBe(3);
      expect(result[0].tags[0].uniqueUsers).toBe(2);
      expect(result[0].tags[0].averageOccurrencesPerUser).toBe(1.5);
    });

    it('should return empty array when no purchased libraries exist', async () => {
      mockPrismaService.libraries.findMany.mockResolvedValue([]);

      const result = await service.getGenrePopularityByAge();

      expect(result).toEqual([]);
    });

    it('should handle all age groups correctly', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 15 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 20 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 2, tag_name: 'RPG' },
              },
            ],
          },
        },
        {
          user_id: 3,
          users: { age: 28 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 3, tag_name: 'Strategy' },
              },
            ],
          },
        },
        {
          user_id: 4,
          users: { age: 38 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 4, tag_name: 'Puzzle' },
              },
            ],
          },
        },
        {
          user_id: 5,
          users: { age: 50 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 5, tag_name: 'Simulation' },
              },
            ],
          },
        },
        {
          user_id: 6,
          users: { age: 10 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 6, tag_name: 'Unknown' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result).toHaveLength(6);
      expect(result[0].ageGroup).toBe('13-17');
      expect(result[1].ageGroup).toBe('18-24');
      expect(result[2].ageGroup).toBe('25-34');
      expect(result[3].ageGroup).toBe('35-44');
      expect(result[4].ageGroup).toBe('45+');
      expect(result[5].ageGroup).toBe('unknown');
    });

    it('should handle games without tags', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 25 },
          games: {
            game_tag_connection: [],
          },
        },
        {
          user_id: 2,
          users: { age: 25 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result).toHaveLength(1);
      expect(result[0].ageGroup).toBe('25-34');
      expect(result[0].totalTags).toBe(1);
      expect(result[0].totalOccurrences).toBe(1);
    });

    it('should calculate averageOccurrencesPerUser correctly', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 30 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
              {
                tags: { id: 1, tag_name: 'Action' },
              },
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 30 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result[0].tags[0].totalOccurrences).toBe(4);
      expect(result[0].tags[0].uniqueUsers).toBe(2);
      expect(result[0].tags[0].averageOccurrencesPerUser).toBe(2.0);
    });

    it('should handle same user with multiple games having same tag', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 35 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 1,
          users: { age: 35 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 1,
          users: { age: 35 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result[0].tags[0].totalOccurrences).toBe(3);
      expect(result[0].tags[0].uniqueUsers).toBe(1);
      expect(result[0].tags[0].averageOccurrencesPerUser).toBe(3.0);
    });

    it('should round averageOccurrencesPerUser to 2 decimal places', async () => {
      const mockLibraries = [
        {
          user_id: 1,
          users: { age: 40 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 2,
          users: { age: 40 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
        {
          user_id: 3,
          users: { age: 40 },
          games: {
            game_tag_connection: [
              {
                tags: { id: 1, tag_name: 'Action' },
              },
            ],
          },
        },
      ];

      mockPrismaService.libraries.findMany.mockResolvedValue(mockLibraries);

      const result = await service.getGenrePopularityByAge();

      expect(result[0].tags[0].totalOccurrences).toBe(4);
      expect(result[0].tags[0].uniqueUsers).toBe(3);
      expect(result[0].tags[0].averageOccurrencesPerUser).toBe(1.33);
    });
  });
});
