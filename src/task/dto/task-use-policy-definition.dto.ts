import { IsNotEmpty } from 'class-validator';
import { UsePolicyDefinitionDto } from './use-policy-definition.dto';
import { TaskDto } from './task.dto';

export class TaskUsePolicyDefinitionDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyDefinitionDto;
}
