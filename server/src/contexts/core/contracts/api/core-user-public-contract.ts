export interface CoreCreateUserRequestDto {
  username: string;
  email: string;
  password: string;
  age: number;
  region: string;
  avatar?: string;
}

export interface CoreCreateUserResponseDto {
  id: number;
}

export interface CoreUserReadDto {
  id: number;
  username: string;
  email: string;
  age: number;
  region: string;
  avatar?: string;
  createdAt?: Date;
  lastLogin?: Date;
  achievementCount: number;
}

export interface CoreUserListItemReadDto {
  id: number;
  username: string;
  region: string;
  avatar?: string;
  achievementCount: number;
}

export interface ICoreUserPublicContract {
  createUser(request: CoreCreateUserRequestDto): Promise<CoreCreateUserResponseDto>;
  getUserById(userId: number): Promise<CoreUserReadDto>;
  getUsers(
    page?: number,
    limit?: number,
    searchTerm?: string,
  ): Promise<CoreUserListItemReadDto[]>;
}

export const CORE_USER_PUBLIC_CONTRACT_TOKEN = Symbol(
  'CORE_USER_PUBLIC_CONTRACT_TOKEN',
);
