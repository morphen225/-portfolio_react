import React from 'react';


import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import App from './pages/App';
import Resume from './pages/Resume'
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router >
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/resume" component={Resume} />
    <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
