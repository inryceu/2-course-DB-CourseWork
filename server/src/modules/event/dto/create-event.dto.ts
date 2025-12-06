import {
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  IsOptional,
  Min,
  Max,
} from 'class-validator';

export enum EvType {
  sale = 'sale',
  giveaway = 'giveaway',
  free_weekend = 'free weekend',
}

export class CreateEventDto {
  @IsInt()
  game_id: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discount?: number;

  @IsDateString()
  start_date: string;

  @IsDateString()
  end_date: string;

  @IsEnum(EvType)
  type: EvType;
}

