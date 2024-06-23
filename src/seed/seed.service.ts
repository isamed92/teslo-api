import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductService) {}

  async runSeed() {
    await this.insertNewProducts();
    return 'SEED EXECUTED';
  }

  private async insertNewProducts() {
    await this.productService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach((prod) => {
      const promise = this.productService.create(prod);
      insertPromises.push(promise);
    });

    await Promise.all(insertPromises);
    return true;
  }
}
