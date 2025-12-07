import { IsInt, IsString, IsOptional, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateReviewDto {
  @ApiPropertyOptional({
    description: 'Rating from 1 to 5',
    example: 4,
    type: Number,
    minimum: 1,
    maximum: 5,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @ApiPropertyOptional({
    description: 'Review text content',
    example: 'Updated review text...',
    maxLength: 5000,
  })
  @IsOptional()
  @IsString()
  @Length(1, 5000)
  content?: string;
}
