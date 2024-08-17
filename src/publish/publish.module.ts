import { Module } from '@nestjs/common';
import { Publish } from './publish';

@Module({
  providers: [Publish],
})
export class PublishModule {}
