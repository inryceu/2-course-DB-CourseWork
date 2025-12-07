import {
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
  IsOptional,
  IsObject,
  IsArray,
  ArrayMinSize,
  Length,
  Min,
  Max,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GameDataDto {
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

export class AchievementDataDto {
  @ApiProperty({
    description: 'Achievement title',
    example: 'First Steps',
    minLength: 1,
    maxLength: 64,
  })
  @IsString()
  @Length(1, 64)
  title: string;

  @ApiProperty({
    description: 'URL to achievement icon',
    example: 'https://example.com/achievement-icon.png',
    maxLength: 2083,
  })
  @IsString()
  @Length(1, 2083)
  icon: string;
}

export class NewsDataDto {
  @ApiProperty({
    description: 'News title',
    example: 'Game Launch Announcement',
    minLength: 1,
    maxLength: 200,
  })
  @IsString()
  @Length(1, 200)
  title: string;

  @ApiProperty({
    description: 'News content',
    example: 'We are excited to announce the launch of our new game...',
  })
  @IsString()
  content: string;
}

export class CreateCompleteGameDto {
  @ApiProperty({
    description: 'Game data',
    type: GameDataDto,
  })
  @ValidateNested()
  @Type(() => GameDataDto)
  game: GameDataDto;

  @ApiProperty({
    description: 'Array of tag IDs to associate with the game',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  tagIds: number[];

  @ApiProperty({
    description: 'Array of developer IDs to associate with the game',
    example: [1, 2],
    type: [Number],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  devIds: number[];

  @ApiProperty({
    description: 'Array of achievements to create for the game',
    type: [AchievementDataDto],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AchievementDataDto)
  achievements: AchievementDataDto[];

  @ApiProperty({
    description: 'Initial news article for the game',
    type: NewsDataDto,
  })
  @ValidateNested()
  @Type(() => NewsDataDto)
  initialNews: NewsDataDto;
}

