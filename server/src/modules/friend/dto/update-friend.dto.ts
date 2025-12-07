import { IsEnum, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { FrStatus } from './create-friend.dto';

export class UpdateFriendDto {
  @ApiPropertyOptional({
    description: 'Friendship status',
    enum: FrStatus,
    example: FrStatus.accepted,
  })
  @IsOptional()
  @IsEnum(FrStatus)
  status?: FrStatus;
}
