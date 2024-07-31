import { IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeePosition } from './employee-position.entity';

@Entity('positions')
export class Position {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  @IsString()
  name: string;

  @Column('date')
  createdAt: Date;

  @Column('text')
  @IsString()
  experience?: string;

  @Column('text')
  @IsString()
  functions?: string;

  @Column('text')
  @IsString()
  knowledge?: string;

  @Column('text')
  @IsString()
  skills?: string;

  @OneToMany(
    () => EmployeePosition,
    (employeePosition) => employeePosition.position,
  )
  employeePositions: EmployeePosition[];
}
