import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from 'nestjs-typegoose';

// 装饰器，相当于对AppModule的注解，模块
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/nest-blog-api', {
      useNewUrlParser: true,
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
