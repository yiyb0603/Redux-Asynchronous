import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customAxios from 'lib/customAxios';
import { GET_POSTS } from './post.actionType';

const initialState = {
  loading: true,
  posts: [],
  error: null,
};

export const getPostsThunk = createAsyncThunk(GET_POSTS, async () => {
  const { data } = await customAxios.get('/posts');
  return data;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsThunk.pending.type]: (state) => {
      state.posts = [];
      state.loading = true;
    },

    [getPostsThunk.fulfilled.type]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },

    [getPostsThunk.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.posts = [];
    },
  },
});

export default postSlice.reducer;