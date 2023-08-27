import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule, CloudinaryService } from 'nestjs-cloudinary';

@Module({
  // imports: [
  //   CloudinaryService,
  //   ConfigModule.forRoot()
  // ],
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports : [FileUploadService]
})
export class FileUploadModule {}
