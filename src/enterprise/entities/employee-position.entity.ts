import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Area, Department, Employee, Position, Section } from '.';
import { IsDate, IsString } from 'class-validator';

@Entity('employee_positions')
export class EmployeePosition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  createdAt: Date;

  @Column('date')
  updatedAt: Date;

  @Column('text')
  @IsString()
  status: string;

  @Column('date')
  @IsDate()
  startDate: Date;

  @Column('date', { nullable: true })
  @IsDate()
  endDate?: Date;

  @ManyToOne(() => Employee, (employee) => employee.employeePositions)
  employee: Employee;

  @ManyToOne(() => Position, (position) => position.employeePositions)
  position: Position;

  @ManyToOne(() => Department, (department) => department.employeePositions)
  department: Department;

  @ManyToOne(() => Section, (section) => section.employeePositions)
  section: Section;

  @ManyToOne(() => Area, (area) => area.employeePositions)
  area: Area;
}
