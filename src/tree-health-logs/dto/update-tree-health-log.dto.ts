import { PartialType } from '@nestjs/swagger';
import { CreateTreeHealthLogDto } from './create-tree-health-log.dto';

export class UpdateTreeHealthLogDto extends PartialType(CreateTreeHealthLogDto) {}
