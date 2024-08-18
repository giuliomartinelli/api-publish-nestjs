import { IsNotEmpty } from 'class-validator';
import { TaskDto } from './task.dto';
import { UsePolicyApplicationDto } from './use-policy-application.dto';

export class TaskUsePolicyUninstallDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyApplicationDto;
}
