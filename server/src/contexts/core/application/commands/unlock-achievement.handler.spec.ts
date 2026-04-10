import { Test, TestingModule } from '@nestjs/testing';
import { UnlockAchievementCommandHandler } from './unlock-achievement.handler';
import { UnlockAchievementCommand } from './unlock-achievement.command';
import { USER_REPOSITORY_TOKEN } from '../../domain/repositories/user.repository.interface';
import { UserNotFoundError } from '../../domain/errors/user-not-found.error';
import { User } from '../../domain/entities/user.entity';
import { Username } from '../../domain/value-objects/username.vo';
import { Email } from '../../domain/value-objects/email.vo';
import { UserAge } from '../../domain/value-objects/user-age.vo';
import { InvalidArgumentError } from '../../domain/errors/invalid-argument.error';

class FakeUserRepository {
  private users: User[] = [];
  private persistedAchievements = new Map<number, Set<number>>();

  async findById(id: number): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((u) => u.email.value === email) || null;
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find((u) => u.username.value === username) || null;
  }

  async save(user: User): Promise<User> {
    const existingIndex = this.users.findIndex((u) => u.id === user.id);
    if (existingIndex >= 0) {
      this.users[existingIndex] = user;
      return user;
    }
    this.users.push(user);
    return user;
  }

  async delete(id: number): Promise<void> {
    this.users = this.users.filter((u) => u.id !== id);
  }

  async addAchievement(userId: number, achievementId: number): Promise<void> {
    const existing = await this.findById(userId);
    if (!existing) {
      throw new UserNotFoundError(`User with ID ${userId} not found`);
    }

    const existingSet = this.persistedAchievements.get(userId) ?? new Set();
    existingSet.add(achievementId);
    this.persistedAchievements.set(userId, existingSet);
  }

  async removeAchievement(userId: number, achievementId: number): Promise<void> {
    const existing = await this.findById(userId);
    if (!existing) {
      throw new UserNotFoundError(`User with ID ${userId} not found`);
    }

    const existingSet = this.persistedAchievements.get(userId) ?? new Set();
    existingSet.delete(achievementId);
    this.persistedAchievements.set(userId, existingSet);
  }

  seed(user: User): void {
    this.users.push(user);
  }

  reset(): void {
    this.users = [];
  }
}

describe('UnlockAchievementCommandHandler', () => {
  let handler: UnlockAchievementCommandHandler;
  let fakeRepo: FakeUserRepository;

  beforeEach(async () => {
    fakeRepo = new FakeUserRepository();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnlockAchievementCommandHandler,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: fakeRepo,
        },
      ],
    }).compile();

    handler = module.get<UnlockAchievementCommandHandler>(
      UnlockAchievementCommandHandler,
    );
  });

  afterEach(() => {
    fakeRepo.reset();
  });

  it('unlocks achievement for an existing user', async () => {
    const user = new User({
      id: 10,
      username: new Username('achiever'),
      email: new Email('achiever@example.com'),
      passwordHash: 'hash',
      age: new UserAge(20),
      region: 'US',
      createdAt: new Date(),
      unlockedAchievements: [],
    });
    fakeRepo.seed(user);

    await handler.execute(new UnlockAchievementCommand(10, 5));

    const savedUser = await fakeRepo.findById(10);
    expect(savedUser).not.toBeNull();
    expect(savedUser!.unlockedAchievements).toContain(5);
  });

  it('throws UserNotFoundError when user does not exist', async () => {
    await expect(
      handler.execute(new UnlockAchievementCommand(404, 1)),
    ).rejects.toThrow(UserNotFoundError);
  });

  it('throws when achievement is already unlocked', async () => {
    const user = new User({
      id: 11,
      username: new Username('dupe'),
      email: new Email('dupe@example.com'),
      passwordHash: 'hash',
      age: new UserAge(22),
      region: 'US',
      createdAt: new Date(),
      unlockedAchievements: [3],
    });
    fakeRepo.seed(user);

    await expect(
      handler.execute(new UnlockAchievementCommand(11, 3)),
    ).rejects.toThrow(InvalidArgumentError);
  });
});
