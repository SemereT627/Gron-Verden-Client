import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';

/**
 * Pages
 */
import EventPage from './pages/event';
import HomePage from './pages/home';
import IdentifyPlant from './pages/identify-plant';
import MyShopPage from './pages/my-shop';
import ShopPage from './pages/shop';

const App = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <HomePage />
        </Route>
        <Route path={`${path}identify`}>
          <IdentifyPlant />
        </Route>
        <Route path={`${path}events`}>
          <EventPage />
        </Route>
        <Route path={`${path}shops`}>
          <ShopPage />
        </Route>
        <Route path={`${path}my-shop`}>
          <MyShopPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
