import {
  IsString,
  IsEmail,
  IsInt,
  IsArray,
  IsOptional,
  Min,
  Max,
  Length,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDataDto {
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
    minimum: 13,
    maximum: 120,
  })
  @IsInt()
  @Min(13)
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

export class CreateUserWithInitialSetupDto {
  @ApiProperty({
    description: 'User data',
    type: UserDataDto,
  })
  @ValidateNested()
  @Type(() => UserDataDto)
  user: UserDataDto;

  @ApiPropertyOptional({
    description: 'Array of game IDs to add to user library (wishlist)',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  initialGameIds?: number[];

  @ApiPropertyOptional({
    description: 'Array of friend user IDs to create friend connections',
    example: [2, 3],
    type: [Number],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  friendIds?: number[];

  @ApiPropertyOptional({
    description: 'Array of achievement IDs to unlock for the user',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  achievementIds?: number[];
}
