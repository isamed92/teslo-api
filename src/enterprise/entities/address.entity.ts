import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @IsString()
  street: string;

  @ManyToOne(() => Person, (person) => person.address, { eager: true })
  person: Person;
}
