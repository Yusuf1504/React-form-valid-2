import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SigninForm from './SigninForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <SigninForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
