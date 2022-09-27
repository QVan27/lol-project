import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../scss/app.scss';
import { ROOT } from "./constants/general";
import Header from "./components/shared/Header";
import { ABOUT, HOME, NOTFOUND } from "./constants/route-paths";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={ true } path={ HOME } component={ HomePage } />
        <Route exact={ true } path={ ABOUT } component={ AboutPage } />
        <Route exact={ true } path={ NOTFOUND } component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById(ROOT));

