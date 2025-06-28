import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { WateringEvent } from 'src/watering-events/entities/watering-event.entity';
import { Zone } from 'src/zones/entities/zone.entity';
import { TreeHealthLog } from 'src/tree-health-logs/entities/tree-health-log.entity';


@Entity()
export class Tree {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  species: string;
  @Column()
  plantedAt: Date;

  @Column()
  status: string;


  @ManyToOne(() => Zone, (zone) => zone.trees)
  zone: Zone;

  @OneToMany(() => TreeHealthLog, (log) => log.tree, { cascade: true })
  healthLogs: TreeHealthLog[];

}
