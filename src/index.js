import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShieldRoute from './components/shield-route';
import 'antd/dist/antd.css';

import LoginPage from './pages/login';
import { Provider } from 'react-redux';

import { store } from './store/store';
import RegisterPage from './pages/register';
import ResetPassword from './components/reset-password';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/passwordReset/:user_id/:token_id'}>
          <ResetPassword />
        </Route>
        <ShieldRoute path={'/'}>
          <App />
        </ShieldRoute>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
