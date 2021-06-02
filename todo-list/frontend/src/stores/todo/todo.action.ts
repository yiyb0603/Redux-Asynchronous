import { AxiosError } from 'axios';
import { ITodo } from 'interface/todo.interface';
import { createAsyncAction } from 'typesafe-actions';

export const GET_TODOS = 'todo/GET_TODOS' as const;
export const GET_TODOS_SUCCESS = 'todo/GET_TODOS_SUCCESS' as const;
export const GET_TODOS_ERROR = 'todo/GET_TODOS_ERROR' as const;

export const getTodosAsync = createAsyncAction(
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
)<undefined, ITodo[], AxiosError>();

export const CREATE_TODO = 'todo/CREATE_TODO' as const;
export const CREATE_TODO_SUCCESS = 'todo/CREATE_TODO_SUCCESS' as const;
export const CREATE_TODO_ERROR = 'todo/CREATE_TODO_ERROR' as const;

export const MODIFY_TODO = 'todo/MODIFY_TODO' as const;

export const DELETE_TODO = 'todo/DELETE_TODO' as const;