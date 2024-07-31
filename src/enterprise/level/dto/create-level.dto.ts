import { IsString, MinLength } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  @MinLength(6)
  name: string;

  //   @IsString({ each: true })
  //   deparments: string[];

  //   @IsString({ each: true })
  //   sections: string[];

  //   @IsString({ each: true })
  //   areas: string[];
}
