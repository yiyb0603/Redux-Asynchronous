import { createReducer } from 'typesafe-actions';
import {
  GET_POST,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
} from './post.actions';
import { GetPostsAction, InitialPostsType } from './post.type';

const initialState: InitialPostsType = {
  loading: true,
  error: null,
  data: null,
};

const postReducer = createReducer<InitialPostsType, GetPostsAction>(initialState, {
  [GET_POSTS]: (state) => ({
    ...state,
    loading: true,
  }),

  [GET_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    posts: action.payload,
    data: {
      posts: action.payload,
    },
  }),

  [GET_POSTS_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    data: {
      posts: [],
    },
    error: action.payload,
  }),

  [GET_POST]: (state) => ({
    ...state,
    loading: true,
  }),

  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    data: {
      post: action.payload,
    },
    loading: false,
    error: null,
  }),

  [GET_POST_ERROR]: (state, action) => ({
    ...state,
    data: null,
    loading: false,
    error: action.payload,
  }),
});

export default postReducer;