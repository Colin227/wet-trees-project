import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { WateringEvent } from 'src/watering-events/entities/watering-event.entity';
import { Zone } from 'src/zones/entities/zone.entity';


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

}
