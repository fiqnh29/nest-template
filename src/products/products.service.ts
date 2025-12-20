import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { Product } from './interface/products.interface';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Omit<Product, 'id'>) {
    return await this.prisma.products.create({
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.products.delete({
      where: {
        id,
      },
    });
  }

  async findAll(query: { search?: string } = {}) {
    const keyword = query.search?.toLowerCase() ?? '';
    return await this.prisma.products.findMany({
      where: {
        name: {
          contains: keyword,
          mode: 'insensitive',
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.products.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: Omit<Product, 'id'>) {
    return await this.prisma.products.update({
      data,
      where: {
        id,
      },
    });
  }
}
