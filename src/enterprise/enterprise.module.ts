import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Address,
  Area,
  Department,
  Email,
  Employee,
  EmployeePosition,
  Level,
  Person,
  Phone,
  Position,
  Section,
} from './entities';
import { LevelController } from './level/level.controller';
import { LevelService } from './level/level.service';
import { LevelModule } from './level/level.module';
import { AreaModule } from './area/area.module';
import { DepartmentModule } from './department/department.module';
import { SectionModule } from './section/section.module';
import { PersonModule } from './person/person.module';
import { EmployeesModule } from './employees/employees.module';
import { PositionsModule } from './positions/positions.module';
import { EmployeesPositionsModule } from './employees-positions/employees-positions.module';

@Module({
  controllers: [EnterpriseController, LevelController],
  providers: [EnterpriseService, LevelService],
  exports: [EnterpriseService, LevelService, EmployeesModule],
  imports: [
    TypeOrmModule.forFeature([
      Address,
      Area,
      Department,
      Email,
      EmployeePosition,
      Employee,
      Level,
      Person,
      Phone,
      Position,
      Section,
    ]),
    LevelModule,
    AreaModule,
    DepartmentModule,
    SectionModule,
    PersonModule,
    EmployeesModule,
    PositionsModule,
    EmployeesPositionsModule,
  ],
})
export class EnterpriseModule {}
