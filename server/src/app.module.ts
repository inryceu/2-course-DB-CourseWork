import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { GameModule } from './modules/game/game.module';
import { LibraryModule } from './modules/library/library.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, GameModule, LibraryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
