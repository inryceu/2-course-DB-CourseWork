import { IsString, Length, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiPropertyOptional({
    description: 'Name of the tag',
    example: 'Action-Adventure',
    minLength: 1,
    maxLength: 25,
  })
  @IsOptional()
  @IsString()
  @Length(1, 25)
  tag_name?: string;
}
