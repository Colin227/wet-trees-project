import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tree } from './entities/tree.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Repository } from 'typeorm';
import { Zone } from 'src/zones/entities/zone.entity';

@Injectable()
export class TreesService {
  constructor(
    @InjectRepository(Tree)
    private treeRepository: Repository<Tree>,

    @InjectRepository(Zone)
    private zoneRepository: Repository<Zone>,
  ) { }

  
  async create(createTreeDto: CreateTreeDto): Promise<Tree> {
    const zone = await this.zoneRepository.findOneBy({ id: createTreeDto.zoneId });
    if (!zone) {
      throw new NotFoundException(`Zone with ID ${createTreeDto.zoneId} not found`);
    }

    const tree = this.treeRepository.create({ ...createTreeDto, zone });
    return this.treeRepository.save(tree);
  }


  findAll(): Promise<Tree[]> {
    return this.treeRepository.find({ relations: ['zone'] });
  }


  async findOne(id: number) {
    const tree = await this.treeRepository.findOne({
      where: { id },
      relations: ['zone'],
    });
    if (!tree) {
      throw new Error(`Tree with ID ${id} not found`);
    }
    return tree;
  }

  async update(id: number, updateTreeDto: UpdateTreeDto) {
    const tree = await this.findOne(id);
    const updatedTree = this.treeRepository.merge(tree, updateTreeDto);
    return this.treeRepository.save(updatedTree);
  }

  async remove(id: number): Promise<void> {
    const tree = await this.findOne(id)
    await this.treeRepository.remove(tree);
  }
}
