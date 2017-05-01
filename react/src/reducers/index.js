import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './books';
import user from './user';

const rootReducer = combineReducers({
  user,
  books,
  routing: routerReducer
});

export default rootReducer;
