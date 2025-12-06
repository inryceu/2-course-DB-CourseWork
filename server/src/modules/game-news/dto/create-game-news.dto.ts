import { IsInt, IsString, Length, IsOptional, IsDateString } from 'class-validator';

export class CreateGameNewsDto {
  @IsInt()
  game_id: number;

  @IsString()
  @Length(1, 200)
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsDateString()
  published_at?: string;
}

