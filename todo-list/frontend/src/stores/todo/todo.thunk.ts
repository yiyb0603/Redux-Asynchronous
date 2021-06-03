import { ThunkAction } from 'redux-thunk';
import { RootState } from 'stores';
import * as todoApi from 'lib/api/todo.api';
import { createTodoAsync, deleteTodoAsync, getTodosAsync } from './todo.action';
import { TodoActionType } from './todo.type';
import { ITodoDto } from 'interface/todo.interface';

export const getTodosThunk = (): ThunkAction<void, RootState, null, TodoActionType> => {
  return async (dispatch) => {
    const { request, success, failure } = getTodosAsync;
    dispatch(request());

    try {
      const data = await todoApi.getTodos();
      dispatch(success(data));
    } catch (error) {
      dispatch(failure(error));
    }
  }
}

export const createTodoThunk = (todoDto: ITodoDto): ThunkAction<void, RootState, null, TodoActionType> => {
  return async (dispatch) => {
    const { request, success, failure } = createTodoAsync;
    dispatch(request());

    try {
      const data = await todoApi.createTodo(todoDto);
      dispatch(success(data));
    } catch (error) {
      dispatch(failure(error));
    }
  }
}

export const deleteTodoThunk = (id: string): ThunkAction<void, RootState, null, TodoActionType> => {
  return async (dispatch) => {
    const { request, success, failure } = deleteTodoAsync;
    dispatch(request());

    try {
      const data = await todoApi.deleteTodo(id);
      dispatch(success(data));
    } catch (error) {
      dispatch(failure(error));
    }
  }
}