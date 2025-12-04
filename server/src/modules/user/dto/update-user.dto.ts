import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  Length,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(3, 20)
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @Length(8, 255)
  password?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(120)
  age?: number;

  @IsOptional()
  @IsString()
  @Length(2, 2)
  region?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
