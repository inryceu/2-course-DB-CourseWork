import {
  IsString,
  IsEnum,
  IsObject,
  IsOptional,
  Length,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum DevType {
  developer = 'developer',
  publisher = 'publisher',
  both = 'both',
}

export class CreateDevDto {
  @ApiProperty({
    description: 'Name of the developer/publisher',
    example: 'CD Projekt RED',
    minLength: 1,
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  dev_name: string;

  @ApiProperty({
    description: 'Contact information as JSON object',
    example: { email: 'contact@example.com', website: 'https://example.com' },
    type: Object,
  })
  @IsObject()
  contacts: object;

  @ApiPropertyOptional({
    description: 'URL to developer/publisher logo',
    example: 'https://example.com/logo.png',
    maxLength: 2083,
  })
  @IsOptional()
  @IsString()
  @Length(1, 2083)
  logo?: string;

  @ApiProperty({
    description: 'Type of developer/publisher',
    enum: DevType,
    example: DevType.developer,
  })
  @IsEnum(DevType)
  dev_type: DevType;
}
