import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './services/projects.service';
import { Project, ProjectSchema } from './entities/project.entity';
import { ProjectsController } from './controllers/projects.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema: ProjectSchema
      }
    ])
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}


