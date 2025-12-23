import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  limit: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset: number = 0;
}
