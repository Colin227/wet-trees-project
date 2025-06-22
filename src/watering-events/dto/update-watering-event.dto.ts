import { PartialType } from '@nestjs/mapped-types';
import { CreateWateringEventDto } from './create-watering-event.dto';

export class UpdateWateringEventDto extends PartialType(CreateWateringEventDto) {}
