import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRegisteredIntegrationEvent } from '../../contexts/core/contracts/events/user-registered.integration-event';
import {
  IUserRegistrationSideEffects,
  USER_REGISTRATION_SIDE_EFFECTS_TOKEN,
} from '../../contexts/core/application/contracts/user-registration-side-effects.interface';

@EventsHandler(UserRegisteredIntegrationEvent)
export class UserRegisteredEventHandler
  implements IEventHandler<UserRegisteredIntegrationEvent>
{
  private readonly logger = new Logger(UserRegisteredEventHandler.name);

  constructor(
    @Inject(USER_REGISTRATION_SIDE_EFFECTS_TOKEN)
    private readonly sideEffects: IUserRegistrationSideEffects,
  ) {}

  handle(event: UserRegisteredIntegrationEvent): void {
    void this.sideEffects
      .trackRegistrationAnalytics({
        userId: event.userId,
        username: event.username,
        email: event.email,
        region: event.region,
        occurredAt: event.occurredAt,
      })
      .catch((error) => {
        this.logger.warn(
          `Async analytics failed for user ${event.userId}: ${error instanceof Error ? error.message : String(error)}`,
        );
      });
  }
}
