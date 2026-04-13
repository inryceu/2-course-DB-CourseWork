import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnalyticsReadService } from '../application/services/analytics-read.service';

@ApiTags('Analytics Context')
@Controller('analytics')
export class AnalyticsReadController {
  constructor(private readonly analyticsReadService: AnalyticsReadService) {}

  @Get('user-registrations-by-region')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Read Analytics projection for user registrations by region',
    description:
      'Returns Analytics bounded context read-model built asynchronously from Core integration events.',
  })
  @ApiResponse({
    status: 200,
    description: 'Analytics projection returned successfully',
  })
  getUserRegistrationsByRegion() {
    return this.analyticsReadService.getUserRegistrationByRegion();
  }
}
