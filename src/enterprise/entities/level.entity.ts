import { IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Area, Department, Section } from '.';

@Entity('levels')
export class Level {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @IsString()
  name: string;

  @OneToMany(() => Department, (department) => department.level)
  departments: Department[];

  @OneToMany(() => Section, (section) => section.level)
  sections: Section[];

  @OneToMany(() => Area, (area) => area.level)
  areas: Area[];
}
