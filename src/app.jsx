import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './components/pages/Layout.jsx';
import Home from './components/pages/Home.jsx';
import Todo from './components/pages/Todo.jsx';
import Tables from './components/pages/Tables.jsx';
import './bootstrap';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home} />
      <Route path="todo" component={Todo} />
      <Route path="tables" component={Tables} />
    </Route>
  </Router>,
  document.getElementById('app')
);
