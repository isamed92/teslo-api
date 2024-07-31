import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee, EmployeePosition, Position } from '../entities';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [EmployeesService],
  imports: [TypeOrmModule.forFeature([Employee, EmployeePosition, Position])],
})
export class EmployeesModule {}
