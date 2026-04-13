export class UnlockAchievementCommand {
  constructor(
    public readonly userId: number,
    public readonly achievementId: number,
  ) {}
}
