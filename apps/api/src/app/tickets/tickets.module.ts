import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketsController } from './controllers/tickets.controller';
import { Ticket, TicketSchema } from './entities/ticket.entity';
import { TicketService } from './services/ticket.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ticket.name,
        schema: TicketSchema
      }
    ])
  ],
  controllers: [TicketsController],
  providers: [TicketService]
})
export class TicketsModule {}


