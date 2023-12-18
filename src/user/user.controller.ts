import { Body, Controller, Header, Headers, Post } from '@nestjs/common';
import { db } from 'prisma/database';
import { CrudeService } from './crude.services';
@Controller('users')
export class UserController {
    constructor(private readonly crude:CrudeService){}
  @Post()
  async create(@Body() body,@Headers() header) {
    await this.crude.createUser(body).then(res=>{
        console.log(res)
      return {res};
    }).catch(err=>{
        return err;
    })
  }
}
