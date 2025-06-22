import { IsNotEmpty, IsDateString, IsNumber, IsOptional, IsString, IsInt } from "class-validator";

export class CreateWateringEventDto {
    @IsNotEmpty()
    @IsDateString()
    wateredAt: string;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsNotEmpty()
    @IsString()
    recordedBy: string;

    @IsNotEmpty()
    @IsInt()
    zoneId: number;
}
