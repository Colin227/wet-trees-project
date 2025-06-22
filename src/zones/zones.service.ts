import { Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { Zone } from './entities/zone.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from 'src/sites/entities/site.entity';

@Injectable()
export class ZonesService {

  constructor(
    @InjectRepository(Zone) private readonly zoneRepository: Repository<Zone>,
    @InjectRepository(Site) private readonly siteRepository: Repository<Site>
  ) { }
  
  
  async create(createZoneDto: CreateZoneDto): Promise<Zone> {
    const site = await this.siteRepository.findOneBy({ id: createZoneDto.siteId });
    if (!site) {
      throw new Error(`Site with ID ${createZoneDto.siteId} not found`);
    }

    
    
    const zone = this.zoneRepository.create(createZoneDto);

    zone.site = site;

    return this.zoneRepository.save(zone);
  }

  async findAll(): Promise<Zone[]> {
    return this.zoneRepository.find({
      relations: ['trees', 'wateringEvents'], // Eager load trees and wateringEvents if needed
    });
  }

  async findOne(id: number): Promise<Zone> {
    const zone = await this.zoneRepository.findOne({
      where: { id },
      relations: ['trees', 'wateringEvents'], // Eager load trees and wateringEvents if needed
    });
    if (!zone) {
      throw new Error(`Zone with ID ${id} not found`);
    }
    return zone;
  }

  async update(id: number, updateZoneDto: UpdateZoneDto): Promise<Zone> {
    const zone = await this.findOne(id);
    const site = await this.siteRepository.findOneBy({ id: updateZoneDto.siteId });
    if (!site) {
      throw new Error(`Site with ID ${updateZoneDto.siteId} not found`);
    }

    const updatedZone = this.zoneRepository.merge(zone, updateZoneDto);

    updatedZone.site = site;
    return this.zoneRepository.save(updatedZone); 
  }

  async remove(id: number): Promise<void> {
    const zone = await this.findOne(id);
    await this.zoneRepository.remove(zone);
  }
}
