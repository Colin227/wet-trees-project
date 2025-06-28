import { Device } from 'src/devices/entities/device.entity';
import { EnvironmentReading } from 'src/environment-readings/entities/environment-reading.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Tree } from 'src/trees/entities/tree.entity';
import { WateringEvent } from 'src/watering-events/entities/watering-event.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';


@Entity()
export class Zone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Site, site => site.zones, { onDelete: 'CASCADE' })
    site: Site;

    @OneToMany(() => Tree, tree => tree.zone)
    trees: Tree[];

    @OneToMany(() => WateringEvent, event => event.zone)
    wateringEvents: WateringEvent[];

    @OneToMany(() => EnvironmentReading, (reading) => reading.zone)
    environmentReadings: EnvironmentReading[];

    @OneToMany(() => Device, (device) => device.zone)
    devices: Device[];

}
