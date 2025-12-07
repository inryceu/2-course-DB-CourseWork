import {
  IsInt,
  IsString,
  IsOptional,
  Length,
  IsDateString,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGameNewsDto {
  @ApiPropertyOptional({
    description: 'Game ID this news belongs to',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  game_id?: number;

  @ApiPropertyOptional({
    description: 'Title of the news article',
    example: 'Updated News Title',
    minLength: 1,
    maxLength: 200,
  })
  @IsOptional()
  @IsString()
  @Length(1, 200)
  title?: string;

  @ApiPropertyOptional({
    description: 'Content of the news article',
    example: 'Updated content...',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'Publication date and time',
    example: '2023-05-20T10:00:00Z',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  published_at?: string;
}
