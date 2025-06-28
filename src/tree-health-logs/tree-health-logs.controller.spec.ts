import { Test, TestingModule } from '@nestjs/testing';
import { TreeHealthLogsController } from './tree-health-logs.controller';
import { TreeHealthLogsService } from './tree-health-logs.service';

describe('TreeHealthLogsController', () => {
  let controller: TreeHealthLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreeHealthLogsController],
      providers: [TreeHealthLogsService],
    }).compile();

    controller = module.get<TreeHealthLogsController>(TreeHealthLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
