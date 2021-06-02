import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import post from './post/post.reducer';

const rootReducer = combineReducers({
  post,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;