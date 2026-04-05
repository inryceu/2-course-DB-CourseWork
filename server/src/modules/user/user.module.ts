import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from '../../application/commands/create-user.handler';
import { UnlockAchievementCommandHandler } from '../../application/commands/unlock-achievement.handler';
import {
  GetUserByIdQueryHandler,
  GetUserListQueryHandler,
} from '../../application/commands/user.query-handlers';
import { UserFactory } from '../../domain/factories/user.factory';
import { PrismaUserRepository } from '../../infrastructure/repositories/prisma-user.repository';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';
import { PrismaService } from '../../../src/prisma/prisma.service';
import {
  USER_REGISTRATION_SIDE_EFFECTS_TOKEN,
} from '../../application/contracts/user-registration-side-effects.interface';
import { UserRegistrationSideEffectsService } from '../user-registration-side-effects/user-registration-side-effects.service';
import { UserRegisteredEventHandler } from '../user-registration-side-effects/user-registered.event-handler';

const CommandHandlers = [
  CreateUserCommandHandler,
  UnlockAchievementCommandHandler,
];

const QueryHandlers = [GetUserByIdQueryHandler, GetUserListQueryHandler];
const EventHandlers = [UserRegisteredEventHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: PrismaUserRepository,
    },
    {
      provide: USER_REGISTRATION_SIDE_EFFECTS_TOKEN,
      useClass: UserRegistrationSideEffectsService,
    },
    {
      provide: UserFactory,
      useFactory: (userRepo: IUserRepository) => {
        return new UserFactory(userRepo);
      },
      inject: [USER_REPOSITORY_TOKEN],
    },
    PrismaService,
  ],
  exports: [],
})
export class UserModule {}
