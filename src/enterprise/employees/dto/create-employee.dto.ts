import { IsString, IsUUID } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  employeeIdNumber: string;

  @IsString()
  status: string;

  @IsString()
  observation: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  @IsUUID()
  personId: string;

  @IsString()
  @IsUUID()
  userId: string;
}
