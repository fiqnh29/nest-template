import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ProductIdParamDto {
  @IsNumber()
  @Type(() => Number)
  id: number;
}
