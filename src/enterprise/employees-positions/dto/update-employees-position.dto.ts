import { PartialType } from '@nestjs/swagger';
import { CreateEmployeesPositionDto } from './create-employees-position.dto';

export class UpdateEmployeesPositionDto extends PartialType(CreateEmployeesPositionDto) {}
