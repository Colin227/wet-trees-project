import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import { Tree } from 'src/trees/entities/tree.entity';
import { Zone } from 'src/zones/entities/zone.entity';
import { Site } from 'src/sites/entities/site.entity';
import { WateringEvent } from 'src/watering-events/entities/watering-event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tree, Zone, Site, WateringEvent])
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
