import { Zone } from 'src/zones/entities/zone.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Site {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @OneToMany(() => Zone, (zone) => zone.site, { cascade: true })
    zones: Zone[];

    

}