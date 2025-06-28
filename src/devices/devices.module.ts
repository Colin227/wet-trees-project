import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { Device } from './entities/device.entity';
import { Zone } from 'src/zones/entities/zone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Device, Zone])
  ],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule { }
