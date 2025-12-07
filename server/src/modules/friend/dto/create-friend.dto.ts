import { IsInt, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum FrStatus {
  pending = 'pending',
  accepted = 'accepted',
  blocked = 'blocked',
}

export class CreateFriendDto {
  @ApiProperty({
    description: 'User ID who is sending the friend request',
    example: 1,
    type: Number,
  })
  @IsInt()
  user_id: number;

  @ApiProperty({
    description: 'User ID who will receive the friend request',
    example: 2,
    type: Number,
  })
  @IsInt()
  friend_id: number;

  @ApiPropertyOptional({
    description: 'Friendship status',
    enum: FrStatus,
    example: FrStatus.pending,
    default: FrStatus.pending,
  })
  @IsOptional()
  @IsEnum(FrStatus)
  status?: FrStatus;
}
