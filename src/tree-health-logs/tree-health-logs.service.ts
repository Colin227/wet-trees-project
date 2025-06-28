import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTreeHealthLogDto } from './dto/create-tree-health-log.dto';
import { UpdateTreeHealthLogDto } from './dto/update-tree-health-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tree } from 'src/trees/entities/tree.entity';
import { Repository } from 'typeorm';
import { TreeHealthLog } from './entities/tree-health-log.entity';


@Injectable()
export class TreeHealthLogsService {

  constructor(
    @InjectRepository(TreeHealthLog)
    private readonly healthLogRepository: Repository<TreeHealthLog>,

    @InjectRepository(Tree)
    private readonly treeRepository: Repository<Tree>,
  ) { }


  async create(createTreeHealthLogDto: CreateTreeHealthLogDto): Promise<TreeHealthLog> {
    const tree = await this.treeRepository.findOneBy({ id: createTreeHealthLogDto.treeId });
    if (!tree) {
      throw new NotFoundException(`Tree with ID ${createTreeHealthLogDto.treeId} not found`);
    }

    // Create and save the health log
    const log = this.healthLogRepository.create({
      date: new Date(createTreeHealthLogDto.date),
      status: createTreeHealthLogDto.status,
      notes: createTreeHealthLogDto.notes,
      tree, // attach the tree
    });

    return this.healthLogRepository.save(log);



    
  }

  async findAll(): Promise<TreeHealthLog[]> {
    return this.healthLogRepository.find();
  }

  async findOne(id: number): Promise<TreeHealthLog> {
    const log = await this.healthLogRepository.findOne({
      where: { id },
    })
    if (!log) {
      throw new Error(`Log with ID ${id} not found`);
    }
    return log;
  }

  async update(id: number, updateTreeHealthLogDto: UpdateTreeHealthLogDto) {
    const log = await this.findOne(id)
    const tree = await this.treeRepository.findOneBy({ id: updateTreeHealthLogDto.treeId });
    if (!tree) {
      throw new Error(`Tree with ID ${updateTreeHealthLogDto.treeId} not found`);
    }

    const updatedLog = this.healthLogRepository.merge(log, updateTreeHealthLogDto);

    updatedLog.tree = tree;
    return this.healthLogRepository.save(updatedLog);
  }

  remove(id: number) {
    return `This action removes a #${id} treeHealthLog`;
  }
}