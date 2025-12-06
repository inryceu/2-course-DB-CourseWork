import { IsString, Length, IsOptional } from 'class-validator';

export class UpdateTagDto {
  @IsOptional()
  @IsString()
  @Length(1, 25)
  tag_name?: string;
}

