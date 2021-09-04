import { Document, Types } from 'mongoose'
import { User } from '../../users/entities/user.entity';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Project extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: User.name }] })
  members: Types.ObjectId[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
