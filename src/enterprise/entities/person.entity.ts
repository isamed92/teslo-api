import { IsString, MaxLength } from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Phone } from './phone.entity';
import { Address } from './address.entity';
import { Email } from './email.entity';
import { Employee } from './employee.entity';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('date')
  birthdate: Date;

  @Column('char')
  @IsString()
  @MaxLength(1)
  gender: string;

  @OneToMany(() => Phone, (phone) => phone.person)
  phone: Phone[];

  @OneToMany(() => Address, (address) => address.person)
  address: Address[];

  @OneToMany(() => Email, (email) => email.person)
  email: Email[];

  @OneToOne(() => Employee, (employee) => employee.person)
  employee: Employee;
}
