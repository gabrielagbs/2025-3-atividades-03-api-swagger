import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Informações da API' })
  @ApiResponse({ status: 200, description: 'Status da API retornado com sucesso' })
  getInfo() {
    return this.appService.getInfo();
  }
}
