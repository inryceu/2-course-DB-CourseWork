import { Injectable } from '@nestjs/common';
import { UserRegisteredIntegrationEvent } from '../../../core/contracts/events/user-registered.integration-event';
import { AnalyticsUserRegistrationProjection } from '../../domain/models/analytics-user-registration.projection';

@Injectable()
export class CoreUserRegisteredEventAclMapper {
  mapToAnalyticsProjection(
    event: UserRegisteredIntegrationEvent,
  ): AnalyticsUserRegistrationProjection {
    return {
      userId: event.userId,
      username: event.username,
      email: event.email,
      region: event.region,
      occurredAt: new Date(event.occurredAt),
    };
  }
}
