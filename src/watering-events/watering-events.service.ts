import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWateringEventDto } from './dto/create-watering-event.dto';
import { UpdateWateringEventDto } from './dto/update-watering-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WateringEvent } from './entities/watering-event.entity';
import { Tree } from 'src/trees/entities/tree.entity';
import { Repository } from 'typeorm';
import { Zone } from 'src/zones/entities/zone.entity';

@Injectable()
export class WateringEventsService {
  constructor(
    @InjectRepository(WateringEvent)
    private wateringEventRepository: Repository<WateringEvent>,

    @InjectRepository(Zone)
    private zoneRepository: Repository<Zone>,
  ) {}

  async create(createDto: CreateWateringEventDto): Promise<WateringEvent> {
    const zone = await this.zoneRepository.findOneBy({ id: createDto.zoneId });
    if (!zone) throw new NotFoundException(`Zone with ID ${createDto.zoneId} not found`);

    const event = this.wateringEventRepository.create({
      ...createDto,
      wateredAt: new Date(createDto.wateredAt),
      zone,
    });

    return this.wateringEventRepository.save(event);
  }

  async findAll(): Promise<WateringEvent[]> {
    return this.wateringEventRepository.find({
      relations: ['zone'], // Eager load related entities
    });
  }

  async findOne(id: number): Promise<WateringEvent> {
    const event = await this.wateringEventRepository.findOne({
      where: { id },
      relations: ['zone'],
    });
    if (!event) throw new NotFoundException(`Watering event with ID ${id} not found`);
    return event;
  }

  async update(id: number, updateDto: UpdateWateringEventDto): Promise<WateringEvent> {
    const event = await this.findOne(id);

    if (updateDto.zoneId) {
      const newZone = await this.zoneRepository.findOneBy({ id: updateDto.zoneId });
      if (!newZone) throw new NotFoundException(`Zone with ID ${updateDto.zoneId} not found`);
      event.zone = newZone;
    }

    const updated = this.wateringEventRepository.merge(event, updateDto);
    return this.wateringEventRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const event = await this.findOne(id);
    await this.wateringEventRepository.remove(event);
  }
}
