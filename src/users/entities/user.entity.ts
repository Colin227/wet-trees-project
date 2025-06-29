import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    passwordHash: string;

    @Column({ default: 'First' })
    firstName: string;

    @Column({ default: 'Last' })
    lastName: string;

    @Column({ default: 'user' })
    role: 'user' | 'admin';

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}