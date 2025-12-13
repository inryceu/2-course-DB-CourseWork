import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { DatabaseConfigService } from '../config/database-config.service';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly databaseConfig: DatabaseConfigService) {
    const isTestEnvironment =
      process.env.NODE_ENV === 'test' ||
      process.env.JEST_WORKER_ID !== undefined ||
      process.argv.some((arg) => arg.includes('jest')) ||
      process.argv.some((arg) => arg.includes('test'));

    const dbUrl = isTestEnvironment
      ? databaseConfig.getTestURL()
      : databaseConfig.getProdURL();

    super({
      datasources: {
        db: {
          url: dbUrl,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async executeTransaction<T>(
    callback: (tx: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    return this.$transaction(callback, {
      maxWait: 5000,
      timeout: 10000,
    });
  }
}
