import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class ModelsDto {
  @IsNumber()
  modelId: number;

  @IsString()
  modelName: string;
}

export class UsePolicyApplicationDto {
  @IsNumber()
  applicationId: number;

  @IsNumber()
  applicationVersionId: number;

  @IsString()
  applicationName: string;

  @IsString()
  packageName: string;

  @IsString()
  linkDownload: string;

  @IsString()
  icon: string;

  @IsBoolean()
  canBeUninstalled: boolean;

  @IsBoolean()
  kioskMode: boolean;

  @IsBoolean()
  execOnStart: boolean;

  @IsString()
  versionCode: string;

  @IsBoolean()
  uninstalled: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ModelsDto)
  models: ModelsDto[];
}
