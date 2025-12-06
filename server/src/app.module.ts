import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { GameModule } from './modules/game/game.module';
import { LibraryModule } from './modules/library/library.module';
import { ReviewModule } from './modules/review/review.module';
import { TagModule } from './modules/tag/tag.module';
import { DevModule } from './modules/dev/dev.module';
import { AchievementModule } from './modules/achievement/achievement.module';
import { EventModule } from './modules/event/event.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, GameModule, LibraryModule, ReviewModule, TagModule, DevModule, AchievementModule, EventModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
