export class UserReadModel {
  id: number;
  username: string;
  email: string;
  age: number;
  region: string;
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
  achievementCount: number;
}

export class UserListItemReadModel {
  id: number;
  username: string;
  region: string;
  avatar?: string;
  achievementCount: number;
}
