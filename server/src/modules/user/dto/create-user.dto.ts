import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 255)
  password: string;

  @IsInt()
  @Min(1)
  @Max(120)
  age: number;

  @IsString()
  @Length(2, 2)
  region: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
