import { IsOptional, IsString } from 'class-validator';

export class UsePolicyKioskDto {
  @IsString()
  @IsOptional()
  password?: string;
}
