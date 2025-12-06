import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService, PrismaService],
  exports: [AchievementService],
})
export class AchievementModule {}

