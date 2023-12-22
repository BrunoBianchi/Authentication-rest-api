import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [forwardRef(()=>UserModel),forwardRef(()=>AuthModule),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
      ignoreUserAgents:[/googlebot/gi]
    }]),
],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_GUARD,
    useClass:ThrottlerGuard
  }],
})
export class AppModule {

}
