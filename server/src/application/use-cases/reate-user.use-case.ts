import { Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';
import { UserFactory } from '../../domain/factories/user.factory';
import { CreateUserCommand } from '../commands/create-user.command';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
    private readonly userFactory: UserFactory,
  ) {}

  public async execute(command: CreateUserCommand): Promise<any> {
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

    return {
      id: savedUser.id,
      username: savedUser.username.value,
      email: savedUser.email.value,
      age: savedUser.age.value,
      region: savedUser.region,
      avatar: savedUser.avatar,
    };
  }
}
