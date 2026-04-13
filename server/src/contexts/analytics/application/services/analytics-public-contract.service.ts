import { Injectable } from '@nestjs/common';
import {
  AnalyticsRegistrationsByRegionDto,
  IAnalyticsPublicContract,
} from '../../contracts/api/analytics-public-contract';
import { AnalyticsReadService } from './analytics-read.service';

@Injectable()
export class AnalyticsPublicContractService implements IAnalyticsPublicContract {
  constructor(private readonly analyticsReadService: AnalyticsReadService) {}

  async getUserRegistrationsByRegion(): Promise<
    AnalyticsRegistrationsByRegionDto[]
  > {
    return this.analyticsReadService.getUserRegistrationByRegion();
  }
}
