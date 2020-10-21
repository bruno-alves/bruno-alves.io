import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Snake from './Pages/Snake';
import Miniswepper from './Pages/Miniswepper';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/snake" component={Snake} />
        <Route path="/miniswepper" component={Miniswepper} />
      </Switch>
    </BrowserRouter>
  );
}
