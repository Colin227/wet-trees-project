import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Request() req) {
        return req.user; // Populated by JwtStrategy.validate()
    }
    @Post()
    async register(@Body() createUserDto: CreateUserDto): Promise<Omit<User, 'passwordHash'>> {
        const user = await this.usersService.create(createUserDto);
        const { passwordHash, ...safeUser } = user;
        return safeUser;
    }
}
