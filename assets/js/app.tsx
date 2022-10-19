import React, { FunctionComponent } from 'react';
// import ReactDOM from 'react-dom/client';

import { createRoot } from "react-dom/client";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../scss/app.scss';
import { ROOT } from "./constants/general";
import { MAP, HOME, NOTFOUND } from "./constants/route-paths";
// Shared
import Header from "./components/shared/Header";
import Footer from './components/shared/Footer';
// Components
import HomePage from "./components/pages/HomePage";
import MapPage from "./components/pages/MapPage";
import NotFound from "./components/pages/NotFound";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={ true } path={ HOME } component={ HomePage } />
        <Route exact={ true } path={ MAP } component={ MapPage } />
        <Route exact={ true } path={ NOTFOUND } component={ NotFound } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

const root = document.getElementById(ROOT);
if (root) {
  createRoot(root).render(<App />);
}
