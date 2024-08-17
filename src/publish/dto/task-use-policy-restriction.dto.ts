import { IsNotEmpty } from 'class-validator';
import { UsePolicyRestrictionDto } from './use-policy-restriction.dto';
import { TaskDto } from './task.dto';

export class TaskUsePolicyRestrictionDto extends TaskDto {
  @IsNotEmpty()
  task: UsePolicyRestrictionDto;
}
