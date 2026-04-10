import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from '../../contexts/core/application/commands/create-user.handler';
import { UnlockAchievementCommandHandler } from '../../contexts/core/application/commands/unlock-achievement.handler';
import {
  GetUserByIdQueryHandler,
  GetUserListQueryHandler,
} from '../../contexts/core/application/commands/user.query-handlers';
import { UserFactory } from '../../contexts/core/domain/factories/user.factory';
import { PrismaUserRepository } from '../../contexts/core/infrastructure/repositories/prisma-user.repository';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../contexts/core/domain/repositories/user.repository.interface';
import { PrismaService } from '../../prisma/prisma.service';

const CommandHandlers = [
  CreateUserCommandHandler,
  UnlockAchievementCommandHandler,
];

const QueryHandlers = [GetUserByIdQueryHandler, GetUserListQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
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
  ],
  exports: [],
})
export class UserModule {}
