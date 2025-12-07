import { Module } from '@nestjs/common';
import { GameNewsService } from './game-news.service';
import { GameNewsController } from './game-news.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [GameNewsController],
  providers: [GameNewsService, PrismaService],
  exports: [GameNewsService],
})
export class GameNewsModule {}
