import { Test, TestingModule } from '@nestjs/testing';
import { Publish } from './publish';

describe('Publish', () => {
  let publish: Publish;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Publish],
    }).compile();

    publish = module.get<Publish>(Publish);
  });

  it('should be defined', () => {
    expect(publish).toBeDefined();
  });
});
