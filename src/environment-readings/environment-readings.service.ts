import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnvironmentReadingDto } from './dto/create-environment-reading.dto';
import { UpdateEnvironmentReadingDto } from './dto/update-environment-reading.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EnvironmentReading } from './entities/environment-reading.entity';
import { Repository } from 'typeorm';
import { Zone } from 'src/zones/entities/zone.entity';
import { Device } from 'src/devices/entities/device.entity';

@Injectable()
export class EnvironmentReadingsService {
  constructor(
    @InjectRepository(EnvironmentReading)
    private readingRepository: Repository<EnvironmentReading>,

    @InjectRepository(Zone)
    private zoneRepository: Repository<Zone>,

    @InjectRepository(Device)
    private deviceRepository: Repository<Device>
  ) {}

  async create(dto: CreateEnvironmentReadingDto): Promise<EnvironmentReading> {

    const device = await this.deviceRepository.findOneBy({ deviceId: dto.deviceId })
    if (!device) throw new NotFoundException('Device not registered');


    const reading = this.readingRepository.create({
      zone: device.zone,
      moisture: dto.moisture,
      temperature: dto.temperature,
      humidity: dto.humidity
    });

    return this.readingRepository.save(reading);
  }

  async findAll(): Promise<EnvironmentReading[]> {
    return this.readingRepository.find({
      order: { recordedAt: 'DESC' },
      relations: ['zone']
    })
  }

  async findByDeviceId(deviceId: string): Promise<EnvironmentReading[]> {
    const device = await this.deviceRepository.findOne({
      where: { deviceId },
      relations: [ 'zone' ]
    });
    if (!device) throw new NotFoundException('Device not found');

    return this.readingRepository.find({
      where: { zone: { id: device.zone.id } },
      order: { recordedAt: 'ASC' },
      take: 100, // Can limit this however we want
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} environmentReading`;
  }

  update(id: number, updateEnvironmentReadingDto: UpdateEnvironmentReadingDto) {
    return `This action updates a #${id} environmentReading`;
  }

  remove(id: number) {
    return `This action removes a #${id} environmentReading`;
  }
}
