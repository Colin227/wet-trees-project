import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesModule } from './sites/sites.module';
import { TreesModule } from './trees/trees.module';
import { WateringEventsModule } from './watering-events/watering-events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ZonesModule } from './zones/zones.module';
import { TreeHealthLogsModule } from './tree-health-logs/tree-health-logs.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { EnvironmentReadingsModule } from './environment-readings/environment-readings.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes config available everywhere without importing again
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true, // only for dev!
      }),
      inject: [ConfigService],
    }),
    SitesModule,
    TreesModule,
    WateringEventsModule,
    ZonesModule,
    TreeHealthLogsModule,
    DashboardModule,
    EnvironmentReadingsModule,
    DevicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
