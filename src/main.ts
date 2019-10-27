import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as mongoose from 'mongoose';

async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-blog-api', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest.js-Blog-API')
    .setDescription('我的第一个NestJS项目')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
