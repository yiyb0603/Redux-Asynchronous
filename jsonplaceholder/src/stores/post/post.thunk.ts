import * as postApi from 'lib/api/post.api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'stores';
import { getPostAsync, getPostsAsync } from './post.actions';
import { GetPostsAction } from './post.type';

export const getPostsThunk = (): ThunkAction<void, RootState, null, GetPostsAction> => {
  return async (dispatch) => {
    const { request, success, failure } = getPostsAsync;
    dispatch(request());

    try {
      const data = await postApi.getPosts();
      dispatch(success(data));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export const getPostThunk = (id: number): ThunkAction<void, RootState, null, GetPostsAction> => {
  return async (dispatch) => {
    const { request, success, failure } = getPostAsync;
    dispatch(request());

    try {
      const data = await postApi.getPost(id);
      dispatch(success(data));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}