import { Controller, Get } from '@nestjs/common';

import { HealthCheck } from '@kanbify/api-interfaces';

import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Base')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Health check'})
  getData(): HealthCheck {
    return this.appService.getData();
  }
}
