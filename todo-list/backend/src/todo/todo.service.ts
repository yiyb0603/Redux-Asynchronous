import { Injectable } from '@nestjs/common';
import { CreateTodoDto, ModifyTodoDto } from './dto/todo.dto';
import Todo from './todo.entity';
import TodoRepository from './todo.repository';

@Injectable()
export default class TodoService {
  constructor(
    private readonly todoRepository: TodoRepository,
  ) {}

  public async findAll(): Promise<Todo[]> {
    const todos: Todo[] = await this.todoRepository.findAllOrderByCreatedAtDesc();
    return todos;
  }

  public async findById(id: string): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findById(id);
    return todo;
  }

  public async createTodo(createTodoDto: CreateTodoDto): Promise<void> {
    const { contents, isCompleted } = createTodoDto;

    const todo: Todo = new Todo();
    todo.contents = contents;
    todo.isCompleted = isCompleted;

    await this.todoRepository.save(todo);
  }

  public async modifyTodo(id: string, modifyTodoDto: ModifyTodoDto): Promise<void> {
    const todo: Todo = await this.findById(id);

    todo.contents = modifyTodoDto.contents || todo.contents;
    todo.isCompleted = modifyTodoDto.isCompleted || todo.isCompleted;

    await this.todoRepository.save(todo);
  }

  public async deleteTodo(id: string): Promise<void> {
    const todo: Todo = await this.findById(id);

    await this.todoRepository.remove(todo);
  }
}