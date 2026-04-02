import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  HttpCode,
  HttpStatus,
  UseFilters,
  Catch,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { UnlockAchievementCommand } from '../../application/commands/unlock-achievement.command';
import {
  GetUserByIdQuery,
  GetUserListQuery,
} from '../../application/commands/user.queries';
import {
  ApiUserController,
  ApiCreateUser,
  ApiUnlockAchievement,
} from './user.swagger';

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.name === 'UserAlreadyExistsError') {
      return response
        .status(HttpStatus.CONFLICT)
        .json({ message: exception.message });
    }
    if (exception.name === 'UserNotFoundError') {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ message: exception.message });
    }
    if (
      exception.name === 'InvalidArgumentError' ||
      exception.name === 'DomainError'
    ) {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: exception.message });
    }

    if (exception.getStatus && typeof exception.getStatus === 'function') {
      return response
        .status(exception.getStatus())
        .json(exception.getResponse());
    }

    console.error('Unhandled Exception:', exception);
    return response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}

@ApiUserController()
@Controller('users')
@UseFilters(new DomainExceptionFilter())
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreateUser()
  async create(@Body() dto: CreateUserDto): Promise<{ id: number }> {
    const command = new CreateUserCommand(
      dto.username,
      dto.email,
      dto.password,
      dto.age,
      dto.region,
      dto.avatar,
    );

    const userId = await this.commandBus.execute(command);
    return { id: userId };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const query = new GetUserByIdQuery(id);
    return this.queryBus.execute(query);
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    const query = new GetUserListQuery(page, limit, search);
    return this.queryBus.execute(query);
  }

  @Post(':id/achievements/:achievementId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiUnlockAchievement()
  async unlockAchievement(
    @Param('id', ParseIntPipe) id: number,
    @Param('achievementId', ParseIntPipe) achievementId: number,
  ): Promise<void> {
    const command = new UnlockAchievementCommand(id, achievementId);
    await this.commandBus.execute(command);
  }
}
