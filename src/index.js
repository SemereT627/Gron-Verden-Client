import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={'/login'}></Route>
      <Route path={'/'}>
        <LoginPage />
      </Route>
    </Switch>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
