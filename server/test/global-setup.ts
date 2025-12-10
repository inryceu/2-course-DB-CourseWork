import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_TEST || process.env.DATABASE_URL,
    },
  },
});

export default async () => {
  const testDbUrl = process.env.DATABASE_URL_TEST || process.env.DATABASE_URL;

  if (!testDbUrl) {
    throw new Error('DATABASE_URL_TEST or DATABASE_URL must be set');
  }

  console.log(
    `Connecting to test database: ${testDbUrl.replace(/:[^:@]+@/, ':****@')}`,
  );

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
