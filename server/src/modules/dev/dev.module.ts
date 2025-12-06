import { Module } from '@nestjs/common';
import { DevService } from './dev.service';
import { DevController } from './dev.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [DevController],
  providers: [DevService, PrismaService],
  exports: [DevService],
})
export class DevModule {}

