import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    description: 'Name of the tag',
    example: 'Action',
    minLength: 1,
    maxLength: 25,
  })
  @IsString()
  @Length(1, 25)
  tag_name: string;
}
