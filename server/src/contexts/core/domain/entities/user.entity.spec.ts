import { User } from './user.entity';
import { Email } from '../value-objects/email.vo';
import { Username } from '../value-objects/username.vo';
import { UserAge } from '../value-objects/user-age.vo';
import { InvalidArgumentError } from '../errors/invalid-argument.error';

describe('User Domain Entity', () => {
  let validUserProps: any;

  beforeEach(() => {
    validUserProps = {
      id: 1,
      username: new Username('valid_user'),
      email: new Email('test@example.com'),
      passwordHash: 'hashed_password',
      age: new UserAge(25),
      region: 'US',
      unlockedAchievements: [100, 101],
    };
  });

  it('should create a valid user entity', () => {
    const user = new User(validUserProps);

    expect(user.id).toBe(1);
    expect(user.username.value).toBe('valid_user');
    expect(user.email.value).toBe('test@example.com');
    expect(user.unlockedAchievements).toEqual([100, 101]);
  });

  describe('Value Objects validation', () => {
    it('should throw error on invalid email', () => {
      expect(() => new Email('invalid-email')).toThrow(InvalidArgumentError);
    });

    it('should throw error on invalid age (too young or negative)', () => {
      expect(() => new UserAge(-5)).toThrow(InvalidArgumentError);
      expect(() => new UserAge(0)).toThrow(InvalidArgumentError);
    });
  });

  describe('Business Logic: Achievements', () => {
    it('should unlock a new achievement', () => {
      const user = new User(validUserProps);

      user.unlockAchievement(102);

      expect(user.unlockedAchievements).toContain(102);
      expect(user.unlockedAchievements.length).toBe(3);
    });

    it('should throw error if achievement is already unlocked', () => {
      const user = new User(validUserProps); // Вже має 100 і 101

      expect(() => user.unlockAchievement(100)).toThrow(InvalidArgumentError);
      expect(() => user.unlockAchievement(100)).toThrow(
        'User has already unlocked achievement 100',
      );
    });

    it('should remove an achievement', () => {
      const user = new User(validUserProps);

      user.removeAchievement(100);

      expect(user.unlockedAchievements).not.toContain(100);
      expect(user.unlockedAchievements).toContain(101);
    });
  });
});
