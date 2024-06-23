import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product, ProductImage } from './entities';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService, TypeOrmModule],
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
})
export class ProductModule {}
