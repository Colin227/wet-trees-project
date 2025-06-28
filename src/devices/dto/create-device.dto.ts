import { IsNumber, IsString } from "class-validator";

export class CreateDeviceDto {
    @IsString()
    deviceId: string;

    @IsNumber()
    zoneId: number;
}
