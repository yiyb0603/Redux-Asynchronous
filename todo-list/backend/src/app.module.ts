import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import loadEntities from 'lib/loadEntities';
import TodoModule from 'todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(loadEntities),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
