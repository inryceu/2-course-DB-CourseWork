import { IsInt, IsEnum, IsOptional } from 'class-validator';

export enum FrStatus {
  pending = 'pending',
  accepted = 'accepted',
  blocked = 'blocked',
}

export class CreateFriendDto {
  @IsInt()
  user_id: number;

  @IsInt()
  friend_id: number;

  @IsOptional()
  @IsEnum(FrStatus)
  status?: FrStatus;
}

