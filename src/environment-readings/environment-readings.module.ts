import { Module } from '@nestjs/common';
import { EnvironmentReadingsService } from './environment-readings.service';
import { EnvironmentReadingsController } from './environment-readings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from 'src/zones/entities/zone.entity';
import { EnvironmentReading } from './entities/environment-reading.entity';
import { Device } from 'src/devices/entities/device.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([EnvironmentReading, Zone, Device])
    ],
  controllers: [EnvironmentReadingsController],
  providers: [EnvironmentReadingsService],
})
export class EnvironmentReadingsModule {}
