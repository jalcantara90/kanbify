import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import config from '../../config';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  getTickets() {
    return {
      data: this.configService.mongo
    };
  }
}
