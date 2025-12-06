import { IsString, IsEnum, IsObject, IsOptional, Length } from 'class-validator';
import { DevType } from './create-dev.dto';

export class UpdateDevDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  dev_name?: string;

  @IsOptional()
  @IsObject()
  contacts?: object;

  @IsOptional()
  @IsString()
  @Length(1, 2083)
  logo?: string;

  @IsOptional()
  @IsEnum(DevType)
  dev_type?: DevType;
}

