import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { UpdateDeviceConfigDto } from './dto/update-device-config.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @Get(":id/config")
  getConfig(@Param('id') id: string) {
    return this.devicesService.getConfig(id);
  }

  @Patch(":id/config")
  updateConfig(@Param('id') id: string, @Body() dto: UpdateDeviceConfigDto) {
    return this.devicesService.updateConfig(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.remove(+id);
  }
}
