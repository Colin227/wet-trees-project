import { IsDateString, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateTreeHealthLogDto {
    @IsDateString()
    date: string;

    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsInt()
    treeId: number;
}
