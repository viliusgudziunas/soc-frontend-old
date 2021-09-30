import { ReactElement, ReactNode } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthService } from 'services/authService';

interface Props {
  children: ReactNode | undefined;
  exact?: boolean;
  path: string;
}

export const PrivateRoute = (props: Props): ReactElement => {
  const { children, exact, path } = props;

  const isLoggedIn = AuthService.isLoggedIn();
  if (!isLoggedIn) {
    return <Redirect to='/login' />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};

PrivateRoute.defaultProps = { exact: false } as Partial<Props>;
