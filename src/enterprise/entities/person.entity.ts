import { IsString, MaxLength } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
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

  @OneToMany(() => Phone, (phone) => phone.person, { cascade: true })
  phone: Phone[];

  @OneToMany(() => Address, (address) => address.person, { cascade: true })
  address: Address[];

  @OneToMany(() => Email, (email) => email.person, { cascade: true })
  email: Email[];

  @OneToOne(() => Employee, (employee) => employee.person)
  @JoinColumn()
  employee: Employee;
}
