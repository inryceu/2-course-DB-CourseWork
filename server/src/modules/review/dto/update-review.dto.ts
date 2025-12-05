import { IsInt, IsString, IsOptional, Min, Max, Length } from 'class-validator';

export class UpdateReviewDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsString()
  @Length(1, 5000)
  content?: string;
}

