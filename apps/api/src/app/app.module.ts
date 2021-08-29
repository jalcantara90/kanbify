import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TicketsModule,
    ConfigModule.forRoot({
      envFilePath: '.api-kanbify.dev.env',
      isGlobal: true,
      load: [config]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
