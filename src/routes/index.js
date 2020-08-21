import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Home from '../pages/Home';
import RegisterNavers from '../pages/Navers/Register';
import EditNavers from '../pages/Navers/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} isPrivate />
      <Route
        path="/register/naver"
        exact
        component={RegisterNavers}
        isPrivate
      />
      <Route path="/edit/naver" exact component={EditNavers} isPrivate />
    </Switch>
  );
}
