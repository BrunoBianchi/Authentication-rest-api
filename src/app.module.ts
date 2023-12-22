import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModel,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
