import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  bulkCreate(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    return this.transactionsService.create(CreateTransactionDto);
  }
}
