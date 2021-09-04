import { Project } from './../entities/project.entity';
import { UpdateProjectRequest } from './../dtos/projects.dto';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from '../../shared/mongo-id.pipe';
import { ProjectsService } from '../services/projects.service';
import { CreateProjectRequest } from '../dtos/projects.dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {

  constructor(
    private projectService: ProjectsService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all projects' })
  @ApiResponse({ status: HttpStatus.OK, description: 'The record has been successfully created.' })
  getProjects() {
    return this.projectService.findAll();
  }

  @Get(':projectId')
  @ApiResponse({ description: 'get Project', status: HttpStatus.ACCEPTED })
  getProject(@Param('projectId', MongoIdPipe) projectId: string) {
    return this.projectService.findById(projectId);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Project created succsesfully', status: HttpStatus.CREATED, type: Project })
  createTickets(@Body() request: CreateProjectRequest) {
    return this.projectService.create(request);
  }

  @Delete(':projectId')
  deleteTicket(@Param('projectId', MongoIdPipe) projectId: string) {
    return this.projectService.delete(projectId);
  }

  @Put(':projectId')
  assignUserTicket(@Param('projectId', MongoIdPipe) projectId: string, @Body() request: UpdateProjectRequest) {
    return this.projectService.update(projectId, request);
  }
}
