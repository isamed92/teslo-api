import { IsArray, IsBoolean, IsString } from 'class-validator';
import { Employee } from 'src/enterprise/entities';
import { Product } from 'src/product/entities';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  @IsString()
  email: string;

  @Column('text', {
    // select: false,
  })
  @IsString()
  password: string;

  @Column('text')
  @IsString()
  fullName: string;

  @Column('bool', {
    default: true,
  })
  @IsBoolean()
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  @IsString({ each: true })
  @IsArray()
  roles: string[];

  @OneToMany(() => Product, (product) => product.user)
  product: Product[];

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
