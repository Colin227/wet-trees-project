import { Zone } from "src/zones/entities/zone.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    deviceId: string;

    @ManyToOne(() => Zone, (zone) => zone.devices, { eager: true })
    zone: Zone;
}
