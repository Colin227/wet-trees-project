import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';

import { Tree } from 'src/trees/entities/tree.entity';
import { Zone } from 'src/zones/entities/zone.entity';
import { Site } from 'src/sites/entities/site.entity';
import { WateringEvent } from 'src/watering-events/entities/watering-event.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Tree)
    private readonly treeRepo: Repository<Tree>,

    @InjectRepository(Zone)
    private readonly zoneRepo: Repository<Zone>,

    @InjectRepository(Site)
    private readonly siteRepo: Repository<Site>,

    @InjectRepository(WateringEvent)
    private readonly wateringRepo: Repository<WateringEvent>,
  ) {}

  async getStats() {
    const [totalTrees, treesNeedingAttention, totalSites, totalZones, recentWaterings] =
      await Promise.all([
        this.treeRepo.count(),
        this.treeRepo.count({ where: { status: 'needs_attention' } }),
        this.siteRepo.count(),
        this.zoneRepo.count(),
        this.wateringRepo.count({
          where: {
            wateredAt: MoreThan(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
          },
        }),
      ]);

    return {
      totalTrees,
      treesNeedingAttention,
      totalSites,
      totalZones,
      recentWaterings,
    };
  }

  async getWateringCoverage() {
    const totalZones = await this.zoneRepo.count();
    const dateXDaysAgo = new Date();
    dateXDaysAgo.setDate(dateXDaysAgo.getDate() - 7);
    const wateredZoneIds = await this.wateringRepo
    .createQueryBuilder('watering')
    .select('DISTINCT watering.zoneId', 'zoneId')
    .where('watering.wateredAt > :cutoff', { cutoff: dateXDaysAgo })
    .getRawMany()

    const wateredCount = wateredZoneIds.length;

    return {
      wateringCoverage: Math.round((wateredCount / totalZones) * 100),
    };
  }
}
