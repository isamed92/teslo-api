import { IsString } from 'class-validator';

export class CreatePositionDto {
  @IsString()
  name: string;
  @IsString()
  functions: string;
  @IsString()
  experience: string;
  @IsString()
  knowledge: string;
  @IsString()
  skills: string;
}
