import { Types } from 'mongoose';
import { PartialType } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateProjectRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  members: Types.ObjectId[];
}

export class UpdateProjectRequest extends PartialType(CreateProjectRequest) {}
