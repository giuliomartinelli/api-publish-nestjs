import { Module } from '@nestjs/common';
import { Queue } from './queue';

@Module({
  providers: [Queue],
})
export class QueueModule {}
