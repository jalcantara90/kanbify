import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, type: String, unique: true }) email: string;
  @Prop({ required: true, type: String }) password: string;
  @Prop({ required: true, type: String }) role: string;
  @Prop({ required: true, type: String }) name: string;
  @Prop({ required: false, type: String }) imageUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
