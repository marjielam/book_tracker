/*jshint esversion: 6 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Books from './containers/Books';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Books}/>
    </Router>
  </Provider>
);

if (document.getElementById('current-user-id')) {
  
}

$(function() {
  render(router, document.getElementById('app'));
});
