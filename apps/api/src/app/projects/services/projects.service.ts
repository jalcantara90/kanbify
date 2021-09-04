import { UpdateProjectRequest } from './../dtos/projects.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectRequest } from '../dtos/projects.dto';
import { Project } from '../entities/project.entity';

export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>
  ) {}

  findAll() {
    return this.projectModel.find({})
      .sort( '-name' )
      .populate('members', '-password -role')
      .exec();
  }

  findById(projectId: string) {
    return this.projectModel.findById(projectId).exec();
  }

  create(request: CreateProjectRequest) {
    return this.projectModel.create(request);
  }

  async update(projectId: string, request: UpdateProjectRequest) {
    const model = await this.projectModel.findById(projectId).exec();
    model.name = request.name;
    model.description = request.description;
    model.members = request.members;
    await model.save();

    return model;
  }

  delete(projectId: string) {
    return this.projectModel.findByIdAndRemove(projectId);
  }
}
