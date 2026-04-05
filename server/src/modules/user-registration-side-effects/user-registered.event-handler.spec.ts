import {
  IUserRegistrationSideEffects,
} from '../../application/contracts/user-registration-side-effects.interface';
import { UserRegisteredEvent } from '../../application/events/user-registered.event';
import { UserRegisteredEventHandler } from './user-registered.event-handler';

describe('UserRegisteredEventHandler', () => {
  it('delegates analytics tracking to side effects component', async () => {
    const sideEffects: jest.Mocked<IUserRegistrationSideEffects> = {
      recordComplianceAudit: jest.fn(),
      trackRegistrationAnalytics: jest.fn().mockResolvedValue(undefined),
    };

    const handler = new UserRegisteredEventHandler(sideEffects);
    const event = new UserRegisteredEvent(
      1,
      'user1',
      'user1@example.com',
      'US',
      new Date().toISOString(),
    );

    handler.handle(event);

    await new Promise((resolve) => setImmediate(resolve));

    expect(sideEffects.trackRegistrationAnalytics).toHaveBeenCalledTimes(1);
    expect(sideEffects.trackRegistrationAnalytics).toHaveBeenCalledWith({
      userId: 1,
      username: 'user1',
      email: 'user1@example.com',
      region: 'US',
      occurredAt: event.occurredAt,
    });
  });

  it('swallows async subscriber failures to keep bus flow independent', async () => {
    const sideEffects: jest.Mocked<IUserRegistrationSideEffects> = {
      recordComplianceAudit: jest.fn(),
      trackRegistrationAnalytics: jest
        .fn()
        .mockRejectedValue(new Error('analytics unavailable')),
    };

    const handler = new UserRegisteredEventHandler(sideEffects);

    expect(() =>
      handler.handle(
        new UserRegisteredEvent(
          2,
          'user2',
          'user2@example.com',
          'CA',
          new Date().toISOString(),
        ),
      ),
    ).not.toThrow();

    await new Promise((resolve) => setImmediate(resolve));

    expect(sideEffects.trackRegistrationAnalytics).toHaveBeenCalledTimes(1);
  });
});
