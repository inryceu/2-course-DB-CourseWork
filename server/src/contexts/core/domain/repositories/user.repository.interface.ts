import { User } from '../entities/user.entity';

export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY_TOKEN');

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(id: number): Promise<void>;
  addAchievement(userId: number, achievementId: number): Promise<void>;
  removeAchievement(userId: number, achievementId: number): Promise<void>;
}
