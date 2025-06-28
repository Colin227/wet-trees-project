import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentReadingsService } from './environment-readings.service';

describe('EnvironmentReadingsService', () => {
  let service: EnvironmentReadingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentReadingsService],
    }).compile();

    service = module.get<EnvironmentReadingsService>(EnvironmentReadingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
