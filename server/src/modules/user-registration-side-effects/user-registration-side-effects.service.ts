import { Injectable, Logger } from '@nestjs/common';
import {
  IUserRegistrationSideEffects,
  UserRegistrationPayload,
} from '../../contexts/core/application/contracts/user-registration-side-effects.interface';

@Injectable()
export class UserRegistrationSideEffectsService implements IUserRegistrationSideEffects {
  private readonly logger = new Logger(UserRegistrationSideEffectsService.name);

  async recordComplianceAudit(payload: UserRegistrationPayload): Promise<void> {
    this.logger.log(
      `Compliance audit: user=${payload.userId}, email=${payload.email}, occurredAt=${payload.occurredAt}`,
    );
  }

  async trackRegistrationAnalytics(
    payload: UserRegistrationPayload,
  ): Promise<void> {
    this.logger.log(
      `Analytics tracked: user=${payload.userId}, region=${payload.region}, occurredAt=${payload.occurredAt}`,
    );
  }
}
