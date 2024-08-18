import { Module } from '@nestjs/common';
import { Task } from './task';
import { Queue } from 'src/queue/queue';
import { DeviceTask } from 'src/device-task/device-task';
import { TaskService } from './task.service';
import { TaskUsePolicyController } from './task-use-policy.controller';

@Module({
  providers: [
    Queue,
    DeviceTask,
    Task,
    TaskService
  ],
  controllers: [TaskUsePolicyController]
})
export class TaskModule {}
