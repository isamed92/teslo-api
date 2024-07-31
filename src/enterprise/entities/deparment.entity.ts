import { IsString } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeePosition, Level } from '.';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @IsString()
  name: string;

  @Column('text')
  @IsString()
  description: string;

  @Column('date')
  createdAt: Date;

  @ManyToOne(() => Level, (level) => level.id)
  level: Level;

  @OneToMany(
    () => EmployeePosition,
    (employeePosition) => employeePosition.department,
  )
  employeePositions: EmployeePosition[];
}
