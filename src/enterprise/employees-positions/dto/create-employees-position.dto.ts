import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEmployeesPositionDto {
  @IsString()
  status: string;
  @IsString()
  startDate: string;
  @IsString()
  @IsOptional()
  endDate?: string;
  @IsString()
  @IsUUID()
  employeeId: string;
  @IsString()
  @IsUUID()
  positionId: string;
  @IsString()
  @IsUUID()
  departmentId: string;
  @IsString()
  @IsUUID()
  sectionId: string;
  @IsString()
  @IsUUID()
  areaId: string;
}
