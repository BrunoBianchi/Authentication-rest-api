import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//Controller pode receber uma string, neste caso, torna-se uma rota / especifica
@Controller('home')
// localhost:3000/home
export class AppController {
  constructor(private readonly appService: AppService) {}

// nos metodos podemos tambem adicionar rotas, neste caso, :id sera valido para qualquer rota apos /home
  @Get(':id')
  // localhost:3000/home/:id 
  getHello(): string {
    return 'oi'
  }
}
