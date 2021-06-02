import { AxiosError } from 'axios';
import { IPost } from 'types/post.type';
import { createAsyncAction } from 'typesafe-actions';

export const GET_POSTS = 'post/GET_POSTS' as const;
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS' as const;
export const GET_POSTS_ERROR = 'post/GET_POSTS_ERROR' as const;

export const getPostsAsync = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
)<undefined, IPost[], AxiosError>();

export const GET_POST = 'post/GET_POST' as const;
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS' as const;
export const GET_POST_ERROR = 'post/GET_POST_ERROR' as const;

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
)<undefined, IPost, AxiosError>();