import { Module } from '@nestjs/common';
import { DeviceTask } from './device-task';

@Module({
  providers: [DeviceTask],
})
export class DeviceTaskModule {}
