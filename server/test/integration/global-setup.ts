import * as dotenv from 'dotenv';
dotenv.config({ path: process.env.DATABASE_URL_TEST ? undefined : './.env' });

const DATABASE_URL = process.env.DATABASE_URL_TEST || process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL_TEST must be set to prevent tests from running against production database');
}
