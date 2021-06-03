import { createReducer } from 'typesafe-actions';
import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
} from './todo.action';
import { TodoActionType, TodoInitialType } from './todo.type';

const initialState: TodoInitialType = {
  loading: true,
  data: {
    todos: [],
    todo: null,
  },
  response: null,
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
      todos: action.payload.data.todos,
    },
    loading: false,
  }),

  [GET_TODOS_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),

  [CREATE_TODO]: (state) => ({
    ...state,
    loading: true,
  }),

  [CREATE_TODO_SUCCESS]: (state, action) => ({
    ...state,
    response: action.payload,
    loading: false,
    error: null,
  }),

  [CREATE_TODO_ERROR]: (state, action) => ({
    ...state,
    data: null,
    loading: false,
    error: action.payload,
  }),

  [DELETE_TODO]: (state) => ({
    ...state,
    loading: true,
  }),

  [DELETE_TODO_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    response: action.payload,
    error: null,
  }),

  [DELETE_TODO_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    response: null,
    error: action.payload,
  }),
});

export default todoReducer;