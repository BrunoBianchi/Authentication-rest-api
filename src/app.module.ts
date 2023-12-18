import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel } from './user/user.module';

@Module({
  imports: [UserModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
