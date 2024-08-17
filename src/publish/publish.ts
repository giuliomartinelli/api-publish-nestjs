import { Injectable } from '@nestjs/common';
import { Queue } from '../queue/queue';
import { DeviceTask } from '../device-task/device-task';
import { EquipementDto } from './dto/equipement.dto';
import { UsePolicyScreenDto } from './dto/use-policy-screen.dto';
import { UsePolicyRestrictionDto } from './dto/use-policy-restriction.dto';
import { UsePolicyKioskDto } from './dto/use-policy-kiosk.dto';
import { UsePolicyDefinitionDto } from './dto/use-policy-definition.dto';
import { UsePolicyApplicationDto } from './dto/use-policy-application.dto';

@Injectable()
export class Publish {
  constructor(
    protected readonly queue: Queue,
    protected readonly deviceTask: DeviceTask,
    private topic: string,
    private taskId: number,
    private task:
      | UsePolicyScreenDto
      | UsePolicyRestrictionDto
      | UsePolicyKioskDto
      | UsePolicyDefinitionDto
      | UsePolicyApplicationDto,
    private taskType: number,
    private taskSubType: number,
    private updateType: string,
    private status: number,
    private equipment: EquipementDto,
  ) {}

  public setTopic(topic: string): void {
    this.topic = topic;
    return;
  }

  public setTask(
    task:
      | UsePolicyScreenDto
      | UsePolicyRestrictionDto
      | UsePolicyKioskDto
      | UsePolicyDefinitionDto
      | UsePolicyApplicationDto,
  ): void {
    this.task = task;
    return;
  }

  public setTaskId(taskId: number): void {
    this.taskId = taskId;
    return;
  }

  public setTaskType(taskType: number): void {
    this.taskType = taskType;
    return;
  }

  public setTaskSubType(taskSubType: number): void {
    this.taskSubType = taskSubType;
    return;
  }

  public setUpdateType(updateType: string): void {
    this.updateType = updateType;
    return;
  }

  public setEquipment(equipment: EquipementDto): void {
    this.equipment = equipment;
    return;
  }

  public publish(): void {
    const powerOn = true;
    if (powerOn) this.publishTask();
    return;
  }

  public publishAndSave(): void {
    const powerOn = true;
    if (!powerOn) this.setStatus(5);
    if (powerOn) this.publishTask();

    this.saveTask();
    return;
  }

  public setStatus(status: number): void {
    this.status = status;
    return;
  }

  private publishTask(): void {
    this.queue.publish(this.topic, this.task, this.equipment);
  }

  private saveTask(): void {
    const task = {
      serial: this.equipment.serial,
      status: this.status,
      taskId: this.taskId,
      taskType: this.taskType,
      taskSubType: this.taskSubType,
      updateType: this.updateType,
      topic: this.topic,
      task: this.task,
    };
    this.deviceTask.create(task);
  }
}
