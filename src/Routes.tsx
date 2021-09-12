import * as Pages from 'pages';
import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

export const Routes = (): ReactElement => (
  <Switch>
    <Route path='/' exact>
      <Pages.HomePage />
    </Route>
    <Route path='/about'>
      <Pages.AboutPage />
    </Route>
    <Route path='/login'>
      <Pages.LoginPage />
    </Route>
    <Route path='/standings'>
      <Pages.StandingsPage />
    </Route>
    <Route path='/register'>
      <Pages.RegisterPage />
    </Route>
    <Route path='/profile'>
      <Pages.ProfilePage />
    </Route>
  </Switch>
);
