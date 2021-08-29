import { Global, Module } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import config from "../config";

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          dbName
        } = configService.mongo;

        return {
          uri: `${connection}://${host}`,
          user,
          pass: password,
          dbName
        };
      },
      inject: [config.KEY]
    })
    // MongooseModule.forRoot('mongodb://localhost:27018/kanbify')
  ],
  exports: [MongooseModule]
}) export class DatabaseModule { }
