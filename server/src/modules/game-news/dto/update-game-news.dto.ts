import { IsInt, IsString, IsOptional, Length, IsDateString } from 'class-validator';

export class UpdateGameNewsDto {
  @IsOptional()
  @IsInt()
  game_id?: number;

  @IsOptional()
  @IsString()
  @Length(1, 200)
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsDateString()
  published_at?: string;
}

