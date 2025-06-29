import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SafeUserDto {

    @IsNotEmpty()
    id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;
}