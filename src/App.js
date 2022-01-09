import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import IdentifyPlant from './pages/identify-plant';

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
      </Switch>
    </>
  );
};

export default App;
