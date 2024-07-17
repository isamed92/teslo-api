import { User } from 'src/auth/entities/user.entity';
import { ProductImage } from './product-image.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'products',
})
export class Product {
  @ApiProperty({ example: '1', description: 'The id of the Product' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Nike Air Max',
    description: 'The title of the Product',
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({ example: 100, description: 'The price of the Product' })
  @Column('float', {
    default: 0,
  })
  price: number;

  @ApiProperty({
    example: 'The best shoes',
    description: 'The description of the Product',
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ApiProperty({
    example: 'nike_air_max',
    description: 'The slug of the Product',
  })
  @Column('text', {
    unique: true,
  })
  slug: string;

  @ApiProperty({ example: 10, description: 'The stock of the Product' })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty({
    example: ['red', 'blue'],
    description: 'The colors of the Product',
  })
  @Column('text', {
    array: true,
  })
  sizes: string[];

  @ApiProperty({ example: 'Male', description: 'The gender of the Product' })
  @Column('text')
  gender: string;

  @ApiProperty({
    example: ['running', 'sport'],
    description: 'The tags of the Product',
  })
  @Column('text', { array: true, default: [] })
  tags: string[];

  @ApiProperty()
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ManyToOne(() => User, (user) => user.product, { eager: true })
  user: User;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');

    this.tags = this.tags.map((e) => e.toLowerCase());
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');

    this.tags = this.tags.map((e) => e.toLowerCase());
  }
}
