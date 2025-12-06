import { IsString, IsEnum, IsObject, IsOptional, Length } from 'class-validator';

export enum DevType {
  developer = 'developer',
  publisher = 'publisher',
  both = 'both',
}

export class CreateDevDto {
  @IsString()
  @Length(1, 50)
  dev_name: string;

  @IsObject()
  contacts: object;

  @IsOptional()
  @IsString()
  @Length(1, 2083)
  logo?: string;

  @IsEnum(DevType)
  dev_type: DevType;
}

