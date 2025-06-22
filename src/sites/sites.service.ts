import { Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { Repository } from 'typeorm';
import { Tree } from 'src/trees/entities/tree.entity';

@Injectable()
export class SitesService {

  constructor(
    @InjectRepository(Site) private readonly siteRepository: Repository<Site>,
  ) { }


  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    const site = this.siteRepository.create(createSiteDto);
    return this.siteRepository.save(site);
  }

  async findAll(): Promise<Site[]> {
    return this.siteRepository.find({
      relations: ['zones'] // Can eager load trees if needed
    });
  }

  async findOne(id: number): Promise<Site> {
    const site = await this.siteRepository.findOne({
      where: { id },
      relations: ['zones'],
    });
    if (!site) {
      throw new Error(`Site with ID ${id} not found`);
    }
    return site;
  }

  async update(id: number, updateSiteDto: UpdateSiteDto): Promise<Site> {
    const site = await this.findOne(id);
    const updated = this.siteRepository.merge(site, updateSiteDto);
    return this.siteRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const site = await this.findOne(id);
    await this.siteRepository.remove(site);
  }
}
