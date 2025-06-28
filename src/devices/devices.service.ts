import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from 'src/zones/entities/zone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DevicesService {
  constructor(    
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,

    @InjectRepository(Zone)
      private zoneRepository: Repository<Zone>) {}

  async create(dto: CreateDeviceDto): Promise<Device> {
    const zone = await this.zoneRepository.findOneBy({ id: dto.zoneId });
    if (!zone) throw new NotFoundException('Zone not found');

    const device = this.deviceRepository.create({
      deviceId: dto.deviceId,
      zone
    });
    
    return this.deviceRepository.save(device);
  }


      async findAll(): Promise<Device[]> {
        return this.deviceRepository.find({
          order: { id: 'ASC' },
          relations: ['zone']
        })
      }


  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
