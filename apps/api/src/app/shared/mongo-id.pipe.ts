import { isMongoId } from 'class-validator';
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: string) {
    if (!isMongoId(value)) throw new BadRequestException('Is not valid Id');

    return value;
  }
}
