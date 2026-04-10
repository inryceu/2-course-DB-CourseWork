import { User } from '../entities/user.entity';
import { Email } from '../value-objects/email.vo';
import { Username } from '../value-objects/username.vo';
import { UserAge } from '../value-objects/user-age.vo';
import { IUserRepository } from '../repositories/user.repository.interface';
import { UserAlreadyExistsError } from '../errors/user-already-exists.error';

export class UserFactory {
  constructor(private readonly userRepository: IUserRepository) {}

  public async create(
    rawUsername: string,
    rawEmail: string,
    passwordHash: string,
    rawAge: number,
    region: string,
    avatar?: string,
  ): Promise<User> {
    const email = new Email(rawEmail);
    const username = new Username(rawUsername);
    const age = new UserAge(rawAge);

    const existingEmail = await this.userRepository.findByEmail(email.value);
    if (existingEmail) {
      throw new UserAlreadyExistsError('email', email.value);
    }

    const existingUsername = await this.userRepository.findByUsername(
      username.value,
    );
    if (existingUsername) {
      throw new UserAlreadyExistsError('username', username.value);
    }

    return new User({
      username,
      email,
      passwordHash,
      age,
      region,
      avatar,
      createdAt: new Date(),
    });
  }
}
