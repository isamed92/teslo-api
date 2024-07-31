import { Module } from '@nestjs/common';
import { EmployeesPositionsService } from './employees-positions.service';
import { EmployeesPositionsController } from './employees-positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeePosition } from '../entities';

@Module({
  controllers: [EmployeesPositionsController],
  providers: [EmployeesPositionsService],
  imports: [TypeOrmModule.forFeature([EmployeePosition])],
})
export class EmployeesPositionsModule {}
