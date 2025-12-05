import { IsInt, IsString, IsOptional, Min, Max, Length } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  user_id: number;

  @IsInt()
  game_id: number;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  @Length(1, 5000)
  content?: string;
}

