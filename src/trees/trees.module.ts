import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tree } from 'src/trees/entities/tree.entity';
import { Zone } from 'src/zones/entities/zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tree, Zone])],
  controllers: [TreesController],
  providers: [TreesService],
})
export class TreesModule {}
