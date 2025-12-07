import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  Length,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Username of the user',
    example: 'john_doe',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @Length(3, 20)
  username: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for the user account',
    example: 'SecurePassword123!',
    minLength: 8,
    maxLength: 255,
  })
  @IsString()
  @Length(8, 255)
  password: string;

  @ApiProperty({
    description: 'Age of the user',
    example: 25,
    minimum: 1,
    maximum: 120,
  })
  @IsInt()
  @Min(1)
  @Max(120)
  age: number;

  @ApiProperty({
    description: 'Region code (2 characters)',
    example: 'US',
    minLength: 2,
    maxLength: 2,
  })
  @IsString()
  @Length(2, 2)
  region: string;

  @ApiPropertyOptional({
    description: 'URL to user avatar image',
    example: 'https://example.com/avatar.jpg',
  })
  @IsOptional()
  @IsString()
  avatar?: string;
}
