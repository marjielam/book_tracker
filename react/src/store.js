/*jshint esversion: 6 */

import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const defaultState = {
  user: null,
  books: []
}
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk),
  enhancers
);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
