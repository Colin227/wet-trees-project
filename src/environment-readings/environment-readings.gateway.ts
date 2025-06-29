import {
    OnGatewayConnection,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EnvironmentReading } from './entities/environment-reading.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@WebSocketGateway({ cors: true })
export class EnvironmentReadingsGateway implements OnGatewayConnection {
    @WebSocketServer()
    server: Server;

    constructor(@InjectRepository(EnvironmentReading)
    private readingRepository: Repository<EnvironmentReading>) { }

    async handleConnection(client: Socket) {
        const latest = await this.readingRepository.find({
            order: { recordedAt: 'DESC' },
            take: 1,
            relations: {
                zone: true
            }
        });

        if (latest && latest.length) {
            client.emit('new-reading', latest[0]);
        }
    }

    sendNewReading(reading: EnvironmentReading) {
        this.server.emit('new-reading', reading);
    }
}