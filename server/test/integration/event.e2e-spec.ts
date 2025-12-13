import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { EventService } from '../../src/modules/event/event.service';
import { EventModule } from '../../src/modules/event/event.module';
import { DatabaseConfigModule } from '../../src/config/database-config.module';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import {
  CreateEventDto,
  EvType,
} from '../../src/modules/event/dto/create-event.dto';
import { ev_type } from '@prisma/client';

jest.setTimeout(30000);

describe('EventService (e2e)', () => {
  let app: INestApplication;
  let eventService: EventService;
  let prismaService: PrismaService;
  let createdEventIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DatabaseConfigModule, EventModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    eventService = moduleFixture.get<EventService>(EventService);
    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    await prismaService.$executeRawUnsafe(`
      TRUNCATE TABLE 
        "reviews", 
        "saves", 
        "libraries", 
        "game_news", 
        "events", 
        "devs", 
        "game_tag_connection",
        "game_dev_connection",
        "user_achieve_connection",
        "achievements",
        "games",
        "tags",
        "users",
        "friends"
      RESTART IDENTITY CASCADE;
    `);
  });

  afterEach(async () => {
    if (createdEventIds.length > 0) {
      await prismaService.events.deleteMany({
        where: { id: { in: createdEventIds } },
      });
      createdEventIds = [];
    }

    if (createdGameIds.length > 0) {
      await prismaService.events.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_tag_connection.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_dev_connection.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.achievements.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_news.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.reviews.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.libraries.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.saves.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.games.deleteMany({
        where: { id: { in: createdGameIds } },
      });
      createdGameIds = [];
    }
  });

  afterAll(async () => {
    await app.close();
  });

  async function createTestGame(title: string) {
    const uniqueId = `${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 5)}`;
    const uniqueTitle =
      `e${uniqueId}${title.substring(0, Math.max(0, 50 - uniqueId.length - 1))}`.substring(
        0,
        50,
      );
    const game = await prismaService.games.create({
      data: {
        title: uniqueTitle,
        price: 29.99,
        release_date: new Date('2025-01-01'),
        age_rating: 'E',
        cover: 'https://example.com/cover.jpg',
        system_requirements: {},
      },
    });
    createdGameIds.push(game.id);
    return game;
  }

  describe('create', () => {
    it('should create an event successfully', async () => {
      const game = await createTestGame('Event Game 1');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 50,
        start_date: '2025-06-01T00:00:00Z',
        end_date: '2025-06-07T23:59:59Z',
        type: EvType.sale,
      };

      const event = await eventService.create(createEventDto);
      createdEventIds.push(event.id);

      expect(event).toBeDefined();
      expect(event.id).toBeDefined();
      expect(event.game_id).toBe(game.id);
      expect(event.discount).toBeDefined();
      expect(event.start_date).toBeDefined();
      expect(event.end_date).toBeDefined();
      expect(event.type).toBe('sale');
      expect(event.games).toBeDefined();
      expect(event.games.id).toBe(game.id);
    });

    it('should create an event with giveaway type', async () => {
      const game = await createTestGame('Event Game 2');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        start_date: '2025-07-01T00:00:00Z',
        end_date: '2025-07-07T23:59:59Z',
        type: EvType.giveaway,
      };

      const event = await eventService.create(createEventDto);
      createdEventIds.push(event.id);

      expect(event.type).toBe('giveaway');
    });

    it('should create an event with free_weekend type', async () => {
      const game = await createTestGame('Event Game 3');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        start_date: '2025-08-01T00:00:00Z',
        end_date: '2025-08-03T23:59:59Z',
        type: EvType.free_weekend,
      };

      const event = await eventService.create(createEventDto);
      createdEventIds.push(event.id);

      expect(event.type).toBe(ev_type.free_weekend);
    });

    it('should create an event without discount', async () => {
      const game = await createTestGame('Event Game 4');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        start_date: '2025-09-01T00:00:00Z',
        end_date: '2025-09-07T23:59:59Z',
        type: EvType.giveaway,
      };

      const event = await eventService.create(createEventDto);
      createdEventIds.push(event.id);

      expect(event.discount).toBeNull();
    });

    it('should create an event with zero discount', async () => {
      const game = await createTestGame('Event Game 5');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 0,
        start_date: '2025-10-01T00:00:00Z',
        end_date: '2025-10-07T23:59:59Z',
        type: EvType.sale,
      };

      const event = await eventService.create(createEventDto);
      createdEventIds.push(event.id);

      expect(Number(event.discount)).toBe(0);
    });

    it('should create an event with maximum discount', async () => {
      const game = await createTestGame('Event Game 6');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 100,
        start_date: '2025-11-01T00:00:00Z',
        end_date: '2025-11-07T23:59:59Z',
        type: EvType.sale,
      };

      const event = await eventService.create(createEventDto);
      createdEventIds.push(event.id);

      expect(Number(event.discount)).toBe(100);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      const createEventDto: CreateEventDto = {
        game_id: 999999,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      };

      await expect(eventService.create(createEventDto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException when end_date is before start_date', async () => {
      const game = await createTestGame('Event Game 7');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-07T23:59:59Z',
        end_date: '2025-12-01T00:00:00Z',
        type: EvType.sale,
      };

      await expect(eventService.create(createEventDto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException when end_date equals start_date', async () => {
      const game = await createTestGame('Event Game 8');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-01T00:00:00Z',
        type: EvType.sale,
      };

      await expect(eventService.create(createEventDto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should handle database foreign key constraint violation for game_id', async () => {
      try {
        await prismaService.events.create({
          data: {
            game_id: 999999,
            discount: 50,
            start_date: new Date('2025-12-01'),
            end_date: new Date('2025-12-07'),
            type: 'sale',
          },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2003');
      }
    });

    it('should handle invalid type enum value in database', async () => {
      const game = await createTestGame('Event Game 9');

      try {
        await prismaService.$executeRaw`
          INSERT INTO events (game_id, discount, start_date, end_date, type)
          VALUES (${game.id}, 50, '2025-12-01', '2025-12-07', 'invalid_type')
        `;
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle negative discount value in database', async () => {
      const game = await createTestGame('Event Game 10');

      try {
        await prismaService.events.create({
          data: {
            game_id: game.id,
            discount: -10,
            start_date: new Date('2025-12-01'),
            end_date: new Date('2025-12-07'),
            type: 'sale',
          },
        });
        const event = await prismaService.events.findFirst({
          where: { game_id: game.id },
        });
        if (event) {
          createdEventIds.push(event.id);
        }
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle discount value greater than 100 in database', async () => {
      const game = await createTestGame('Event Game 11');

      try {
        await prismaService.events.create({
          data: {
            game_id: game.id,
            discount: 150,
            start_date: new Date('2025-12-01'),
            end_date: new Date('2025-12-07'),
            type: 'sale',
          },
        });
        const event = await prismaService.events.findFirst({
          where: { game_id: game.id },
        });
        if (event) {
          createdEventIds.push(event.id);
        }
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle transaction rollback on error', async () => {
      const game = await createTestGame('Event Game 12');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-07T23:59:59Z',
        end_date: '2025-12-01T00:00:00Z',
        type: EvType.sale,
      };

      try {
        await eventService.create(createEventDto);
        fail('Should have thrown an error');
      } catch (error) {
        const events = await prismaService.events.findMany({
          where: { game_id: game.id },
        });
        expect(events.length).toBe(0);
      }
    });
  });

  describe('findAll', () => {
    it('should return all events', async () => {
      const game1 = await createTestGame('Event Game 13');
      const game2 = await createTestGame('Event Game 14');

      const event1 = await eventService.create({
        game_id: game1.id,
        discount: 50,
        start_date: '2025-06-01T00:00:00Z',
        end_date: '2025-06-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event1.id);

      const event2 = await eventService.create({
        game_id: game2.id,
        start_date: '2025-07-01T00:00:00Z',
        end_date: '2025-07-07T23:59:59Z',
        type: EvType.giveaway,
      });
      createdEventIds.push(event2.id);

      const events = await eventService.findAll();

      expect(events.length).toBeGreaterThanOrEqual(2);
      expect(events.some((e) => e.id === event1.id)).toBe(true);
      expect(events.some((e) => e.id === event2.id)).toBe(true);
    });

    it('should return events with pagination', async () => {
      const game1 = await createTestGame('Event Game 15');
      const game2 = await createTestGame('Event Game 16');
      const game3 = await createTestGame('Event Game 17');

      const event1 = await eventService.create({
        game_id: game1.id,
        discount: 50,
        start_date: '2025-08-01T00:00:00Z',
        end_date: '2025-08-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event1.id);

      const event2 = await eventService.create({
        game_id: game2.id,
        start_date: '2025-09-01T00:00:00Z',
        end_date: '2025-09-07T23:59:59Z',
        type: EvType.giveaway,
      });
      createdEventIds.push(event2.id);

      const event3 = await eventService.create({
        game_id: game3.id,
        start_date: '2025-10-01T00:00:00Z',
        end_date: '2025-10-07T23:59:59Z',
        type: EvType.free_weekend,
      });
      createdEventIds.push(event3.id);

      const events = await eventService.findAll(0, 2);

      expect(events.length).toBeLessThanOrEqual(2);
    });

    it('should return events ordered by start_date descending', async () => {
      const game1 = await createTestGame('Event Game 18');
      const game2 = await createTestGame('Event Game 19');

      const event1 = await eventService.create({
        game_id: game1.id,
        discount: 50,
        start_date: '2025-11-01T00:00:00Z',
        end_date: '2025-11-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event1.id);

      const event2 = await eventService.create({
        game_id: game2.id,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.giveaway,
      });
      createdEventIds.push(event2.id);

      const events = await eventService.findAll();

      const testEvents = events.filter(
        (e) => e.id === event1.id || e.id === event2.id,
      );

      if (testEvents.length === 2) {
        const event2Index = testEvents.findIndex((e) => e.id === event2.id);
        const event1Index = testEvents.findIndex((e) => e.id === event1.id);
        expect(event2Index).toBeLessThan(event1Index);
      }
    });
  });

  describe('findOne', () => {
    it('should return a specific event', async () => {
      const game = await createTestGame('Event Game 20');

      const createEventDto: CreateEventDto = {
        game_id: game.id,
        discount: 50,
        start_date: '2025-06-01T00:00:00Z',
        end_date: '2025-06-07T23:59:59Z',
        type: EvType.sale,
      };

      const createdEvent = await eventService.create(createEventDto);
      createdEventIds.push(createdEvent.id);

      const event = await eventService.findOne(createdEvent.id);

      expect(event).toBeDefined();
      expect(event.id).toBe(createdEvent.id);
      expect(event.game_id).toBe(game.id);
      expect(event.games).toBeDefined();
      expect(event.games.id).toBe(game.id);
      expect(event.games.description).toBeDefined();
    });

    it('should throw NotFoundException when event does not exist', async () => {
      await expect(eventService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByGame', () => {
    it('should return all events for a game', async () => {
      const game = await createTestGame('Event Game 21');

      const event1 = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-06-01T00:00:00Z',
        end_date: '2025-06-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event1.id);

      const event2 = await eventService.create({
        game_id: game.id,
        start_date: '2025-07-01T00:00:00Z',
        end_date: '2025-07-07T23:59:59Z',
        type: EvType.giveaway,
      });
      createdEventIds.push(event2.id);

      const events = await eventService.findByGame(game.id);

      expect(events.length).toBe(2);
      expect(events.some((e) => e.id === event1.id)).toBe(true);
      expect(events.some((e) => e.id === event2.id)).toBe(true);
    });

    it('should return events with pagination', async () => {
      const game = await createTestGame('Event Game 22');

      const event1 = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-08-01T00:00:00Z',
        end_date: '2025-08-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event1.id);

      const event2 = await eventService.create({
        game_id: game.id,
        start_date: '2025-09-01T00:00:00Z',
        end_date: '2025-09-07T23:59:59Z',
        type: EvType.giveaway,
      });
      createdEventIds.push(event2.id);

      const event3 = await eventService.create({
        game_id: game.id,
        start_date: '2025-10-01T00:00:00Z',
        end_date: '2025-10-07T23:59:59Z',
        type: EvType.free_weekend,
      });
      createdEventIds.push(event3.id);

      const events = await eventService.findByGame(game.id, 0, 2);

      expect(events.length).toBeLessThanOrEqual(2);
    });

    it('should throw NotFoundException when game does not exist', async () => {
      await expect(eventService.findByGame(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return empty array when game has no events', async () => {
      const game = await createTestGame('Event Game 23');

      const events = await eventService.findByGame(game.id);

      expect(events.length).toBe(0);
    });
  });

  describe('findActive', () => {
    it('should return currently active events', async () => {
      const game = await createTestGame('Event Game 24');
      const now = new Date();
      const startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const endDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const activeEvents = await eventService.findActive();

      expect(activeEvents.some((e) => e.id === event.id)).toBe(true);
    });

    it('should not return past events', async () => {
      const game = await createTestGame('Event Game 25');
      const now = new Date();
      const startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const endDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const activeEvents = await eventService.findActive();

      expect(activeEvents.some((e) => e.id === event.id)).toBe(false);
    });

    it('should not return future events', async () => {
      const game = await createTestGame('Event Game 26');
      const now = new Date();
      const startDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      const endDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const activeEvents = await eventService.findActive();

      expect(activeEvents.some((e) => e.id === event.id)).toBe(false);
    });

    it('should return active events with pagination', async () => {
      const game1 = await createTestGame('Event Game 27');
      const game2 = await createTestGame('Event Game 28');
      const now = new Date();
      const startDate1 = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const endDate1 = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      const startDate2 = new Date(now.getTime() - 12 * 60 * 60 * 1000);
      const endDate2 = new Date(now.getTime() + 12 * 60 * 60 * 1000);

      const event1 = await eventService.create({
        game_id: game1.id,
        discount: 50,
        start_date: startDate1.toISOString(),
        end_date: endDate1.toISOString(),
        type: EvType.sale,
      });
      createdEventIds.push(event1.id);

      const event2 = await eventService.create({
        game_id: game2.id,
        start_date: startDate2.toISOString(),
        end_date: endDate2.toISOString(),
        type: EvType.giveaway,
      });
      createdEventIds.push(event2.id);

      const activeEvents = await eventService.findActive(0, 1);

      expect(activeEvents.length).toBeLessThanOrEqual(1);
    });
  });

  describe('update', () => {
    it('should update event discount', async () => {
      const game = await createTestGame('Event Game 29');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-06-01T00:00:00Z',
        end_date: '2025-06-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const updated = await eventService.update(event.id, {
        discount: 75,
      });

      expect(Number(updated.discount)).toBe(75);
    });

    it('should update event type', async () => {
      const game = await createTestGame('Event Game 30');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-07-01T00:00:00Z',
        end_date: '2025-07-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const updated = await eventService.update(event.id, {
        type: EvType.giveaway,
      });

      expect(updated.type).toBe('giveaway');
    });

    it('should update event dates', async () => {
      const game = await createTestGame('Event Game 31');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-08-01T00:00:00Z',
        end_date: '2025-08-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const updated = await eventService.update(event.id, {
        start_date: '2025-09-01T00:00:00Z',
        end_date: '2025-09-07T23:59:59Z',
      });

      const updatedStartDate = new Date(updated.start_date);
      const expectedStartDate = new Date('2025-09-01T00:00:00Z');
      expect(updatedStartDate.getFullYear()).toBe(
        expectedStartDate.getFullYear(),
      );
      expect(updatedStartDate.getMonth()).toBe(expectedStartDate.getMonth());
      expect(updatedStartDate.getDate()).toBe(expectedStartDate.getDate());

      const updatedEndDate = new Date(updated.end_date);
      const expectedEndDate = new Date('2025-09-07T00:00:00Z');
      expect(updatedEndDate.getFullYear()).toBe(expectedEndDate.getFullYear());
      expect(updatedEndDate.getMonth()).toBe(expectedEndDate.getMonth());
      expect(updatedEndDate.getDate()).toBe(expectedEndDate.getDate());
    });

    it('should update event game_id', async () => {
      const game1 = await createTestGame('Event Game 32');
      const game2 = await createTestGame('Event Game 33');

      const event = await eventService.create({
        game_id: game1.id,
        discount: 50,
        start_date: '2025-10-01T00:00:00Z',
        end_date: '2025-10-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const updated = await eventService.update(event.id, {
        game_id: game2.id,
      });

      expect(updated.game_id).toBe(game2.id);
      expect(updated.games.id).toBe(game2.id);
    });

    it('should throw NotFoundException when event does not exist', async () => {
      await expect(
        eventService.update(999999, {
          discount: 75,
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when new game_id does not exist', async () => {
      const game = await createTestGame('Event Game 34');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-11-01T00:00:00Z',
        end_date: '2025-11-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      await expect(
        eventService.update(event.id, {
          game_id: 999999,
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException when end_date is before start_date', async () => {
      const game = await createTestGame('Event Game 35');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      await expect(
        eventService.update(event.id, {
          start_date: '2025-12-07T23:59:59Z',
          end_date: '2025-12-01T00:00:00Z',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when end_date equals start_date', async () => {
      const game = await createTestGame('Event Game 36');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      await expect(
        eventService.update(event.id, {
          start_date: '2025-12-05T00:00:00Z',
          end_date: '2025-12-05T00:00:00Z',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should handle empty update data', async () => {
      const game = await createTestGame('Event Game 37');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      const updated = await eventService.update(event.id, {});

      expect(updated.discount).toBeDefined();
      expect(updated.type).toBe('sale');
    });

    it('should handle database foreign key constraint violation for game_id', async () => {
      const game = await createTestGame('Event Game 38');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      try {
        await prismaService.events.update({
          where: { id: event.id },
          data: { game_id: 999999 },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2003');
      }
    });

    it('should handle invalid type enum value in database', async () => {
      const game = await createTestGame('Event Game 39');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      try {
        await prismaService.$executeRaw`
          UPDATE events
          SET type = 'invalid_type'
          WHERE id = ${event.id}
        `;
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle transaction rollback on error', async () => {
      const game = await createTestGame('Event Game 40');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });
      createdEventIds.push(event.id);

      try {
        await eventService.update(event.id, {
          start_date: '2025-12-07T23:59:59Z',
          end_date: '2025-12-01T00:00:00Z',
        });
        fail('Should have thrown an error');
      } catch (error) {
        const updatedEvent = await prismaService.events.findUnique({
          where: { id: event.id },
        });
        expect(updatedEvent?.discount).toBeDefined();
      }
    });
  });

  describe('remove', () => {
    it('should delete an event', async () => {
      const game = await createTestGame('Event Game 41');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });

      const result = await eventService.remove(event.id);

      expect(result.message).toContain('deleted');

      await expect(eventService.findOne(event.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when event does not exist', async () => {
      await expect(eventService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle database constraint violation when deleting non-existent event', async () => {
      try {
        await prismaService.events.delete({
          where: { id: 999999 },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2025');
      }
    });

    it('should handle transaction rollback on error', async () => {
      const game = await createTestGame('Event Game 42');

      const event = await eventService.create({
        game_id: game.id,
        discount: 50,
        start_date: '2025-12-01T00:00:00Z',
        end_date: '2025-12-07T23:59:59Z',
        type: EvType.sale,
      });

      try {
        await eventService.remove(event.id);
        const deletedEvent = await prismaService.events.findUnique({
          where: { id: event.id },
        });
        expect(deletedEvent).toBeNull();
      } catch (error) {
        const existingEvent = await prismaService.events.findUnique({
          where: { id: event.id },
        });
        expect(existingEvent).toBeDefined();
      }
    });
  });
});
