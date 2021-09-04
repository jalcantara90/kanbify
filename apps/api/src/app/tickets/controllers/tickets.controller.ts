import { Ticket } from './../entities/ticket.entity';

import { GetTicketsByProjectRequest, TicketsResponse } from './../dtos/tickets.dto';
import { TicketService } from './../services/ticket.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AssignUserDto, CreateTicketDto } from '../dtos/tickets.dto';
import { MongoIdPipe } from '../../shared/mongo-id.pipe';
import { PaginationRequest, Pagination } from '../../shared/pagination.model';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {

  constructor(
    private ticketService: TicketService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiQuery({ type: PaginationRequest })
  @ApiResponse({ status: HttpStatus.OK, description: 'The record has been successfully created.' })
  getTickets(@Query() { page, pageSize, projectId }: PaginationRequest & GetTicketsByProjectRequest): Pagination<TicketsResponse> {
    return this.ticketService.findAll(page, pageSize, projectId) as any;
  }

  @Get(':ticketId')
  @ApiResponse({ description: 'get ticket', status: HttpStatus.ACCEPTED })
  getTicket(@Param('ticketId', MongoIdPipe) ticketId: string) {
    return this.ticketService.findById(ticketId);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Ticket created succsesfully', status: HttpStatus.CREATED, type: Ticket })
  createTickets(@Body() request: CreateTicketDto) {
    return this.ticketService.create(request);
  }

  @Delete(':ticketId')
  deleteTicket(@Param('ticketId', MongoIdPipe) ticketId: string) {
    return this.ticketService.delete(ticketId);
  }

  @Put(':ticketId/assign')
  assignUserTicket(@Param('ticketId', MongoIdPipe) ticketId: string, @Body() request: AssignUserDto) {
    return this.ticketService.assignUser(ticketId, request);
  }
}
