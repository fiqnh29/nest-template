import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { ListProductsQueryDto } from './dto/list-products.query.dto';
import { ProductIdParamDto } from './dto/product-id.param.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  findAll(@Query() query: ListProductsQueryDto) {
    return this.productService.findAll(query);
  }

  @Get(':id')
  findOne(@Param() params: ProductIdParamDto) {
    return this.productService.findOne(params.id);
  }

  @Delete(':id')
  remove(@Param() params: ProductIdParamDto) {
    return this.productService.delete(params.id);
  }

  @Put(':id')
  update(@Param() params: ProductIdParamDto, @Body() dto: UpdateProductDto) {
    return this.productService.update(params.id, dto);
  }
}
