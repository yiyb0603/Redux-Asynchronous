import { ITodoDto } from 'interface/todo.interface';
import customAxios from 'lib/customAxios';

const getTodos = async () => {
  const { data } = await customAxios.get('/todo');
  return data;
}

const createTodo = async (todoDto: ITodoDto) => {
  const { data } = await customAxios.post('/todo', todoDto);
  return data;
}

const deleteTodo = async (id: string) => {
  const { data } = await customAxios.delete(`/todo/${id}`);
  return data;
}

export {
  getTodos,
  createTodo,
  deleteTodo,
};