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

@Module({
  controllers: [EnterpriseController],
  providers: [EnterpriseService],
  exports: [EnterpriseService],
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
  ],
})
export class EnterpriseModule {}
