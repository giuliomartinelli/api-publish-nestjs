import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueModule } from './queue/queue.module';
import { DeviceTaskModule } from './device-task/device-task.module';
import { PublishModule } from './publish/publish.module';

@Module({
  imports: [QueueModule, DeviceTaskModule, PublishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
