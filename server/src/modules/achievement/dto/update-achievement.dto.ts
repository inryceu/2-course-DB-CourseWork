import { IsInt, IsString, IsOptional, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAchievementDto {
  @ApiPropertyOptional({
    description: 'Game ID this achievement belongs to',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  game_id?: number;

  @ApiPropertyOptional({
    description: 'Title of the achievement',
    example: 'Master Explorer',
    minLength: 1,
    maxLength: 64,
  })
  @IsOptional()
  @IsString()
  @Length(1, 64)
  title?: string;

  @ApiPropertyOptional({
    description: 'URL to achievement icon image',
    example: 'https://example.com/new-icon.png',
    maxLength: 2083,
  })
  @IsOptional()
  @IsString()
  @Length(1, 2083)
  icon?: string;
}
