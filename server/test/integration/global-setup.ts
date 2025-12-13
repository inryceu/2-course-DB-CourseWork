import { PrismaClient } from '@prisma/client';

export default async () => {
  const testDbUrl = process.env.DATABASE_URL_TEST;

  if (!testDbUrl) {
    throw new Error(
      'DATABASE_URL_TEST must be set to prevent tests from running against production database',
    );
  }

  process.env.DATABASE_URL = testDbUrl;

  console.log(
    `Connecting to test database: ${testDbUrl.replace(/:[^:@]+@/, ':****@')}`,
  );

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: testDbUrl,
      },
    },
  });

  try {
    await prisma.$connect();
    console.log('Test database connection established');
  } catch (error) {
    console.error('Failed to connect to test database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
