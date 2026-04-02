export interface CreateUserCommand {
  username: string;
  email: string;
  passwordRaw: string;
  age: number;
  region: string;
  avatar?: string;
}
