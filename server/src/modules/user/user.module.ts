import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

import { CreateUserUseCase } from '../../application/use-cases/reate-user.use-case';
import { UnlockAchievementUseCase } from '../../application/use-cases/unlock-achievement.use-case';

import { UserFactory } from '../../domain/factories/user.factory';

import { PrismaUserRepository } from '../../infrastructure/repositories/prisma-user.repository';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';

import { PrismaService } from '../../../src/prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: PrismaUserRepository,
    },
    {
      provide: UserFactory,
      useFactory: (userRepo: IUserRepository) => {
        return new UserFactory(userRepo);
      },
      inject: [USER_REPOSITORY_TOKEN],
    },

    PrismaService,

    CreateUserUseCase,
    UnlockAchievementUseCase,
  ],
  exports: [CreateUserUseCase, UnlockAchievementUseCase],
})
export class UserModule {}
