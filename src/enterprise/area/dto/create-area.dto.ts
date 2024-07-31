import { IsString, IsUUID } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  levelId: string;
}
