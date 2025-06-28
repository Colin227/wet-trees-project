import { Test, TestingModule } from '@nestjs/testing';
import { TreeHealthLogsService } from './tree-health-logs.service';

describe('TreeHealthLogsService', () => {
  let service: TreeHealthLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeHealthLogsService],
    }).compile();

    service = module.get<TreeHealthLogsService>(TreeHealthLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
