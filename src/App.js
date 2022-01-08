import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}home`}>Welcome Home</Route>
      </Switch>
    </>
  );
};

export default App;
