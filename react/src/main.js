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

$(function() {
  let currentUserId;

  if (document.getElementById('current-user-id')) {
    currentUserId = parseInt(document.getElementById('current-user-id').value);
  }

  const router = (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={NavBar} currentUserId={currentUserId}>
          <IndexRoute component={Books}></IndexRoute>
        </Route>
      </Router>
    </Provider>
  );

  render(router, document.getElementById('app'));
});
