import {
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum EvType {
  sale = 'sale',
  giveaway = 'giveaway',
  free_weekend = 'free weekend',
}

export class CreateEventDto {
  @ApiProperty({
    description: 'Game ID this event is for',
    example: 1,
    type: Number,
  })
  @IsInt()
  game_id: number;

  @ApiPropertyOptional({
    description: 'Discount percentage (0-100)',
    example: 50,
    type: Number,
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discount?: number;

  @ApiProperty({
    description: 'Event start date and time',
    example: '2023-05-19T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  @IsDateString()
  start_date: string;

  @ApiProperty({
    description: 'Event end date and time',
    example: '2023-05-26T23:59:59Z',
    type: String,
    format: 'date-time',
  })
  @IsDateString()
  end_date: string;

  @ApiProperty({
    description: 'Type of event',
    enum: EvType,
    example: EvType.sale,
  })
  @IsEnum(EvType)
  type: EvType;
}
