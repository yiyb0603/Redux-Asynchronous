import { AxiosError, AxiosResponse } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as actions from './todo.action';

export type TodoActionType = ActionType<typeof actions>;

export type TodoInitialType = {
  loading: boolean;
  data: any;
  response: AxiosResponse | null;
  error: AxiosError | null;
}