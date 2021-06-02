import { ThunkAction } from 'redux-thunk';
import { RootState } from 'stores';
import * as todoApi from 'lib/api/todo.api';
import { getTodosAsync } from './todo.action';
import { TodoActionType } from './todo.type';

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