import { IsObject, IsOptional } from 'class-validator';

export class UpdateSaveDto {
  @IsOptional()
  @IsObject()
  save_data?: object;
}

