import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import todo from './todo';

const rootReducer = combineReducers({
  todo,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;