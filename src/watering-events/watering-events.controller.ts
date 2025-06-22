import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WateringEventsService } from './watering-events.service';
import { CreateWateringEventDto } from './dto/create-watering-event.dto';
import { UpdateWateringEventDto } from './dto/update-watering-event.dto';

@Controller('watering-events')
export class WateringEventsController {
  constructor(private readonly wateringEventsService: WateringEventsService) {}

  @Post()
  create(@Body() createWateringEventDto: CreateWateringEventDto) {
    return this.wateringEventsService.create(createWateringEventDto);
  }

  @Get()
  findAll() {
    return this.wateringEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wateringEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWateringEventDto: UpdateWateringEventDto) {
    return this.wateringEventsService.update(+id, updateWateringEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wateringEventsService.remove(+id);
  }
}
