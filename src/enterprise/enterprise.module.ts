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

@Module({
  controllers: [EnterpriseController, LevelController],
  providers: [EnterpriseService, LevelService],
  exports: [EnterpriseService, LevelService],
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
  ],
})
export class EnterpriseModule {}
