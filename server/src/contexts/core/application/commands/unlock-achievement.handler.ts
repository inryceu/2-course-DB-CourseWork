import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject, Injectable } from '@nestjs/common';
import { UnlockAchievementCommand } from './unlock-achievement.command';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';
import { UserNotFoundError } from '../../domain/errors/user-not-found.error';

@CommandHandler(UnlockAchievementCommand)
@Injectable()
export class UnlockAchievementCommandHandler implements ICommandHandler<
  UnlockAchievementCommand,
  void
> {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(command: UnlockAchievementCommand): Promise<void> {
    const user = await this.userRepository.findById(command.userId);

    if (!user) {
      throw new UserNotFoundError(`User with ID ${command.userId} not found`);
    }

    user.unlockAchievement(command.achievementId);
    await this.userRepository.addAchievement(
      command.userId,
      command.achievementId,
    );
  }
}
