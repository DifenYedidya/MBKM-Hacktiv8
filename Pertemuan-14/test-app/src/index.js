import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Home from './router/Home'
import Users from './router/Users'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
