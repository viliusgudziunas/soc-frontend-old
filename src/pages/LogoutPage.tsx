import { PageContainer } from 'components/containers';
import { AuthContext } from 'contexts';
import { Header } from 'lib/Header';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { ApiService, AuthService, ToastService } from 'services';

export const LogoutPage = (): ReactElement => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    AuthService.clearAuthToken();
    setIsLogoutSuccessful(true);
  };

  useEffect(() => {
    const authToken = AuthService.getAuthToken();
    ApiService.logout(authToken)
      .then(() => {
        ToastService.success('Logged out successfully!');
        handleLogout();
      })
      .catch(() => {
        ToastService.error('An error occurred while logging out!');
        handleLogout();
      });
  }, []);

  if (isLogoutSuccessful) {
    return <Redirect to='/login' />;
  }

  return (
    <PageContainer>
      <Header>Logout</Header>
      You should be redirected in a moment!
    </PageContainer>
  );
};
