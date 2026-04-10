import { Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../domain/repositories/user.repository.interface';
import { UserNotFoundError } from '../../domain/errors/user-not-found.error';

@Injectable()
export class UnlockAchievementUseCase {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute(userId: number, achievementId: number): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotFoundError(`User with ID ${userId} not found`);
    }

    user.unlockAchievement(achievementId);

    await this.userRepository.addAchievement(userId, achievementId);
  }
}
