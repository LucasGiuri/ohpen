import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Subscriptions from './pages/subscriptions/subscriptions';
import { StateProvider } from './state';


const App = () => (
  <StateProvider>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/subscriptions'>
          <Subscriptions />
        </Route>
      </Switch>
    </Router>
  </StateProvider>
);

export default App;