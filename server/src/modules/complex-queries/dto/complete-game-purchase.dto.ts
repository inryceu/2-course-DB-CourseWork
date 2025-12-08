import {
  IsInt,
  IsEnum,
  IsOptional,
  IsObject,
  IsString,
  Min,
  Max,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum OwnershipType {
  rented = 'rented',
  wishlist = 'wishlist',
  purchased = 'purchased',
}

export class InitialReviewDto {
  @ApiProperty({
    description: 'Rating from 1 to 5',
    example: 5,
    type: Number,
    minimum: 1,
    maximum: 5,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiPropertyOptional({
    description: 'Review text content',
    example: 'Great game with amazing graphics!',
    maxLength: 5000,
  })
  @IsOptional()
  @IsString()
  @Length(1, 5000)
  content?: string;
}

export class CompleteGamePurchaseDto {
  @ApiProperty({
    description: 'User ID who is purchasing the game',
    example: 1,
    type: Number,
  })
  @IsInt()
  userId: number;

  @ApiProperty({
    description: 'Game ID being purchased',
    example: 1,
    type: Number,
  })
  @IsInt()
  gameId: number;

  @ApiProperty({
    description: 'Ownership type',
    enum: OwnershipType,
    example: OwnershipType.purchased,
  })
  @IsEnum(OwnershipType)
  ownership: OwnershipType;

  @ApiPropertyOptional({
    description: 'Initial save data as JSON object',
    example: { level: 1, progress: 0 },
    type: Object,
  })
  @IsOptional()
  @IsObject()
  initialSaveData?: any;

  @ApiPropertyOptional({
    description: 'Initial review for the game',
    type: InitialReviewDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => InitialReviewDto)
  initialReview?: InitialReviewDto;
}

