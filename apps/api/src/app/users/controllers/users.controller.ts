import { UsersService } from './../services/users.service';
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import config from '../../config';
import { CreateUserDto } from '../dtos/users.dto';
import { MongoIdPipe } from '../../shared/mongo-id.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(
    private userService: UsersService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all Users' })
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId', MongoIdPipe) userId: string) {
    return this.userService.getUser(userId);
  }

  @Post()
  createUser(@Body() request: CreateUserDto) {
    return this.userService.createUser(request);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', MongoIdPipe) userId: string) {
    return this.userService.deleteUser(userId);
  }
}
