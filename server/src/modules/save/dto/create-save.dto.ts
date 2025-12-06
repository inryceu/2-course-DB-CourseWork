import { IsInt, IsObject } from 'class-validator';

export class CreateSaveDto {
  @IsInt()
  user_id: number;

  @IsInt()
  game_id: number;

  @IsObject()
  save_data: object;
}

