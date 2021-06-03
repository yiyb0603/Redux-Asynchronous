import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counter.slice';
import postSlice from './post/post.slice';

const rootReducer = combineReducers({
  counterSlice,
  postSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;