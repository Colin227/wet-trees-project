import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnvironmentReadingsService } from './environment-readings.service';
import { CreateEnvironmentReadingDto } from './dto/create-environment-reading.dto';
import { UpdateEnvironmentReadingDto } from './dto/update-environment-reading.dto';

@Controller('environment-readings')
export class EnvironmentReadingsController {
  constructor(private readonly environmentReadingsService: EnvironmentReadingsService) {}

  @Post()
  create(@Body() dto: CreateEnvironmentReadingDto) {
    return this.environmentReadingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.environmentReadingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.environmentReadingsService.findOne(+id);
  }

  @Get('device/:deviceId')
  findByDevice(@Param('deviceId') deviceId: string) {
    return this.environmentReadingsService.findByDeviceId(deviceId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvironmentReadingDto: UpdateEnvironmentReadingDto) {
    return this.environmentReadingsService.update(+id, updateEnvironmentReadingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.environmentReadingsService.remove(+id);
  }
}
