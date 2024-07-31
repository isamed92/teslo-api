import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity';

@Entity('phones')
export class Phone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @IsString()
  areaCode: string;

  @Column('text')
  @IsString()
  number: string;

  @ManyToOne(() => Person, (person) => person.phone, {
    eager: true,
    onDelete: 'CASCADE',
  })
  person: Person;
}
