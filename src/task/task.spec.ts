import { Test, TestingModule } from '@nestjs/testing';
import { Task } from './task';

describe('Task', () => {
  let task: Task;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Task],
    }).compile();

    task = module.get<Task>(Task);
  });

  it('should be defined', () => {
    expect(task).toBeDefined();
  });
});
