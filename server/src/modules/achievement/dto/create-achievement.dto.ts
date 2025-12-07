import { IsInt, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAchievementDto {
  @ApiProperty({
    description: 'Game ID this achievement belongs to',
    example: 1,
    type: Number,
  })
  @IsInt()
  game_id: number;

  @ApiProperty({
    description: 'Title of the achievement',
    example: 'First Steps',
    minLength: 1,
    maxLength: 64,
  })
  @IsString()
  @Length(1, 64)
  title: string;

  @ApiProperty({
    description: 'URL to achievement icon image',
    example: 'https://example.com/achievement-icon.png',
    maxLength: 2083,
  })
  @IsString()
  @Length(1, 2083)
  icon: string;
}
