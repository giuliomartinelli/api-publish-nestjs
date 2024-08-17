import { Test, TestingModule } from '@nestjs/testing';
import { Queue } from './queue';

describe('Queue', () => {
  let queue: Queue;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Queue],
    }).compile();

    queue = module.get<Queue>(Queue);
  });

  it('should be defined', () => {
    expect(queue).toBeDefined();
  });
});
