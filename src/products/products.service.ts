import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './interface/products.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Buku',
      quantity: 30,
    },
  ];

  create(product: Omit<Product, 'id'>) {
    const data = { id: this.products.length + 1, ...product };
    this.products.push(data);
    return data;
  }

  delete(id: number) {
    const productId = Number(id);

    const index = this.products.findIndex((item) => item.id === productId);

    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    const deletedProduct = this.products[index];
    this.products.splice(index, 1);

    return deletedProduct;
  }

  findAll(query: { search?: string } = {}) {
    const keyword = query.search?.toLowerCase() ?? '';
    return this.products.filter((item) => item.name.toLowerCase().includes(keyword));
  }

  findOne(id: number) {
    const data = this.products.find((item) => item.id === id);
    if (!data) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return data;
  }

  update(id: number, product: Omit<Product, 'id'>) {
    const productId = Number(id);

    const index = this.products.findIndex((item) => item.id === productId);

    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    this.products[index] = {
      ...this.products[index],
      ...product,
    };

    return this.products[index];
  }
}
