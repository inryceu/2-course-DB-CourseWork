import { IsInt, IsEnum, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { OwnType, DownloadType } from './create-library.dto';

export class UpdateLibraryDto {
  @ApiPropertyOptional({
    description: 'Number of hours played',
    example: 50,
    type: Number,
    minimum: 0,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  hours_played?: number;

  @ApiPropertyOptional({
    description: 'Ownership type',
    enum: OwnType,
    example: OwnType.purchased,
  })
  @IsOptional()
  @IsEnum(OwnType)
  ownership?: OwnType;

  @ApiPropertyOptional({
    description: 'Download status of the game',
    enum: DownloadType,
    example: DownloadType.installed,
  })
  @IsOptional()
  @IsEnum(DownloadType)
  download_status?: DownloadType;
}
