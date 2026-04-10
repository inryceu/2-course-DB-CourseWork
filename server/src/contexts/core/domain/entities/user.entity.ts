import { Email } from '../value-objects/email.vo';
import { Username } from '../value-objects/username.vo';
import { UserAge } from '../value-objects/user-age.vo';
import { InvalidArgumentError } from '../errors/invalid-argument.error';

export interface UserProps {
  id?: number;
  username: Username;
  email: Email;
  passwordHash: string;
  age: UserAge;
  region: string;
  avatar?: string;
  createdAt?: Date;
  lastLogin?: Date;
  unlockedAchievements?: number[];
}

export class User {
  private readonly _id?: number;
  private _username: Username;
  private _email: Email;
  private _passwordHash: string;
  private _age: UserAge;
  private _region: string;
  private _avatar?: string;
  private _createdAt: Date;
  private _lastLogin?: Date;
  private _unlockedAchievements: Set<number>;

  constructor(props: UserProps) {
    this._id = props.id;
    this._username = props.username;
    this._email = props.email;
    this._passwordHash = props.passwordHash;
    this._age = props.age;
    this._region = props.region;
    this._avatar = props.avatar;
    this._createdAt = props.createdAt || new Date();
    this._lastLogin = props.lastLogin;
    this._unlockedAchievements = new Set(props.unlockedAchievements || []);
  }

  get id(): number | undefined {
    return this._id;
  }
  get username(): Username {
    return this._username;
  }
  get email(): Email {
    return this._email;
  }
  get passwordHash(): string {
    return this._passwordHash;
  }
  get age(): UserAge {
    return this._age;
  }
  get region(): string {
    return this._region;
  }
  get avatar(): string | undefined {
    return this._avatar;
  }
  get unlockedAchievements(): number[] {
    return Array.from(this._unlockedAchievements);
  }

  public changeEmail(newEmail: Email): void {
    this._email = newEmail;
  }

  public updateProfile(
    username?: Username,
    age?: UserAge,
    region?: string,
    avatar?: string,
  ): void {
    if (username) this._username = username;
    if (age) this._age = age;
    if (region) this._region = region;
    if (avatar !== undefined) this._avatar = avatar;
  }

  public unlockAchievement(achievementId: number): void {
    if (this._unlockedAchievements.has(achievementId)) {
      throw new InvalidArgumentError(
        `User has already unlocked achievement ${achievementId}`,
      );
    }
    this._unlockedAchievements.add(achievementId);
  }

  public removeAchievement(achievementId: number): void {
    if (!this._unlockedAchievements.has(achievementId)) {
      throw new InvalidArgumentError(
        `User has not unlocked achievement ${achievementId}`,
      );
    }
    this._unlockedAchievements.delete(achievementId);
  }
}
