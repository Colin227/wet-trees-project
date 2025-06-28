import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentReadingsController } from './environment-readings.controller';
import { EnvironmentReadingsService } from './environment-readings.service';

describe('EnvironmentReadingsController', () => {
  let controller: EnvironmentReadingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentReadingsController],
      providers: [EnvironmentReadingsService],
    }).compile();

    controller = module.get<EnvironmentReadingsController>(EnvironmentReadingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
