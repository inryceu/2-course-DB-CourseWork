import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AnalyticsReadController } from './presentation/analytics-read.controller';
import { AnalyticsReadService } from './application/services/analytics-read.service';
import { CoreUserRegisteredEventAclMapper } from './acl/mappers/core-user-registered-event-acl.mapper';
import { UserRegisteredIntegrationEventHandler } from './application/event-handlers/user-registered.integration-event-handler';
import {
  ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN,
} from './application/contracts/analytics-user-registration-projection.repository';
import { InMemoryAnalyticsUserRegistrationProjectionRepository } from './infrastructure/repositories/in-memory-analytics-user-registration-projection.repository';
import {
  ANALYTICS_PUBLIC_CONTRACT_TOKEN,
} from './contracts/api/analytics-public-contract';
import { AnalyticsPublicContractService } from './application/services/analytics-public-contract.service';
import { AnalyticsConsistencyPolicyService } from './domain/services/analytics-consistency-policy.service';

const EventHandlers = [UserRegisteredIntegrationEventHandler];

@Module({
  imports: [CqrsModule],
  controllers: [AnalyticsReadController],
  providers: [
    ...EventHandlers,
    AnalyticsReadService,
    AnalyticsPublicContractService,
    AnalyticsConsistencyPolicyService,
    CoreUserRegisteredEventAclMapper,
    {
      provide: ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN,
      useClass: InMemoryAnalyticsUserRegistrationProjectionRepository,
    },
    {
      provide: ANALYTICS_PUBLIC_CONTRACT_TOKEN,
      useExisting: AnalyticsPublicContractService,
    },
  ],
  exports: [ANALYTICS_PUBLIC_CONTRACT_TOKEN],
})
export class AnalyticsContextModule {}
