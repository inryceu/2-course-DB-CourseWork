import { IsInt, IsEnum, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum OwnType {
  rented = 'rented',
  wishlist = 'wishlist',
  purchased = 'purchased',
}

export enum DownloadType {
  installed = 'installed',
  not_installed = 'not_installed',
  in_progress = 'in_progress',
}

export class CreateLibraryDto {
  @ApiProperty({
    description: 'User ID who owns the game',
    example: 1,
    type: Number,
  })
  @IsInt()
  user_id: number;

  @ApiProperty({
    description: 'Game ID to add to library',
    example: 1,
    type: Number,
  })
  @IsInt()
  game_id: number;

  @ApiPropertyOptional({
    description: 'Number of hours played',
    example: 0,
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  hours_played?: number;

  @ApiProperty({
    description: 'Ownership type',
    enum: OwnType,
    example: OwnType.purchased,
  })
  @IsEnum(OwnType)
  ownership: OwnType;

  @ApiPropertyOptional({
    description: 'Download status of the game',
    enum: DownloadType,
    example: DownloadType.not_installed,
  })
  @IsOptional()
  @IsEnum(DownloadType)
  download_status?: DownloadType;
}
