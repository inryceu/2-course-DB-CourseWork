export class UserRegisteredEvent {
  constructor(
    public readonly userId: number,
    public readonly username: string,
    public readonly email: string,
    public readonly region: string,
    public readonly occurredAt: string,
  ) {}
}
