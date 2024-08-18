import { IsBoolean } from 'class-validator';

export class UsePolicyRestrictionDto {
  @IsBoolean()
  camera: boolean;

  @IsBoolean()
  wifi: boolean;

  @IsBoolean()
  bluetooth: boolean;

  @IsBoolean()
  nfc: boolean;

  @IsBoolean()
  gps: boolean;

  @IsBoolean()
  powerOffButton: boolean;

  @IsBoolean()
  notification: boolean;

  @IsBoolean()
  settings: boolean;

  @IsBoolean()
  gallery: boolean;

  @IsBoolean()
  calculator: boolean;

  @IsBoolean()
  fileExplorer: boolean;
}
