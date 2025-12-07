import {
  IsInt,
  IsString,
  Length,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGameNewsDto {
  @ApiProperty({
    description: 'Game ID this news belongs to',
    example: 1,
    type: Number,
  })
  @IsInt()
  game_id: number;

  @ApiProperty({
    description: 'Title of the news article',
    example: 'New Update Released',
    minLength: 1,
    maxLength: 200,
  })
  @IsString()
  @Length(1, 200)
  title: string;

  @ApiProperty({
    description: 'Content of the news article',
    example: 'We are excited to announce...',
  })
  @IsString()
  content: string;

  @ApiPropertyOptional({
    description: 'Publication date and time',
    example: '2023-05-19T10:00:00Z',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  published_at?: string;
}
