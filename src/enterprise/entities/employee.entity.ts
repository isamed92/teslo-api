import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from './person.entity';
import { User } from 'src/auth/entities/user.entity';
import { EmployeePosition } from './employee-position.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  employeeIdNumber: string;

  @Column('text')
  status: string;

  @Column('text')
  observation: string;

  @Column('date')
  startDate: Date;

  @Column('date')
  endDate: Date;

  @OneToOne(() => Person, (person) => person.employee)
  person: Person;

  @OneToOne(() => User, (user) => user.employee)
  user: User;

  @OneToMany(
    () => EmployeePosition,
    (employeePosition) => employeePosition.employee,
  )
  employeePositions: EmployeePosition[];
}
