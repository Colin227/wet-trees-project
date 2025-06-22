import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateZoneDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsInt()
    siteId: number;
}
