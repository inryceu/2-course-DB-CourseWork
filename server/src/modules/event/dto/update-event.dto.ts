import {
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { EvType } from './create-event.dto';

export class UpdateEventDto {
  @ApiPropertyOptional({
    description: 'Game ID this event is for',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  game_id?: number;

  @ApiPropertyOptional({
    description: 'Discount percentage (0-100)',
    example: 75,
    type: Number,
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discount?: number;

  @ApiPropertyOptional({
    description: 'Event start date and time',
    example: '2023-05-20T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  start_date?: string;

  @ApiPropertyOptional({
    description: 'Event end date and time',
    example: '2023-05-27T23:59:59Z',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiPropertyOptional({
    description: 'Type of event',
    enum: EvType,
    example: EvType.giveaway,
  })
  @IsOptional()
  @IsEnum(EvType)
  type?: EvType;
}
