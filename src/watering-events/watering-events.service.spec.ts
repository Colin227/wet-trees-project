import { Test, TestingModule } from '@nestjs/testing';
import { WateringEventsService } from './watering-events.service';

describe('WateringEventsService', () => {
  let service: WateringEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WateringEventsService],
    }).compile();

    service = module.get<WateringEventsService>(WateringEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
