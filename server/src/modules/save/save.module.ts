import { Module } from '@nestjs/common';
import { SaveService } from './save.service';
import { SaveController } from './save.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SaveController],
  providers: [SaveService, PrismaService],
  exports: [SaveService],
})
export class SaveModule {}
