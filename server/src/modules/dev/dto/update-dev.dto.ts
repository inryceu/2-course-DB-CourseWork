import {
  IsString,
  IsEnum,
  IsObject,
  IsOptional,
  Length,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { DevType } from './create-dev.dto';

export class UpdateDevDto {
  @ApiPropertyOptional({
    description: 'Name of the developer/publisher',
    example: 'CD Projekt RED',
    minLength: 1,
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  dev_name?: string;

  @ApiPropertyOptional({
    description: 'Contact information as JSON object',
    example: {
      email: 'newcontact@example.com',
      website: 'https://newexample.com',
    },
    type: Object,
  })
  @IsOptional()
  @IsObject()
  contacts?: object;

  @ApiPropertyOptional({
    description: 'URL to developer/publisher logo',
    example: 'https://example.com/new-logo.png',
    maxLength: 2083,
  })
  @IsOptional()
  @IsString()
  @Length(1, 2083)
  logo?: string;

  @ApiPropertyOptional({
    description: 'Type of developer/publisher',
    enum: DevType,
    example: DevType.both,
  })
  @IsOptional()
  @IsEnum(DevType)
  dev_type?: DevType;
}
