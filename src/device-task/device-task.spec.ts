import { Test, TestingModule } from '@nestjs/testing';
import { DeviceTask } from './device-task';

describe('DeviceTask', () => {
  let deviceTask: DeviceTask;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceTask],
    }).compile();

    deviceTask = module.get<DeviceTask>(DeviceTask);
  });

  it('should be defined', () => {
    expect(deviceTask).toBeDefined();
  });
});
