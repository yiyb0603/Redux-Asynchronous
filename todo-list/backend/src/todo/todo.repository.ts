import { EntityRepository, Repository } from 'typeorm';
import Todo from './todo.entity';

@EntityRepository(Todo)
export default class TodoRepository extends Repository<Todo> {
  public findAllOrderByCreatedAtDesc() {
    return this.createQueryBuilder('todo')
      .orderBy('todo.createdAt', 'DESC')
      .getMany();
  }

  public findById(id: string) {
    return this.createQueryBuilder('todo')
      .where('todo.id = :id', { id })
      .getOne();
  }
}