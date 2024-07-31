import { IsEmail, IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity';

@Entity('emails')
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @IsString()
  @IsEmail()
  address: string;

  @ManyToOne(() => Person, (person) => person.email, { onDelete: 'CASCADE' })
  person: Person;
}
