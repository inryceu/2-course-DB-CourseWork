export class CreateUserCommand {
  constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly passwordRaw: string,
    public readonly age: number,
    public readonly region: string,
    public readonly avatar?: string,
  ) {}
}

export interface CreateUserCommandInterface {
  username: string;
  email: string;
  passwordRaw: string;
  age: number;
  region: string;
  avatar?: string;
}
