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
      .map((stat) => ({
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
}

