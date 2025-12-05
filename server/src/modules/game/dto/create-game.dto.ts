import {
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
  IsOptional,
  IsObject,
  Length,
  Min,
  Max,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @Length(1, 50)
  title: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  price?: number;

  @IsDateString()
  release_date: string;

  @IsString()
  @Length(1, 3)
  age_rating: string;

  @IsString()
  @Length(1, 2083)
  cover: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsObject()
  system_requirements: object;

  @IsOptional()
  @IsNumber()
  base_game_id?: number;

  @IsOptional()
  @IsBoolean()
  is_multiplayer?: boolean;
}
