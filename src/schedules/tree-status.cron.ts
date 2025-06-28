import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TreesService } from '../trees/trees.service';

@Injectable()
export class TreeStatusCron {
  constructor(private readonly treesService: TreesService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async updateTreeStatuses() {
    await this.treesService.updateTreeStatuses();
  }
}