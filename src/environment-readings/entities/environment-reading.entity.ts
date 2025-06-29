import { Zone } from "src/zones/entities/zone.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EnvironmentReading {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float', { nullable: true })
    moisture: number;

    @Column('float', { nullable: true })
    temperature: number;

    @Column('float', { nullable: true })
    humidity: number;

    @CreateDateColumn({ type: 'timestamptz' })
    recordedAt: Date;

    @ManyToOne(() => Zone, (zone) => zone.environmentReadings, {
        onDelete: 'CASCADE',
        eager: true,
    })
    zone: Zone;
}
