import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/home/HomePage';
import InformationPage from './view/information/InformationPage';
import ProjectItemPage from './view/projects/ProjectItemPage';
import ProjectsPage from './view/projects/ProjectsPage';

import WalletPage from './view/wallet/WalletPage';
// import Dapp from './components/Dapp'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={ProjectsPage} />
      <Route exact path='/projects/item' component={ProjectItemPage} />
      <Route exact path='/wallet' component={WalletPage} />
      <Route exact path='/information' component={InformationPage} />
      {/* <Route exact path='/wallet/dashboard' component={Dapp} /> */}
    </Switch>
  );
};

export default Routes;
