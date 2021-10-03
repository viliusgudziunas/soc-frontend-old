import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { RegisterPage } from './pages/RegisterPage';

export const Routes = (): ReactElement => (
  <Switch>
    <Route path='/' exact>
      <HomePage />
    </Route>
    {/* <Route path='/about'>
      <AboutPage />
    </Route> */}
    <Route path='/login'>
      <LoginPage />
    </Route>
    <PrivateRoute path='/logout'>
      <LogoutPage />
    </PrivateRoute>
    {/* <PrivateRoute path='/standings'>
      <StandingsPage />
    </PrivateRoute> */}
    <Route path='/register'>
      <RegisterPage />
    </Route>
    {/* <PrivateRoute path='/profile'>
      <ProfilePage />
    </PrivateRoute> */}
  </Switch>
);
