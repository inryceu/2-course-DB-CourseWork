import { Test, TestingModule } from '@nestjs/testing';
import { EventBus } from '@nestjs/cqrs';
import { CreateUserCommandHandler } from './create-user.handler';
import { CreateUserCommand } from './create-user.command';
import { UserFactory } from '../../domain/factories/user.factory';
import { USER_REPOSITORY_TOKEN } from '../../domain/repositories/user.repository.interface';
import { User } from '../../domain/entities/user.entity';
import { UserAlreadyExistsError } from '../../domain/errors/user-already-exists.error';
import { InvalidArgumentError } from '../../domain/errors/invalid-argument.error';
import { UserRegisteredEvent } from '../events/user-registered.event';

class FakeUserRepository {
  private users: User[] = [];
  private idCounter = 1;

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((u) => u.email.value === email) || null;
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find((u) => u.username.value === username) || null;
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async save(user: User): Promise<User> {
    if (!user.id) {
      const savedUser = new User({
        id: this.idCounter++,
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
        age: user.age,
        region: user.region,
        avatar: user.avatar,
        createdAt: new Date(),
      });
      this.users.push(savedUser);
      return savedUser;
    } else {
      const index = this.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users[index] = user;
      }
      return user;
    }
  }

  async delete(id: number): Promise<void> {
    this.users = this.users.filter((u) => u.id !== id);
  }

  async addAchievement(userId: number, achievementId: number): Promise<void> {
  }

  async removeAchievement(
    userId: number,
    achievementId: number,
  ): Promise<void> {
  }

  reset() {
    this.users = [];
    this.idCounter = 1;
  }
}

describe('CreateUserCommandHandler (Unit Test)', () => {
  let handler: CreateUserCommandHandler;
  let fakeRepo: FakeUserRepository;
  let userFactory: UserFactory;
  let eventBus: jest.Mocked<Pick<EventBus, 'publish'>>;

  beforeEach(async () => {
    fakeRepo = new FakeUserRepository();
    userFactory = new UserFactory(fakeRepo);
    eventBus = {
      publish: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserCommandHandler,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: fakeRepo,
        },
        {
          provide: UserFactory,
          useValue: userFactory,
        },
        {
          provide: EventBus,
          useValue: eventBus,
        },
      ],
    }).compile();

    handler = module.get<CreateUserCommandHandler>(CreateUserCommandHandler);
  });

  afterEach(() => {
    fakeRepo.reset();
  });

  describe('Successful User Creation', () => {
    it('should create a user and return only the ID', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'test@example.com',
        'password123',
        25,
        'US',
      );

      const userId = await handler.execute(command);

      expect(userId).toBe(1);
      expect(typeof userId).toBe('number');

      const savedUser = await fakeRepo.findById(1);
      expect(savedUser).toBeDefined();
      expect(savedUser!.username.value).toBe('testuser');
      expect(savedUser!.email.value).toBe('test@example.com');

      expect(eventBus.publish).toHaveBeenCalledTimes(1);
      expect(eventBus.publish).toHaveBeenCalledWith(
        expect.any(UserRegisteredEvent),
      );
    });

    it('should hash password before saving', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'test@example.com',
        'password123',
        25,
        'US',
      );

      await handler.execute(command);

      const savedUser = await fakeRepo.findById(1);
      expect(savedUser!.passwordHash).not.toBe('password123'); 
      expect(savedUser!.passwordHash.length).toBeGreaterThan(20); 
    });

    it('should save user with optional avatar', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'test@example.com',
        'password123',
        25,
        'US',
        'https://example.com/avatar.jpg',
      );

      const userId = await handler.execute(command);

      const savedUser = await fakeRepo.findById(userId);
      expect(savedUser!.avatar).toBe('https://example.com/avatar.jpg');
    });
  });

  describe('Asynchronous Event Publication', () => {
    it('should not block command completion on async event processing', async () => {
      eventBus.publish.mockImplementation(
        () => new Promise<void>(() => undefined) as any,
      );

      const userId = await handler.execute(
        new CreateUserCommand(
          'async-user',
          'async@example.com',
          'password123',
          25,
          'US',
        ),
      );

      expect(userId).toBe(1);
      expect(eventBus.publish).toHaveBeenCalledTimes(1);
    });
  });

  describe('Domain Validation', () => {
    it('should throw error for invalid email format', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'invalid-email', 
        'password123',
        25,
        'US',
      );

      await expect(handler.execute(command)).rejects.toThrow(
        InvalidArgumentError,
      );
    });

    it('should throw error for invalid age (too young)', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'test@example.com',
        'password123',
        0, 
        'US',
      );

      await expect(handler.execute(command)).rejects.toThrow(
        InvalidArgumentError,
      );
    });

    it('should throw error for invalid age (too old)', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'test@example.com',
        'password123',
        150,
        'US',
      );

      await expect(handler.execute(command)).rejects.toThrow(
        InvalidArgumentError,
      );
    });

    it('should throw error for invalid username (too short)', async () => {
      const command = new CreateUserCommand(
        'ab', 
        'test@example.com',
        'password123',
        25,
        'US',
      );

      await expect(handler.execute(command)).rejects.toThrow(
        InvalidArgumentError,
      );
    });
  });

  describe('Business Rules (Uniqueness)', () => {
    it('should throw UserAlreadyExistsError when email already exists', async () => {
      await handler.execute(
        new CreateUserCommand(
          'user1',
          'test@example.com',
          'password123',
          25,
          'US',
        ),
      );

      const duplicateCommand = new CreateUserCommand(
        'user2',
        'test@example.com', 
        'password123',
        25,
        'US',
      );

      await expect(handler.execute(duplicateCommand)).rejects.toThrow(
        UserAlreadyExistsError,
      );
    });

    it('should throw UserAlreadyExistsError when username already exists', async () => {
      await handler.execute(
        new CreateUserCommand(
          'testuser',
          'test1@example.com',
          'password123',
          25,
          'US',
        ),
      );

      const duplicateCommand = new CreateUserCommand(
        'testuser', 
        'test2@example.com',
        'password123',
        25,
        'US',
      );

      await expect(handler.execute(duplicateCommand)).rejects.toThrow(
        UserAlreadyExistsError,
      );
    });

    it('should allow creating users with different credentials', async () => {
      const userId1 = await handler.execute(
        new CreateUserCommand('user1', 'test1@example.com', 'pass', 25, 'US'),
      );

      const userId2 = await handler.execute(
        new CreateUserCommand('user2', 'test2@example.com', 'pass', 26, 'CA'),
      );

      expect(userId1).toBe(1);
      expect(userId2).toBe(2);
      expect(userId1).not.toBe(userId2);
    });
  });

  describe('CQS Compliance', () => {
    it('should return only the ID, not the full user object', async () => {
      const command = new CreateUserCommand(
        'testuser',
        'test@example.com',
        'password123',
        25,
        'US',
      );

      const result = await handler.execute(command);

      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThan(0);

      expect((result as any).username).toBeUndefined();
      expect((result as any).email).toBeUndefined();
      expect((result as any).age).toBeUndefined();
    });
  });
});
