import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Ticket } from "../entities/ticket.entity";


export class TicketService {

  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<Ticket>
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketModel.find({}).exec();
  }

  findById(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id).exec();
  }

  create(ticket: Ticket): Promise<Ticket> {
    return this.ticketModel.create(ticket);
  }

  // update(ticket: Ticket): Promise<Ticket> {
  //   return this.ticketModel.findByIdAndUpdate(ticket._id, ticket, { new: true }).exec();
  // }

  delete(id: string): Promise<Ticket> {
    return this.ticketModel.findByIdAndRemove(id).exec();
  }

  findByUserId(userId: string): Promise<Ticket[]> {
    return this.ticketModel.find({ userId }).exec();
  }

  findByUserIdAndStatus(userId: string, status: string): Promise<Ticket[]> {
    return this.ticketModel.find({ userId, status }).exec();
  }

  findByStatus(status: string): Promise<Ticket[]> {
    return this.ticketModel.find({ status }).exec();
  }
}
