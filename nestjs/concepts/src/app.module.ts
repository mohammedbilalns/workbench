import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import Joi, * as joi from "joi"
import appConfig from './config/app.config';

//root module - that mounts all other modules 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes config module globally available 
      validationSchema: joi.object({
        APP_NAME: Joi.string().default("defaultAppName") 
      }), // validation schema for the env 
     // load: [appConfig] load config from a file 
      
    }),
    HelloModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
