export interface CreateFileUploadDto {
  filename : string
  originalname : string
  encoding : string
  mimetype : string
  buffer: Buffer | string
  size : number | string
}
