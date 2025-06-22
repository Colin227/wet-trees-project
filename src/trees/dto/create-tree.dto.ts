import { IsNotEmpty, IsString, IsDateString, IsEnum, IsInt } from 'class-validator';

export enum TreeStatus {
    HEALTHY = 'healthy',
    NEEDS_ATTENTION = 'needs_attention',
    DEAD = 'dead',
}

export class CreateTreeDto {
    @IsNotEmpty()
    @IsString()
    species: string;

    @IsNotEmpty()
    @IsDateString()
    plantedAt: string;

    @IsEnum(TreeStatus)
    status: TreeStatus;

    @IsNotEmpty()
    @IsInt()
    zoneId: number;
}
