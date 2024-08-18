import { IsNotEmpty } from 'class-validator';
import { UsePolicyKioskDto } from './use-policy-kiosk.dto';
import { TaskDto } from './task.dto';

export class TaskUsePolicyKioskDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyKioskDto;
}
