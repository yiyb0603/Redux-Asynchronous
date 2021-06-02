import { createReducer } from 'typesafe-actions';
import { GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS } from './todo.action';
import { TodoActionType, TodoInitialType } from './todo.type';

const initialState: TodoInitialType = {
  loading: true,
  data: null,
  error: null,
};

const todoReducer = createReducer<TodoInitialType, TodoActionType>(initialState, {
  [GET_TODOS]: (state) => ({
    ...state,
    loading: true,
  }),

  [GET_TODOS_SUCCESS]: (state, action) => ({
    ...state,
    data: {
      todos: action.payload,
    },
    loading: false,
  }),

  [GET_TODOS_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default todoReducer;