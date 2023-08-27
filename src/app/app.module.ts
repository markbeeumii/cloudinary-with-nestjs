import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from 'src/modules/file-upload/file-upload.module';
import {CloudinaryModule} from 'nestjs-cloudinary'
import {ConfigModule, ConfigService } from '@nestjs/config'
import {v2} from 'cloudinary'
import {config} from 'dotenv'



@Module({
  imports: [
    ConfigModule.forRoot({envFilePath : '.env'}),
    FileUploadModule,
    CloudinaryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService : ConfigService)=>({
        cloud_name: configService.get<string>('CLOUDINARY_NAME'),
        api_key: configService.get<string>('CLOUDINARY_APIKEY'),
        api_secret: configService.get<string>('CLOUDINARY_APISECRET'),
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
