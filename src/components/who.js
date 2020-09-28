import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Users from './users';
import Profile from './profile';
import { UserProvider } from './context';

function WhoTofollow() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default WhoTofollow;
