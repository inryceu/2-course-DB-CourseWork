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
}

