import { PrivateRoute } from 'components/PrivateRoute';
import * as Pages from 'pages';
import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

export const Routes = (): ReactElement => (
  <Switch>
    <Route path='/' exact>
      <Pages.HomePage />
    </Route>
    {/* <Route path='/about'>
      <Pages.AboutPage />
    </Route> */}
    <Route path='/login'>
      <Pages.LoginPage />
    </Route>
    <PrivateRoute path='/logout'>
      <Pages.LogoutPage />
    </PrivateRoute>
    {/* <PrivateRoute path='/standings'>
      <Pages.StandingsPage />
    </PrivateRoute> */}
    <Route path='/register'>
      <Pages.RegisterPage />
    </Route>
    {/* <PrivateRoute path='/profile'>
      <Pages.ProfilePage />
    </PrivateRoute> */}
  </Switch>
);
