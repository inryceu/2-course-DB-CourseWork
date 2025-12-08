import { Module } from '@nestjs/common';
import { AnalyticalQueriesService } from './analytical-queries.service';
import { AnalyticalQueriesController } from './analytical-queries.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AnalyticalQueriesController],
  providers: [AnalyticalQueriesService, PrismaService],
  exports: [AnalyticalQueriesService],
})
export class AnalyticalQueriesModule {}

