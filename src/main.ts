import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { db } from 'prisma/database';
import { error } from 'console';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await db.$connect();
  await app.listen(3000);
}
bootstrap();
