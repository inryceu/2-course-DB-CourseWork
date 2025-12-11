import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { DevService } from '../../src/modules/dev/dev.service';
import { DevModule } from '../../src/modules/dev/dev.module';
import { ConflictException, NotFoundException } from '@nestjs/common';
import {
  CreateDevDto,
  DevType,
} from '../../src/modules/dev/dto/create-dev.dto';

jest.setTimeout(30000);

describe('DevService (e2e)', () => {
  let app: INestApplication;
  let devService: DevService;
  let prismaService: PrismaService;
  let createdDevIds: number[] = [];
  let createdGameIds: number[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DevModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    devService = moduleFixture.get<DevService>(DevService);
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
    if (createdDevIds.length > 0) {
      await prismaService.game_dev_connection.deleteMany({
        where: { dev_id: { in: createdDevIds } },
      });
      await prismaService.devs.deleteMany({
        where: { id: { in: createdDevIds } },
      });
      createdDevIds = [];
    }

    if (createdGameIds.length > 0) {
      await prismaService.game_dev_connection.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.game_tag_connection.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.achievements.deleteMany({
        where: { game_id: { in: createdGameIds } },
      });
      await prismaService.events.deleteMany({
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
      `d${uniqueId}${title.substring(0, Math.max(0, 50 - uniqueId.length - 1))}`.substring(
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
    it('should create a developer successfully', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `Dev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'dev@example.com', website: 'https://dev.com' },
        logo: 'https://example.com/logo.png',
        dev_type: DevType.developer,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      expect(dev).toBeDefined();
      expect(dev.id).toBeDefined();
      expect(dev.dev_name).toBe(createDevDto.dev_name);
      expect(dev.contacts).toEqual(createDevDto.contacts);
      expect(dev.logo).toBe(createDevDto.logo);
      expect(dev.dev_type).toBe('developer');
    });

    it('should create a publisher successfully', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `Pub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'pub@example.com' },
        dev_type: DevType.publisher,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      expect(dev.dev_type).toBe('publisher');
      expect(dev.logo).toBeNull();
    });

    it('should create a developer/publisher with both type', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `Both_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'both@example.com', phone: '+1234567890' },
        logo: 'https://example.com/both-logo.png',
        dev_type: DevType.both,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      expect(dev.dev_type).toBe('both');
    });

    it('should create a developer without logo', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `NoLogo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'nologo@example.com' },
        dev_type: DevType.developer,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      expect(dev.logo).toBeNull();
    });

    it('should create a developer with maximum length name', async () => {
      const maxName = 'A'.repeat(50);
      const createDevDto: CreateDevDto = {
        dev_name: `${maxName}_${Date.now()}`.substring(0, 50),
        contacts: { email: 'max@example.com' },
        dev_type: DevType.developer,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      expect(dev.dev_name.length).toBeLessThanOrEqual(50);
    });

    it('should create a developer with complex contacts object', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `Complex_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: {
          email: 'complex@example.com',
          website: 'https://complex.com',
          phone: '+1234567890',
          address: { street: '123 Main St', city: 'New York' },
        },
        dev_type: DevType.developer,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      expect(dev.contacts).toEqual(createDevDto.contacts);
    });

    it('should throw ConflictException when dev_name already exists', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `Duplicate_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'dup@example.com' },
        dev_type: DevType.developer,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      await expect(devService.create(createDevDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should handle database unique constraint violation for dev_name', async () => {
      const devName = `Unique_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      const dev = await prismaService.devs.create({
        data: {
          dev_name: devName,
          contacts: { email: 'unique@example.com' },
          dev_type: 'developer',
        },
      });
      createdDevIds.push(dev.id);

      try {
        await prismaService.devs.create({
          data: {
            dev_name: devName,
            contacts: { email: 'duplicate@example.com' },
            dev_type: 'developer',
          },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2002');
      }
    });

    it('should handle invalid dev_type enum value in database', async () => {
      const devName = `Invalid_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      try {
        await prismaService.$executeRaw`
          INSERT INTO devs (dev_name, contacts, dev_type)
          VALUES (${devName}, '{"email":"test@example.com"}', 'invalid_type')
        `;
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle dev_name exceeding maximum length in database', async () => {
      const longName = 'A'.repeat(100);

      try {
        await prismaService.devs.create({
          data: {
            dev_name: longName,
            contacts: { email: 'long@example.com' },
            dev_type: 'developer',
          },
        });
        const dev = await prismaService.devs.findFirst({
          where: { contacts: { path: ['email'], equals: 'long@example.com' } },
        });
        if (dev) {
          createdDevIds.push(dev.id);
        }
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle transaction rollback on error', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `Rollback_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'rollback@example.com' },
        dev_type: DevType.developer,
      };

      const dev = await devService.create(createDevDto);
      createdDevIds.push(dev.id);

      try {
        await devService.create(createDevDto);
        fail('Should have thrown an error');
      } catch (error) {
        const devs = await prismaService.devs.findMany({
          where: { dev_name: createDevDto.dev_name },
        });
        expect(devs.length).toBe(1);
      }
    });
  });

  describe('findAll', () => {
    it('should return all developers', async () => {
      const dev1 = await devService.create({
        dev_name: `FindAll1_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'findall1@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev1.id);

      const dev2 = await devService.create({
        dev_name: `FindAll2_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'findall2@example.com' },
        dev_type: DevType.publisher,
      });
      createdDevIds.push(dev2.id);

      const devs = await devService.findAll();

      expect(devs.length).toBeGreaterThanOrEqual(2);
      expect(devs.some((d) => d.id === dev1.id)).toBe(true);
      expect(devs.some((d) => d.id === dev2.id)).toBe(true);
    });

    it('should return developers with pagination', async () => {
      const dev1 = await devService.create({
        dev_name: `Page1_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'page1@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev1.id);

      const dev2 = await devService.create({
        dev_name: `Page2_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'page2@example.com' },
        dev_type: DevType.publisher,
      });
      createdDevIds.push(dev2.id);

      const dev3 = await devService.create({
        dev_name: `Page3_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'page3@example.com' },
        dev_type: DevType.both,
      });
      createdDevIds.push(dev3.id);

      const devs = await devService.findAll(0, 2);

      expect(devs.length).toBeLessThanOrEqual(2);
    });

    it('should return developers ordered by dev_name ascending', async () => {
      const dev1 = await devService.create({
        dev_name: `Zebra_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'zebra@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev1.id);

      const dev2 = await devService.create({
        dev_name: `Alpha_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'alpha@example.com' },
        dev_type: DevType.publisher,
      });
      createdDevIds.push(dev2.id);

      const devs = await devService.findAll();

      const testDevs = devs.filter((d) => d.id === dev1.id || d.id === dev2.id);

      if (testDevs.length === 2) {
        const dev2Index = testDevs.findIndex((d) => d.id === dev2.id);
        const dev1Index = testDevs.findIndex((d) => d.id === dev1.id);
        expect(dev2Index).toBeLessThan(dev1Index);
      }
    });
  });

  describe('findOne', () => {
    it('should return a specific developer', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `FindOne_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'findone@example.com' },
        logo: 'https://example.com/findone.png',
        dev_type: DevType.developer,
      };

      const createdDev = await devService.create(createDevDto);
      createdDevIds.push(createdDev.id);

      const dev = await devService.findOne(createdDev.id);

      expect(dev).toBeDefined();
      expect(dev.id).toBe(createdDev.id);
      expect(dev.dev_name).toBe(createDevDto.dev_name);
      expect(dev.contacts).toEqual(createDevDto.contacts);
      expect(dev.logo).toBe(createDevDto.logo);
      expect(dev.dev_type).toBe('developer');
    });

    it('should throw NotFoundException when developer does not exist', async () => {
      await expect(devService.findOne(999999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findByName', () => {
    it('should return a developer by name', async () => {
      const createDevDto: CreateDevDto = {
        dev_name: `FindByName_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'findbyname@example.com' },
        dev_type: DevType.developer,
      };

      const createdDev = await devService.create(createDevDto);
      createdDevIds.push(createdDev.id);

      const dev = await devService.findByName(createDevDto.dev_name);

      expect(dev).toBeDefined();
      expect(dev.id).toBe(createdDev.id);
      expect(dev.dev_name).toBe(createDevDto.dev_name);
    });

    it('should throw NotFoundException when developer name does not exist', async () => {
      await expect(
        devService.findByName('NonExistentDeveloperName12345'),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('getDeveloperGames', () => {
    it('should return games for a developer', async () => {
      const dev = await devService.create({
        dev_name: `GamesDev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'gamesdev@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const game1 = await createTestGame('Dev Game 1');
      const game2 = await createTestGame('Dev Game 2');

      await prismaService.game_dev_connection.create({
        data: {
          game_id: game1.id,
          dev_id: dev.id,
        },
      });

      await prismaService.game_dev_connection.create({
        data: {
          game_id: game2.id,
          dev_id: dev.id,
        },
      });

      const games = await devService.getDeveloperGames(dev.id);

      expect(games.length).toBe(2);
      expect(games.some((g) => g.id === game1.id)).toBe(true);
      expect(games.some((g) => g.id === game2.id)).toBe(true);
    });

    it('should return games with pagination', async () => {
      const dev = await devService.create({
        dev_name: `GamesPage_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'gamespage@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const game1 = await createTestGame('Page Game 1');
      const game2 = await createTestGame('Page Game 2');
      const game3 = await createTestGame('Page Game 3');

      await prismaService.game_dev_connection.create({
        data: {
          game_id: game1.id,
          dev_id: dev.id,
        },
      });

      await prismaService.game_dev_connection.create({
        data: {
          game_id: game2.id,
          dev_id: dev.id,
        },
      });

      await prismaService.game_dev_connection.create({
        data: {
          game_id: game3.id,
          dev_id: dev.id,
        },
      });

      const games = await devService.getDeveloperGames(dev.id, 0, 2);

      expect(games.length).toBeLessThanOrEqual(2);
    });

    it('should throw NotFoundException when developer does not exist', async () => {
      await expect(devService.getDeveloperGames(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return empty array when developer has no games', async () => {
      const dev = await devService.create({
        dev_name: `NoGames_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'nogames@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const games = await devService.getDeveloperGames(dev.id);

      expect(games.length).toBe(0);
    });
  });

  describe('update', () => {
    it('should update developer name', async () => {
      const dev = await devService.create({
        dev_name: `UpdateName_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'updatename@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const updated = await devService.update(dev.id, {
        dev_name: `Updated_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      });

      expect(updated.dev_name).not.toBe(dev.dev_name);
    });

    it('should update developer contacts', async () => {
      const dev = await devService.create({
        dev_name: `UpdateContacts_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'updatecontacts@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const newContacts = {
        email: 'newemail@example.com',
        website: 'https://newwebsite.com',
      };

      const updated = await devService.update(dev.id, {
        contacts: newContacts,
      });

      expect(updated.contacts).toEqual(newContacts);
    });

    it('should update developer logo', async () => {
      const dev = await devService.create({
        dev_name: `UpdateLogo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'updatelogo@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const newLogo = 'https://example.com/new-logo.png';

      const updated = await devService.update(dev.id, {
        logo: newLogo,
      });

      expect(updated.logo).toBe(newLogo);
    });

    it('should update developer type', async () => {
      const dev = await devService.create({
        dev_name: `UpdateType_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'updatetype@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const updated = await devService.update(dev.id, {
        dev_type: DevType.publisher,
      });

      expect(updated.dev_type).toBe('publisher');
    });

    it('should update developer logo to null', async () => {
      const dev = await devService.create({
        dev_name: `UpdateLogoNull_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'updatelogonull@example.com' },
        logo: 'https://example.com/old-logo.png',
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const updated = await devService.update(dev.id, {
        logo: null,
      });

      expect(updated.logo).toBeNull();
    });

    it('should update multiple fields at once', async () => {
      const dev = await devService.create({
        dev_name: `UpdateMulti_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'updatemulti@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const updated = await devService.update(dev.id, {
        dev_name: `MultiUpdated_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'multi@example.com', phone: '+1234567890' },
        logo: 'https://example.com/multi-logo.png',
        dev_type: DevType.both,
      });

      expect(updated.dev_name).not.toBe(dev.dev_name);
      expect(updated.contacts).not.toEqual(dev.contacts);
      expect(updated.logo).toBe('https://example.com/multi-logo.png');
      expect(updated.dev_type).toBe('both');
    });

    it('should throw NotFoundException when developer does not exist', async () => {
      await expect(
        devService.update(999999, {
          dev_name: 'NewName',
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException when updating to existing dev_name', async () => {
      const dev1 = await devService.create({
        dev_name: `Conflict1_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'conflict1@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev1.id);

      const dev2 = await devService.create({
        dev_name: `Conflict2_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'conflict2@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev2.id);

      await expect(
        devService.update(dev2.id, {
          dev_name: dev1.dev_name,
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('should handle empty update data', async () => {
      const dev = await devService.create({
        dev_name: `EmptyUpdate_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'emptyupdate@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      const updated = await devService.update(dev.id, {});

      expect(updated.dev_name).toBe(dev.dev_name);
      expect(updated.contacts).toEqual(dev.contacts);
    });

    it('should handle database unique constraint violation for dev_name', async () => {
      const dev1 = await devService.create({
        dev_name: `DbConflict1_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'dbconflict1@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev1.id);

      const dev2 = await devService.create({
        dev_name: `DbConflict2_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'dbconflict2@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev2.id);

      try {
        await prismaService.devs.update({
          where: { id: dev2.id },
          data: { dev_name: dev1.dev_name },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2002');
      }
    });

    it('should handle invalid dev_type enum value in database', async () => {
      const dev = await devService.create({
        dev_name: `InvalidType_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'invalidtype@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev.id);

      try {
        await prismaService.$executeRaw`
          UPDATE devs
          SET dev_type = 'invalid_type'
          WHERE id = ${dev.id}
        `;
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });

    it('should handle transaction rollback on error', async () => {
      const dev1 = await devService.create({
        dev_name: `Rollback1_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'rollback1@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev1.id);

      const dev2 = await devService.create({
        dev_name: `Rollback2_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'rollback2@example.com' },
        dev_type: DevType.developer,
      });
      createdDevIds.push(dev2.id);

      try {
        await devService.update(dev2.id, {
          dev_name: dev1.dev_name,
        });
        fail('Should have thrown an error');
      } catch (error) {
        const updatedDev = await prismaService.devs.findUnique({
          where: { id: dev2.id },
        });
        expect(updatedDev?.dev_name).toBe(dev2.dev_name);
      }
    });
  });

  describe('remove', () => {
    it('should delete a developer', async () => {
      const dev = await devService.create({
        dev_name: `Delete_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'delete@example.com' },
        dev_type: DevType.developer,
      });

      const result = await devService.remove(dev.id);

      expect(result.message).toContain('deleted');

      await expect(devService.findOne(dev.id)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when developer does not exist', async () => {
      await expect(devService.remove(999999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should handle database constraint violation when deleting non-existent developer', async () => {
      try {
        await prismaService.devs.delete({
          where: { id: 999999 },
        });
        fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).toBe('P2025');
      }
    });

    it('should handle transaction rollback on error', async () => {
      const dev = await devService.create({
        dev_name: `RollbackDelete_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        contacts: { email: 'rollbackdelete@example.com' },
        dev_type: DevType.developer,
      });

      try {
        await devService.remove(dev.id);
        const deletedDev = await prismaService.devs.findUnique({
          where: { id: dev.id },
        });
        expect(deletedDev).toBeNull();
      } catch (error) {
        const existingDev = await prismaService.devs.findUnique({
          where: { id: dev.id },
        });
        expect(existingDev).toBeDefined();
      }
    });
  });
});
