import { NestMiddleware, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { NextFunction } from 'express';
import { CrudeService } from 'src/user/crude.service';

export class UserIdCheckMiddleware
  extends CrudeService
  implements NestMiddleware
{
    //Criando middleware que vai funcionar para checar se existe membro valido no banco de dados, se existir ele vai prosseguir
    //Se nao existir, ele manda erro falando que nao existe!
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware ativado!');
    
 


    let id = req.url.split('/')[2];
    if ((await this.exists(id)) >= 1) {
      return next();
    } else {
      throw new NotFoundException(`Usuario com id ${id} nao encontrado!`);
    }
  }
}
