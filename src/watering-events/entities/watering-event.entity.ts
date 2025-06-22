import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tree } from 'src/trees/entities/tree.entity';
import { Zone } from 'src/zones/entities/zone.entity';

@Entity()
export class WateringEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wateredAt: Date;

  @Column({ nullable: true })
  notes: string;

  @Column()
  recordedBy: string;

  @ManyToOne(() => Zone, (zone) => zone.wateringEvents, { onDelete: 'CASCADE'})
  zone: Zone;
}
