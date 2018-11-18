import React from 'react';
import { Route, Switch } from 'react-router';
import ChatBox from './containers/ChatBox';

export default (
  <Switch>
    <Route exact path="/" component={ChatBox} />
  </Switch>
);
