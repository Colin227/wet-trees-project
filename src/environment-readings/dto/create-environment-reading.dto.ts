import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEnvironmentReadingDto {
    @IsString()
    deviceId: string;

    @IsOptional()
    @IsNumber()
    moisture?: number;

    @IsOptional()
    @IsNumber()
    temperature?: number;

    @IsOptional()
    @IsNumber()
    humidity?: number;
}
