import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from './create-user.command';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';
import { UserFactory } from '../../domain/factories/user.factory';
import * as bcrypt from 'bcrypt';

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

    return savedUser.id!;
  }
}
