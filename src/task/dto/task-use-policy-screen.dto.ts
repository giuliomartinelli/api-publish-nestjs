import { IsNotEmpty } from 'class-validator';
import { UsePolicyScreenDto } from './use-policy-screen.dto';
import { TaskDto } from './task.dto';

export class TaskUsePolicyScreenDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyScreenDto;
}
