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
}

