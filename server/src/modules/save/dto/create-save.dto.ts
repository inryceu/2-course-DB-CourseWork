import { IsInt, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSaveDto {
  @ApiProperty({
    description: 'User ID who owns the save',
    example: 1,
    type: Number,
  })
  @IsInt()
  user_id: number;

  @ApiProperty({
    description: 'Game ID this save belongs to',
    example: 1,
    type: Number,
  })
  @IsInt()
  game_id: number;

  @ApiProperty({
    description: 'Save game data as JSON object',
    example: { level: 5, score: 1000, inventory: [] },
    type: Object,
  })
  @IsObject()
  save_data: object;
}
