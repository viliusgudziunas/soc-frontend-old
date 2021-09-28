import { AxiosResponse } from 'axios';
import { PageContainer } from 'components/containers';
import { LoginForm } from 'components/forms';
import { AuthContext } from 'contexts';
import { Header } from 'lib/Header';
import { UserLoginModel } from 'models';
import { ReactElement, useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { ApiService, AuthService, ToastService } from 'services';
import { LoginResponseDto } from 'services/apiService';

export const LoginPage = (): ReactElement => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleLogin = (data: UserLoginModel): void => {
    ApiService.login(data)
      .then((response: AxiosResponse<LoginResponseDto>) => {
        const { authToken } = response.data.data;
        AuthService.login(authToken);
        ToastService.success('Logged in successfully!');
        setIsLoggedIn(true);
        setIsSubmitSuccessful(true);
      })
      .catch(() => {
        // TODO: Get error message from backend
        ToastService.error('An issue has occurred!');
      });
  };

  if (isSubmitSuccessful) {
    return <Redirect to='/' />;
  }

  return (
    <PageContainer>
      <Header>Login</Header>
      <LoginForm handleSubmitFormFunc={handleLogin} />
    </PageContainer>
  );
};
