import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Site } from './entities/site.entity';

@ApiTags('sites')
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  @ApiOperation({ summary: 'Create site' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Returns all sites' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.sitesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Site,
  })
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.update(+id, updateSiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sitesService.remove(+id);
  }
}
