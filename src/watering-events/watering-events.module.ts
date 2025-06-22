import { Module } from '@nestjs/common';
import { WateringEventsService } from './watering-events.service';
import { WateringEventsController } from './watering-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WateringEvent } from './entities/watering-event.entity';
import { Zone } from 'src/zones/entities/zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WateringEvent, Zone])],
  controllers: [WateringEventsController],
  providers: [WateringEventsService],
})
export class WateringEventsModule { }
