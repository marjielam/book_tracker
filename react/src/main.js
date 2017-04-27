/*jshint esversion: 6 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Books from './containers/Books';
import NavBar from './containers/NavBar';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={NavBar}>
        <IndexRoute component={Books}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

if (document.getElementById('current-user-id')) {

}

$(function() {
  render(router, document.getElementById('app'));
});
