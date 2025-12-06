import { IsInt, IsString, IsOptional, Length } from 'class-validator';

export class UpdateAchievementDto {
  @IsOptional()
  @IsInt()
  game_id?: number;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  title?: string;

  @IsOptional()
  @IsString()
  @Length(1, 2083)
  icon?: string;
}

