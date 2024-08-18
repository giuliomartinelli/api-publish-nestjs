import {
  ArrayMaxSize,
  IsBoolean,
  IsNumberString,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

class StartAndEndTimeDto {
  @IsNumberString()
  @Min(0)
  @Max(6)
  day: number;

  @IsNumberString()
  startTime: number;

  @IsNumberString()
  endTime: number;
}

export class UsePolicyDefinitionDto {
  @ArrayMaxSize(7, {
    message: 'Week days can not be more than 7 days',
  })
  @IsOptional()
  weekDaysOnList?: StartAndEndTimeDto[];

  @ArrayMaxSize(7, { message: 'Window updates can not be more than 7 days' })
  @IsOptional()
  windowUpdatesList?: StartAndEndTimeDto[];

  @IsBoolean()
  @IsOptional()
  onlyWifi?: boolean;
}
