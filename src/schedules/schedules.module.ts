import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TreeStatusCron } from './tree-status.cron';
import { TreesModule } from '../trees/trees.module';

@Module({
  imports: [ScheduleModule.forRoot(), TreesModule],
  providers: [TreeStatusCron],
})
export class SchedulesModule {}