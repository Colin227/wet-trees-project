import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateZoneDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    siteId: number;
}
