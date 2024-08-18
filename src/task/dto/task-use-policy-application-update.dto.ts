import { IsNotEmpty } from 'class-validator';
import { UsePolicyApplicationDto } from './use-policy-application.dto';
import { TaskDto } from './task.dto';

export class TaskUsePolicyApplicationUpdateDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyApplicationDto;
}
