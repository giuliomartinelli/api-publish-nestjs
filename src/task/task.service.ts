import { Injectable } from '@nestjs/common';
import { TaskUsePolicyInstallDto } from './dto/task-use-policy-install.dto';
import { TaskUsePolicyUninstallDto } from './dto/task-use-policy-uninstall.dto';
import { TaskUsePolicyApplicationInstallDto } from './dto/task-use-policy-application-install.dto';
import { TaskUsePolicyApplicationUninstallDto } from './dto/task-use-policy-application-uninstall.dto';
import { TaskUsePolicyApplicationUpdateDto } from './dto/task-use-policy-application-update.dto';
import { TaskUsePolicyScreenDto } from './dto/task-use-policy-screen.dto';
import { TaskUsePolicyRestrictionDto } from './dto/task-use-policy-restriction.dto';
import { TaskUsePolicyKioskDto } from './dto/task-use-policy-kiosk.dto';
import { TaskUsePolicyDefinitionDto } from './dto/task-use-policy-definition.dto';
import { Task } from './task';

@Injectable()
export class TaskService {
  constructor(private readonly task: Task) {}

  public usePolicyInstall(data: TaskUsePolicyInstallDto): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyUninstall(data: TaskUsePolicyUninstallDto): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyScreen(data: TaskUsePolicyScreenDto): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyRestriction(
    data: TaskUsePolicyRestrictionDto,
  ): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyKiosk(data: TaskUsePolicyKioskDto): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyDefinition(data: TaskUsePolicyDefinitionDto): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyApplicationInstall(
    data: TaskUsePolicyApplicationInstallDto,
  ): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyApplicationUninstall(
    data: TaskUsePolicyApplicationUninstallDto,
  ): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  public usePolicyApplicationUpdate(
    data: TaskUsePolicyApplicationUpdateDto,
  ): Promise<void> {
    const topic = `${data.equipment.serial}`;
    return this.publishAndSave(topic, data);
  }

  private publishAndSave(topic: string, data: any): Promise<void> {
    this.task.setTopic(topic);
    this.task.setTask(data.task);
    this.task.setTaskId(data.taskId);
    this.task.setTaskType(data.taskType);
    this.task.setTaskSubType(data.taskSubType);
    this.task.setUpdateType(data.updateType);
    this.task.setStatus(1);
    this.task.setEquipment(data.equipment);
    this.task.publishAndSave();
    return;
  }
}
