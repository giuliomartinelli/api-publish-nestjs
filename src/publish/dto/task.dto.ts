import { IsNotEmpty } from 'class-validator';
import { EquipementDto } from './equipement.dto';

export class TaskDto {
  @IsNotEmpty()
  taskId: number;

  @IsNotEmpty()
  taskType: number;

  @IsNotEmpty()
  taskSubType: number;

  @IsNotEmpty()
  updateType: string;

  @IsNotEmpty()
  equipment: EquipementDto;
}
