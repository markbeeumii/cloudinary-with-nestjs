import { Injectable } from '@nestjs/common';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
import {v2 as cloudinary} from 'cloudinary'
import {
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class FileUploadService {

  async create(file: CreateFileUploadDto) {
    try{
       
      if(!file) return new BadRequestException('Fail to upload file.')
      let result = await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
        {
          folder: process.env.CLOUDINARY_FOLDER_NAME,
          public_id: file.originalname.split('.')[0]
        }
      );
   
      return{
        status: 200,
        message: 'File has been uploaded successfully.',
        url: result.secure_url
      }
    }catch(error){
      return new BadRequestException(error)
    }
  }

  findAll() {
    return `This action returns all fileUpload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUpload`;
  }

  update(id: number, updateFileUploadDto: UpdateFileUploadDto) {
    return `This action updates a #${id} fileUpload`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUpload`;
  }
}
