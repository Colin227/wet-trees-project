import { Test, TestingModule } from '@nestjs/testing';
import { WateringEventsController } from './watering-events.controller';
import { WateringEventsService } from './watering-events.service';

describe('WateringEventsController', () => {
  let controller: WateringEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WateringEventsController],
      providers: [WateringEventsService],
    }).compile();

    controller = module.get<WateringEventsController>(WateringEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
