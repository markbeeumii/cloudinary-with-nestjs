import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller({
  path: 'api/file-upload',
})
@UseInterceptors(FileInterceptor('file'))
//@ApiConsumes('multipart/form-data')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    //private readonly 
    ) {}

  @Post('/upload')
  create(@UploadedFile() file : CreateFileUploadDto) {
    return this.fileUploadService.create(file);
  }

 /*
  @Get()
  findAll() {
    return this.fileUploadService.findAll();
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileUploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileUploadDto: UpdateFileUploadDto) {
    return this.fileUploadService.update(+id, updateFileUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileUploadService.remove(+id);
  }

  */
}
