import { IsString, IsUUID } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  levelId: string;
}
