import { IsArray, IsBoolean, IsString } from 'class-validator';
import { Product } from 'src/product/entities';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
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

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
