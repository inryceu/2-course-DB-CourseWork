import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRegisteredEvent } from '../../application/events/user-registered.event';
import {
  IUserRegistrationSideEffects,
  USER_REGISTRATION_SIDE_EFFECTS_TOKEN,
} from '../../application/contracts/user-registration-side-effects.interface';

@EventsHandler(UserRegisteredEvent)
export class UserRegisteredEventHandler
  implements IEventHandler<UserRegisteredEvent>
{
  private readonly logger = new Logger(UserRegisteredEventHandler.name);

  constructor(
    @Inject(USER_REGISTRATION_SIDE_EFFECTS_TOKEN)
    private readonly sideEffects: IUserRegistrationSideEffects,
  ) {}

  handle(event: UserRegisteredEvent): void {
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
