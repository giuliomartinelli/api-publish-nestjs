import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class UsePolicyScreenDto {
  @IsString()
  @IsOptional()
  backgroundUrl?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(100)
  brightness?: number;
}
