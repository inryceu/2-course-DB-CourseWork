import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from './create-user.command';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';
import { UserFactory } from '../../domain/factories/user.factory';
import * as bcrypt from 'bcrypt';
import {
  UserRegisteredIntegrationEvent,
} from '../../contexts/core/contracts/events/user-registered.integration-event';

@CommandHandler(CreateUserCommand)
@Injectable()
export class CreateUserCommandHandler implements ICommandHandler<
  CreateUserCommand,
  number
> {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
    private readonly userFactory: UserFactory,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand): Promise<number> {
    const passwordHash = await bcrypt.hash(command.passwordRaw, 10);

    const user = await this.userFactory.create(
      command.username,
      command.email,
      passwordHash,
      command.age,
      command.region,
      command.avatar,
    );

    const savedUser = await this.userRepository.save(user);

    const payload = {
      userId: savedUser.id!,
      username: savedUser.username.value,
      email: savedUser.email.value,
      region: savedUser.region,
      occurredAt: new Date().toISOString(),
    };

    this.eventBus.publish(
      new UserRegisteredIntegrationEvent(
        payload.userId,
        payload.username,
        payload.email,
        payload.region,
        payload.occurredAt,
      ),
    );

    return savedUser.id!;
  }
}
