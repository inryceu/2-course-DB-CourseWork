import { Module } from '@nestjs/common';
import { ComplexQueriesService } from './complex-queries.service';
import { ComplexQueriesController } from './complex-queries.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ComplexQueriesController],
  providers: [ComplexQueriesService, PrismaService],
  exports: [ComplexQueriesService],
})
export class ComplexQueriesModule {}

