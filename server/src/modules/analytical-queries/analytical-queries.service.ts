import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AnalyticalQueriesService {
  constructor(private prisma: PrismaService) {}

  async getRegionalSalesPotential() {
    const wishlistLibraries = await this.prisma.libraries.findMany({
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

    const regionStats = wishlistLibraries.reduce((acc, library) => {
      const region = library.users.region;
      const price = library.games.price
        ? Number(library.games.price)
        : 0;

      if (!acc[region]) {
        acc[region] = {
          region,
          totalAmount: 0,
          gameCount: 0,
          userCount: new Set(),
        };
      }

      acc[region].totalAmount += price;
      acc[region].gameCount += 1;
      acc[region].userCount.add(library.user_id);

      return acc;
    }, {} as Record<string, { region: string; totalAmount: number; gameCount: number; userCount: Set<number> }>);

    const result = Object.values(regionStats)
      .map((stat: { region: string; totalAmount: number; gameCount: number; userCount: Set<number> }) => ({
        region: stat.region,
        totalAmount: Number(stat.totalAmount.toFixed(2)),
        totalGames: stat.gameCount,
        uniqueUsers: stat.userCount.size,
        averageAmountPerUser:
          stat.userCount.size > 0
            ? Number((stat.totalAmount / stat.userCount.size).toFixed(2))
            : 0,
      }))
      .sort((a, b) => b.totalAmount - a.totalAmount);

    return result;
  }

  async getAchievementDifficultyRatio() {
    const games = await this.prisma.games.findMany({
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

    const gameStats = await Promise.all(
      games
        .filter((game) => game.achievements.length > 0)
        .map(async (game) => {
          const totalAchievements = game.achievements.length;
          const totalOwners = game.libraries.length;

          if (totalOwners === 0) {
            return null;
          }

          const achievementIds = game.achievements.map((a) => a.id);
          const totalUnlocks = await this.prisma.user_achieve_connection.count({
            where: {
              achievement_id: {
                in: achievementIds,
              },
            },
          });

          const maxPossibleUnlocks = totalAchievements * totalOwners;
          const unlockPercentage =
            maxPossibleUnlocks > 0
              ? (totalUnlocks / maxPossibleUnlocks) * 100
              : 0;

          return {
            gameId: game.id,
            gameTitle: game.title,
            gameCover: game.cover,
            totalAchievements,
            totalOwners,
            totalUnlocks,
            maxPossibleUnlocks,
            unlockPercentage: Number(unlockPercentage.toFixed(2)),
          };
        }),
    );

    const result = gameStats
      .filter((stat) => stat !== null)
      .sort((a, b) => a!.unlockPercentage - b!.unlockPercentage);

    return result;
  }

  getAgeGroup(age: number): string {
    if (age >= 13 && age <= 17) return '13-17';
    if (age >= 18 && age <= 24) return '18-24';
    if (age >= 25 && age <= 34) return '25-34';
    if (age >= 35 && age <= 44) return '35-44';
    if (age >= 45) return '45+';
    return 'unknown';
  }

  async getGenrePopularityByAge() {
    const libraries = await this.prisma.libraries.findMany({
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

    const ageTagStats: Record<
      string,
      Record<
        number,
        {
          tagId: number;
          tagName: string;
          count: number;
          users: Set<number>;
        }
      >
    > = {};

    libraries.forEach((library) => {
      const ageGroup = this.getAgeGroup(library.users.age);
      if (!ageTagStats[ageGroup]) {
        ageTagStats[ageGroup] = {};
      }

      library.games.game_tag_connection.forEach((connection) => {
        const tagId = connection.tags.id;
        const tagName = connection.tags.tag_name;

        if (!ageTagStats[ageGroup][tagId]) {
          ageTagStats[ageGroup][tagId] = {
            tagId,
            tagName,
            count: 0,
            users: new Set(),
          };
        }

        ageTagStats[ageGroup][tagId].count += 1;
        ageTagStats[ageGroup][tagId].users.add(library.user_id);
      });
    });

    const result = Object.entries(ageTagStats).map(([ageGroup, tags]) => {
      const tagArray = Object.values(tags)
        .map((tag) => ({
          tagId: tag.tagId,
          tagName: tag.tagName,
          totalOccurrences: tag.count,
          uniqueUsers: tag.users.size,
          averageOccurrencesPerUser:
            tag.users.size > 0
              ? Number((tag.count / tag.users.size).toFixed(2))
              : 0,
        }))
        .sort((a, b) => b.totalOccurrences - a.totalOccurrences);

      return {
        ageGroup,
        totalTags: tagArray.length,
        totalOccurrences: tagArray.reduce((sum, tag) => sum + tag.totalOccurrences, 0),
        tags: tagArray,
      };
    });

    return result.sort((a, b) => {
      const ageOrder = ['13-17', '18-24', '25-34', '35-44', '45+', 'unknown'];
      return ageOrder.indexOf(a.ageGroup) - ageOrder.indexOf(b.ageGroup);
    });
  }
}

