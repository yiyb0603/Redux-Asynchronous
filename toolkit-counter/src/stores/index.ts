import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counter.slice';

const rootReducer = combineReducers({
  counterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;