import { Types } from 'mongoose';
import { TaskState, TaskStateType } from './../types';
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsMongoId } from "class-validator";

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsEnum(TaskState)
  @IsNotEmpty()
  @ApiProperty()
  readonly state: TaskStateType;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly assignedTo: string;

  @IsMongoId()
  @IsNotEmpty()
  readonly projectId: Types.ObjectId;
}

export class AssignUserDto {
  @IsMongoId()
  @IsOptional()
  @ApiProperty()
  readonly assignedTo: Types.ObjectId;
}

export class GetTicketsByProjectRequest {
  @IsOptional()
  @IsMongoId()
  projectId?: Types.ObjectId;
}

export class TicketsResponse {
  title: string;
  description: string;
  state: TaskStateType;
  assignedTo: {
    _id: string;
    name: string;
    imageUrl: string;
  }
}
