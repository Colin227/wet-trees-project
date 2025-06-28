import { Module } from '@nestjs/common';
import { TreeHealthLogsService } from './tree-health-logs.service';
import { TreeHealthLogsController } from './tree-health-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeHealthLog } from './entities/tree-health-log.entity';
import { Tree } from 'src/trees/entities/tree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TreeHealthLog, Tree])],
  controllers: [TreeHealthLogsController],
  providers: [TreeHealthLogsService],
})
export class TreeHealthLogsModule {}
