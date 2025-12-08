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

  @Get('genre-popularity-by-age')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get genre popularity by age',
    description:
      'Analyzes the popularity of game genres (tags) across different age groups. Returns statistics showing which genres are most popular in each age range (13-17, 18-24, 25-34, 35-44, 45+).',
  })
  @ApiResponse({
    status: 200,
    description: 'Genre popularity by age data retrieved successfully',
    schema: {
      example: [
        {
          ageGroup: '13-17',
          totalTags: 15,
          totalOccurrences: 1250,
          tags: [
            {
              tagId: 1,
              tagName: 'Action',
              totalOccurrences: 450,
              uniqueUsers: 120,
              averageOccurrencesPerUser: 3.75,
            },
            {
              tagId: 2,
              tagName: 'Adventure',
              totalOccurrences: 380,
              uniqueUsers: 95,
              averageOccurrencesPerUser: 4.0,
            },
          ],
        },
        {
          ageGroup: '18-24',
          totalTags: 20,
          totalOccurrences: 3200,
          tags: [
            {
              tagId: 3,
              tagName: 'RPG',
              totalOccurrences: 850,
              uniqueUsers: 200,
              averageOccurrencesPerUser: 4.25,
            },
            {
              tagId: 1,
              tagName: 'Action',
              totalOccurrences: 720,
              uniqueUsers: 180,
              averageOccurrencesPerUser: 4.0,
            },
          ],
        },
        {
          ageGroup: '25-34',
          totalTags: 18,
          totalOccurrences: 2800,
          tags: [
            {
              tagId: 4,
              tagName: 'Strategy',
              totalOccurrences: 650,
              uniqueUsers: 150,
              averageOccurrencesPerUser: 4.33,
            },
          ],
        },
      ],
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  getGenrePopularityByAge() {
    return this.analyticalQueriesService.getGenrePopularityByAge();
  }
}

