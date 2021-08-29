import { Injectable } from '@nestjs/common';
import { HealthCheck } from '@kanbify/api-interfaces';

@Injectable()
export class AppService {
  getData(): HealthCheck {
    return { status: 'Ok' };
  }
}
