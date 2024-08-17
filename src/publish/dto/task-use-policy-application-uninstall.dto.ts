import { IsNotEmpty } from 'class-validator';
import { UsePolicyApplicationDto } from './use-policy-application.dto';
import { TaskDto } from './task.dto';

export class TaskUsePolicyApplicationUninstallDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyApplicationDto;
}
