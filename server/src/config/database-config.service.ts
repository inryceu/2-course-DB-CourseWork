import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfigService {
  getProdURL(): string {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL must be set in environment variables');
    }
    return process.env.DATABASE_URL;
  }

  getTestURL(): string {
    if (!process.env.DATABASE_URL_TEST) {
      throw new Error('DATABASE_URL_TEST must be set in environment variables');
    }
    return process.env.DATABASE_URL_TEST;
  }
}
