import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../src/auth/auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { ListProductsQueryDto } from './dto/list-products.query.dto';
import { ProductIdParamDto } from './dto/product-id.param.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query() query: ListProductsQueryDto) {
    return this.productService.findAll(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param() params: ProductIdParamDto) {
    return this.productService.findOne(params.id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param() params: ProductIdParamDto) {
    return this.productService.delete(params.id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Param() params: ProductIdParamDto, @Body() dto: UpdateProductDto) {
    return this.productService.update(params.id, dto);
  }
}
