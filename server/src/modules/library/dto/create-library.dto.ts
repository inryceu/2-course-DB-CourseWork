import { IsInt, IsEnum, IsOptional, Min } from 'class-validator';

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
  @IsInt()
  user_id: number;

  @IsInt()
  game_id: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  hours_played?: number;

  @IsEnum(OwnType)
  ownership: OwnType;

  @IsOptional()
  @IsEnum(DownloadType)
  download_status?: DownloadType;
}
