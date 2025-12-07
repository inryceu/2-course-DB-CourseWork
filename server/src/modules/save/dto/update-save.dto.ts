import { IsObject, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSaveDto {
  @ApiPropertyOptional({
    description: 'Save game data as JSON object',
    example: { level: 10, score: 5000, inventory: ['sword', 'shield'] },
    type: Object,
  })
  @IsOptional()
  @IsObject()
  save_data?: object;
}
