import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AnalyticalQueriesService } from './analytical-queries.service';

@ApiTags('Analytical Queries')
@Controller('analytical-queries')
export class AnalyticalQueriesController {
  constructor(
    private readonly analyticalQueriesService: AnalyticalQueriesService,
  ) {}

  @Get('regional-sales-potential')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get regional sales potential',
    description:
      'Analyzes which regions have users who added games to their wishlist for the largest total amount. Returns regions sorted by total wishlist value in descending order.',
  })
  @ApiResponse({
    status: 200,
    description: 'Regional sales potential data retrieved successfully',
    schema: {
      example: [
        {
          region: 'US',
          totalAmount: 15499.50,
          totalGames: 245,
          uniqueUsers: 89,
          averageAmountPerUser: 174.15,
        },
        {
          region: 'EU',
          totalAmount: 12345.75,
          totalGames: 198,
          uniqueUsers: 67,
          averageAmountPerUser: 184.26,
        },
        {
          region: 'JP',
          totalAmount: 9876.25,
          totalGames: 156,
          uniqueUsers: 45,
          averageAmountPerUser: 219.47,
        },
      ],
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  getRegionalSalesPotential() {
    return this.analyticalQueriesService.getRegionalSalesPotential();
  }

  @Get('achievement-difficulty-ratio')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get achievement difficulty ratio',
    description:
      'Identifies games where players unlock the lowest percentage of available achievements. Returns games sorted by unlock percentage in ascending order (lowest percentage = most difficult achievements).',
  })
  @ApiResponse({
    status: 200,
    description: 'Achievement difficulty ratio data retrieved successfully',
    schema: {
      example: [
        {
          gameId: 1,
          gameTitle: 'Dark Souls',
          gameCover: 'https://example.com/cover.jpg',
          totalAchievements: 50,
          totalOwners: 1000,
          totalUnlocks: 5000,
          maxPossibleUnlocks: 50000,
          unlockPercentage: 10.0,
        },
        {
          gameId: 2,
          gameTitle: 'Sekiro',
          gameCover: 'https://example.com/cover2.jpg',
          totalAchievements: 30,
          totalOwners: 800,
          totalUnlocks: 3600,
          maxPossibleUnlocks: 24000,
          unlockPercentage: 15.0,
        },
        {
          gameId: 3,
          gameTitle: 'Elden Ring',
          gameCover: 'https://example.com/cover3.jpg',
          totalAchievements: 42,
          totalOwners: 2000,
          totalUnlocks: 16800,
          maxPossibleUnlocks: 84000,
          unlockPercentage: 20.0,
        },
      ],
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  getAchievementDifficultyRatio() {
    return this.analyticalQueriesService.getAchievementDifficultyRatio();
  }
}

