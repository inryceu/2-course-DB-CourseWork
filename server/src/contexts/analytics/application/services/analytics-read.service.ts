import { Inject, Injectable } from '@nestjs/common';
import {
  ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN,
  IAnalyticsUserRegistrationProjectionRepository,
} from '../contracts/analytics-user-registration-projection.repository';

@Injectable()
export class AnalyticsReadService {
  constructor(
    @Inject(ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN)
    private readonly projectionRepository: IAnalyticsUserRegistrationProjectionRepository,
  ) {}

  getUserRegistrationByRegion() {
    return this.projectionRepository.getRegistrationsByRegion();
  }
}
