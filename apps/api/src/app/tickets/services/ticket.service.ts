import { AssignUserDto, TicketsResponse, GetTicketsByProjectRequest } from './../dtos/tickets.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateTicketDto } from "../dtos/tickets.dto";
import { Ticket } from "../entities/ticket.entity";
import { TaskStateType } from "../types";
import { Pagination } from '../../shared/pagination.model';

export class TicketService {

  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<Ticket>
  ) {}

  async findAll(page?: number, pageSize?: number, projectId?: Types.ObjectId) {
    const query: GetTicketsByProjectRequest = {};

    if (projectId) {
      query.projectId = projectId;
    }

    const tickets = await this.ticketModel.find(query)
      .limit(pageSize * 1)
      .skip((page - 1) * pageSize)
      .sort( '-title' )
      .populate('assignedTo', '-password -role')
      .exec();

      const total = await this.ticketModel.count(query);

      return new Pagination(
        tickets,
        page,
        total,
        pageSize
      );
  }

  findById(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id).exec();
  }

  create(ticket: CreateTicketDto): Promise<Ticket> {
    return this.ticketModel.create(ticket);
  }

  delete(id: string): Promise<Ticket> {
    return this.ticketModel.findByIdAndRemove(id).exec();
  }

  findByUserId(assignedTo: string): Promise<Ticket[]> {
    return this.ticketModel.find({ assignedTo }).exec();
  }

  findByUserIdAndStatus(assignedTo: string, status: TaskStateType): Promise<Ticket[]> {
    return this.ticketModel.find({ assignedTo, status }).exec();
  }

  findByState(status: TaskStateType): Promise<Ticket[]> {
    return this.ticketModel.find({ status }).exec();
  }

  async assignUser(ticketId: string, request: AssignUserDto) {
    const ticket = await this.findById(ticketId);
    ticket.assignedTo = request.assignedTo;

    return this.ticketModel.findByIdAndUpdate(ticketId, ticket, { new: true }).exec();
  }
}
