import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const existing = await this.userRepository.findOneBy({ email: createUserDto.email });
        if (existing) {
            throw new ConflictException('Email is already in use');
        }

        const passwordHash = await bcrypt.hash(createUserDto.password, 10);
        const user = this.userRepository.create({
            email: createUserDto.email,
            passwordHash
        });

        return this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email });
    }

    async findById(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }
}
