import { IsInt, IsString, IsOptional, Min, Max, Length } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    description: 'User ID who wrote the review',
    example: 1,
    type: Number,
  })
  @IsInt()
  user_id: number;

  @ApiProperty({
    description: 'Game ID being reviewed',
    example: 1,
    type: Number,
  })
  @IsInt()
  game_id: number;

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
