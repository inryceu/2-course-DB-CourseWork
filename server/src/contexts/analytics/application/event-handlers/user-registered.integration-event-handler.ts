import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRegisteredIntegrationEvent } from '../../../core/contracts/events/user-registered.integration-event';
import { CoreUserRegisteredEventAclMapper } from '../../acl/mappers/core-user-registered-event-acl.mapper';
import {
  ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN,
  IAnalyticsUserRegistrationProjectionRepository,
} from '../contracts/analytics-user-registration-projection.repository';

@EventsHandler(UserRegisteredIntegrationEvent)
export class UserRegisteredIntegrationEventHandler implements IEventHandler<UserRegisteredIntegrationEvent> {
  private readonly logger = new Logger(
    UserRegisteredIntegrationEventHandler.name,
  );

  constructor(
    private readonly aclMapper: CoreUserRegisteredEventAclMapper,
    @Inject(ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN)
    private readonly projectionRepository: IAnalyticsUserRegistrationProjectionRepository,
  ) {}

  handle(event: UserRegisteredIntegrationEvent): void {
    const internalProjection = this.aclMapper.mapToAnalyticsProjection(event);

    setTimeout(() => {
      void this.projectionRepository
        .upsert(internalProjection)
        .catch((error) => {
          this.logger.error(
            `Analytics projection update failed for user ${event.userId}: ${error instanceof Error ? error.message : String(error)}`,
          );
        });
    }, 250);
  }
}
