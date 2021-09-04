import { UsersService } from './services/users.service';
import { User, UserSchema } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}


