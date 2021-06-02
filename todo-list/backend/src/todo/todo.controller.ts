import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto, ModifyTodoDto } from './dto/todo.dto';
import Todo from './todo.entity';
import TodoService from './todo.service';

@Controller('/todo')
export default class TodoController {
  constructor(
    private readonly todoService: TodoService,
  ) {}  

  @Get('/')
  public async findAll() {
    const todos: Todo[] = await this.todoService.findAll();

    return {
      status: 200,
      message: '리스트 조회 성공.',
      data: {
        todos,
      },
    };
  }

  @Get('/:id')
  public async findById(
    @Param('id') id: string,
  ) {
    const todo: Todo = await this.todoService.findById(id);

    return {
      status: 200,
      message: '조회 성공.',
      data: {
        todo,
      },
    };
  }

  @Post('/')
  public async createTodo(
    @Body() createTodoDto: CreateTodoDto,
  ) {
    await this.todoService.createTodo(createTodoDto);

    return {
      status: 200,
      message: '생성 성공',
    };
  }

  @Put('/:id')
  public async updatedTodo(
    @Param('id') id: string,
    @Body() modifyTodoDto: ModifyTodoDto,
  ) {
    await this.todoService.modifyTodo(id, modifyTodoDto);

    return {
      status: 200,
      message: '수정 성공',
    };
  }

  @Delete('/:id')
  public async deleteTodo(
    @Param('id') id: string,
  ) {
    await this.todoService.deleteTodo(id);

    return {
      status: 200,
      message: '삭제 성공',
    };
  }
}