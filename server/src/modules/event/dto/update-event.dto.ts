import {
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { EvType } from './create-event.dto';

export class UpdateEventDto {
  @IsOptional()
  @IsInt()
  game_id?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discount?: number;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsEnum(EvType)
  type?: EvType;
}

