import { IsEnum, IsOptional } from 'class-validator';
import { FrStatus } from './create-friend.dto';

export class UpdateFriendDto {
  @IsOptional()
  @IsEnum(FrStatus)
  status?: FrStatus;
}

