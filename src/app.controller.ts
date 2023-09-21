import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('find')
  findWord(@Query('word') word: string, @Query('lang') lang: string){
    return this.appService.findWord(word, lang);
  }
}
