import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getProcessEnv from './lib/getProcessEnv';

const bootstrap = async () => {
  const app: INestApplication = await NestFactory.create(AppModule);

  const PORT: number = Number(getProcessEnv('PORT')) || 8080;
  await app.listen(PORT)
  .then(() => console.log(`this server running on ${PORT}`))
  .catch((error) => console.log(error));
}

bootstrap();