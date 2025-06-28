import { PartialType } from '@nestjs/swagger';
import { CreateEnvironmentReadingDto } from './create-environment-reading.dto';

export class UpdateEnvironmentReadingDto extends PartialType(CreateEnvironmentReadingDto) {}
