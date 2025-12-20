import { Type } from 'class-transformer';
import { IsUUID } from 'class-validator';

export class ProductIdParamDto {
  @IsUUID()
  @Type(() => String)
  id: string;
}
