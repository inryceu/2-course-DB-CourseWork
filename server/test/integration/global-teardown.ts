import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_TEST,
    },
  },
});

export default async () => {
  try {
    await prisma.$disconnect();
    console.log('Test database connection closed');
  } catch (error) {
    console.error('Error closing test database connection:', error);
  }
};
