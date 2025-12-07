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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty({
    description: 'Title of the game',
    example: 'The Witcher 3',
    minLength: 1,
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  title: string;

  @ApiPropertyOptional({
    description: 'Price of the game',
    example: 29.99,
    minimum: 0,
    maximum: 9999.99,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  price?: number;

  @ApiProperty({
    description: 'Release date of the game',
    example: '2023-05-19',
    type: String,
    format: 'date',
  })
  @IsDateString()
  release_date: string;

  @ApiProperty({
    description: 'Age rating of the game',
    example: 'M',
    minLength: 1,
    maxLength: 3,
  })
  @IsString()
  @Length(1, 3)
  age_rating: string;

  @ApiProperty({
    description: 'URL to game cover image',
    example: 'https://example.com/game-cover.jpg',
    maxLength: 2083,
  })
  @IsString()
  @Length(1, 2083)
  cover: string;

  @ApiPropertyOptional({
    description: 'Game description',
    example: 'An epic role-playing game...',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'System requirements as JSON object',
    example: { minRAM: '8GB', minCPU: 'Intel i5' },
    type: Object,
  })
  @IsObject()
  system_requirements: object;

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
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  is_multiplayer?: boolean;
}
