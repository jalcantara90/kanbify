import { TaskStateType } from '../types';
import { Document, Types } from 'mongoose'
import { User } from '../../users/entities/user.entity';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Project } from '../../projects/entities/project.entity';

@Schema()
export class Ticket extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: String })
  state: TaskStateType;

  @Prop({ type: Types.ObjectId, ref: User.name })
  assignedTo: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: Project.name })
  projectId: Types.ObjectId;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
