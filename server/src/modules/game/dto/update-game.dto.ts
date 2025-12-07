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
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGameDto {
  @ApiPropertyOptional({
    description: 'Title of the game',
    example: 'The Witcher 3: Enhanced Edition',
    minLength: 1,
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  title?: string;

  @ApiPropertyOptional({
    description: 'Price of the game',
    example: 24.99,
    minimum: 0,
    maximum: 9999.99,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  price?: number;

  @ApiPropertyOptional({
    description: 'Release date of the game',
    example: '2023-05-19',
    type: String,
    format: 'date',
  })
  @IsOptional()
  @IsDateString()
  release_date?: string;

  @ApiPropertyOptional({
    description: 'Age rating of the game',
    example: 'M',
    minLength: 1,
    maxLength: 3,
  })
  @IsOptional()
  @IsString()
  @Length(1, 3)
  age_rating?: string;

  @ApiPropertyOptional({
    description: 'URL to game cover image',
    example: 'https://example.com/new-cover.jpg',
    maxLength: 2083,
  })
  @IsOptional()
  @IsString()
  @Length(1, 2083)
  cover?: string;

  @ApiPropertyOptional({
    description: 'Game description',
    example: 'An epic role-playing game with enhanced graphics...',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'System requirements as JSON object',
    example: { minRAM: '16GB', minCPU: 'Intel i7' },
    type: Object,
  })
  @IsOptional()
  @IsObject()
  system_requirements?: object;

  @ApiPropertyOptional({
    description: 'ID of the base game (for DLCs)',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  base_game_id?: number;

  @ApiPropertyOptional({
    description: 'Whether the game supports multiplayer',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  is_multiplayer?: boolean;
}
