import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  @Type(() => String)
  email: string;

  @IsString()
  @Type(() => String)
  password: string;
}
