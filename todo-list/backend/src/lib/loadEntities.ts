import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Todo from 'todo/todo.entity';
import ormConfig from '../../ormconfig';

const loadEntities: TypeOrmModuleOptions = {
  ...ormConfig,
  entities: [
    Todo,
  ],
};

export default loadEntities;