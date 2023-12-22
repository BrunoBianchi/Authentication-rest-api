import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { db } from 'prisma/database';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './Interceptors/log.incerptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await db.$connect();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());
  app.enableCors({
    origin:['*']
  });
  await app.listen(3000);
}
bootstrap();
