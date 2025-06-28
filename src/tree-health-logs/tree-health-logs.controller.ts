import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreeHealthLogsService } from './tree-health-logs.service';
import { CreateTreeHealthLogDto } from './dto/create-tree-health-log.dto';
import { UpdateTreeHealthLogDto } from './dto/update-tree-health-log.dto';

@Controller('tree-health-logs')
export class TreeHealthLogsController {
  constructor(private readonly treeHealthLogsService: TreeHealthLogsService) {}

  @Post()
  create(@Body() createTreeHealthLogDto: CreateTreeHealthLogDto) {
    return this.treeHealthLogsService.create(createTreeHealthLogDto);
  }

  @Get()
  findAll() {
    return this.treeHealthLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treeHealthLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreeHealthLogDto: UpdateTreeHealthLogDto) {
    return this.treeHealthLogsService.update(+id, updateTreeHealthLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treeHealthLogsService.remove(+id);
  }
}
