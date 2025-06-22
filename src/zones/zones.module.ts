import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { Zone } from './entities/zone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from 'src/sites/entities/site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Zone, Site])],
  controllers: [ZonesController],
  providers: [ZonesService],
})
export class ZonesModule {}
