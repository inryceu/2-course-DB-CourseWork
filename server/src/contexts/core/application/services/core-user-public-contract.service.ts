import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CoreCreateUserRequestDto,
  CoreCreateUserResponseDto,
  CoreUserListItemReadDto,
  CoreUserReadDto,
  ICoreUserPublicContract,
} from '../../contracts/api/core-user-public-contract';
import { CreateUserCommand } from '../commands/create-user.command';
import {
  GetUserByIdQuery,
  GetUserListQuery,
} from '../commands/user.queries';

@Injectable()
export class CoreUserPublicContractService implements ICoreUserPublicContract {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createUser(
    request: CoreCreateUserRequestDto,
  ): Promise<CoreCreateUserResponseDto> {
    const userId = await this.commandBus.execute(
      new CreateUserCommand(
        request.username,
        request.email,
        request.password,
        request.age,
        request.region,
        request.avatar,
      ),
    );

    return { id: userId as number };
  }

  async getUserById(userId: number): Promise<CoreUserReadDto> {
    return this.queryBus.execute(new GetUserByIdQuery(userId));
  }

  async getUsers(
    page = 1,
    limit = 20,
    searchTerm?: string,
  ): Promise<CoreUserListItemReadDto[]> {
    return this.queryBus.execute(new GetUserListQuery(page, limit, searchTerm));
  }
}
