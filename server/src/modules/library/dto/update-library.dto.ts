import { IsInt, IsEnum, IsOptional, Min } from 'class-validator';
import { OwnType, DownloadType } from './create-library.dto';

export class UpdateLibraryDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  hours_played?: number;

  @IsOptional()
  @IsEnum(OwnType)
  ownership?: OwnType;

  @IsOptional()
  @IsEnum(DownloadType)
  download_status?: DownloadType;
}
