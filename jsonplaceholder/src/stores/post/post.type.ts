import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as actions from './post.actions';

export type GetPostsAction = ActionType<typeof actions>;

export type InitialPostsType = {
  loading: boolean;
  error: AxiosError | null;
  data: any;
};