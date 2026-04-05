export const USER_REGISTRATION_SIDE_EFFECTS_TOKEN = Symbol(
  'USER_REGISTRATION_SIDE_EFFECTS_TOKEN',
);

export interface UserRegistrationPayload {
  userId: number;
  username: string;
  email: string;
  region: string;
  occurredAt: string;
}

export interface IUserRegistrationSideEffects {
  recordComplianceAudit(payload: UserRegistrationPayload): Promise<void>;
  trackRegistrationAnalytics(payload: UserRegistrationPayload): Promise<void>;
}
