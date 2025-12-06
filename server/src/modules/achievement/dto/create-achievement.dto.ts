import { IsInt, IsString, Length } from 'class-validator';

export class CreateAchievementDto {
  @IsInt()
  game_id: number;

  @IsString()
  @Length(1, 64)
  title: string;

  @IsString()
  @Length(1, 2083)
  icon: string;
}

