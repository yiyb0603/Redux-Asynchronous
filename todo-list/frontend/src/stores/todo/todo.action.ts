import { AxiosError, AxiosResponse } from 'axios';
import { createAsyncAction } from 'typesafe-actions';

export const GET_TODOS = 'todo/GET_TODOS' as const;
export const GET_TODOS_SUCCESS = 'todo/GET_TODOS_SUCCESS' as const;
export const GET_TODOS_ERROR = 'todo/GET_TODOS_ERROR' as const;

export const getTodosAsync = createAsyncAction(
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
)<undefined, AxiosResponse, AxiosError>();

export const CREATE_TODO = 'todo/CREATE_TODO' as const;
export const CREATE_TODO_SUCCESS = 'todo/CREATE_TODO_SUCCESS' as const;
export const CREATE_TODO_ERROR = 'todo/CREATE_TODO_ERROR' as const;

export const createTodoAsync = createAsyncAction(
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR
)<undefined, AxiosResponse, AxiosError>();

export const MODIFY_TODO = 'todo/MODIFY_TODO' as const;

export const DELETE_TODO = 'todo/DELETE_TODO' as const;
export const DELETE_TODO_SUCCESS = 'todo/DELETE_TODO_SUCCESS' as const;
export const DELETE_TODO_ERROR = 'todo/DELETE_TODO_ERROR' as const;

export const deleteTodoAsync = createAsyncAction(
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR
)<undefined, AxiosResponse, AxiosError>();