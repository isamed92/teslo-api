import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  @MinLength(3)
  firstName: string;

  @IsString()
  @MinLength(3)
  lastName: string;

  @IsString()
  birthdate: string;

  @IsString()
  @MaxLength(1)
  gender: string;

  @IsString()
  email: string;

  @IsString()
  areaCode: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;
}
