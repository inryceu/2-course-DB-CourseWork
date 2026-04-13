import { User } from '../../domain/entities/user.entity';
import { Email } from '../../domain/value-objects/email.vo';
import { Username } from '../../domain/value-objects/username.vo';
import { UserAge } from '../../domain/value-objects/user-age.vo';

interface PrismaUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  age: number;
  region: string;
  avatar: string | null;
  created_at: Date;
  last_login: Date | null;
}

export class UserMapper {
  public static toDomain(raw: PrismaUser, achievementIds: number[] = []): User {
    return new User({
      id: raw.id,
      username: new Username(raw.username),
      email: new Email(raw.email),
      passwordHash: raw.password_hash,
      age: new UserAge(raw.age),
      region: raw.region,
      avatar: raw.avatar || undefined,
      createdAt: raw.created_at,
      lastLogin: raw.last_login || undefined,
      unlockedAchievements: achievementIds,
    });
  }

  public static toPersistence(user: User): any {
    return {
      username: user.username.value,
      email: user.email.value,
      password_hash: user.passwordHash,
      age: user.age.value,
      region: user.region,
      avatar: user.avatar || null,
    };
  }
}
