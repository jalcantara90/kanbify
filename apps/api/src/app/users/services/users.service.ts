import { CreateUserDto } from './../dtos/users.dto';
import { User } from './../entities/user.entity';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = new this.userModel(user);

    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;

    const entity = await newUser.save();

    return this.extractPassword(entity);
  }

  async getUser(userId: string) {
    const entity = await this.userModel.findById(userId).exec();
    return this.extractPassword(entity);
  }

  private extractPassword(entity: User) {
    const { password, ...user } = entity.toJSON();
    return user;
  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return users.map(this.extractPassword);
  }

  deleteUser(userId: string) {
    return this.userModel.findByIdAndDelete(userId);
  }
}
