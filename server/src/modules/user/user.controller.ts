import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  UseFilters,
  Catch,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUseCase } from '../../application/use-cases/reate-user.use-case';
import { UnlockAchievementUseCase } from '../../application/use-cases/unlock-achievement.use-case';

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
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly unlockAchievementUseCase: UnlockAchievementUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreateUser()
  async create(@Body() dto: CreateUserDto) {
    const result = await this.createUserUseCase.execute({
      username: dto.username,
      email: dto.email,
      passwordRaw: dto.password,
      age: dto.age,
      region: dto.region,
      avatar: dto.avatar,
    });
    return result;
  }

  @Post(':id/achievements/:achievementId')
  @HttpCode(HttpStatus.CREATED)
  @ApiUnlockAchievement()
  async unlockAchievement(
    @Param('id', ParseIntPipe) id: number,
    @Param('achievementId', ParseIntPipe) achievementId: number,
  ) {
    await this.unlockAchievementUseCase.execute(id, achievementId);
    return {
      message: `Achievement ${achievementId} unlocked for user ${id}`,
    };
  }
}
