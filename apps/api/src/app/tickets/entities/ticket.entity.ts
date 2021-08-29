import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

@Schema()
export class Ticket extends Document {
  @Prop({ required: true })
  name: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
