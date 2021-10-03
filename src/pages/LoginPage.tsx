import { AxiosResponse } from 'axios';
import { ReactElement, useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { PageContainer } from '../components/containers/PageContainer';
import { LoginForm } from '../components/forms/LoginForm';
import { AuthContext } from '../contexts/authContext';
import { Header } from '../lib/Header';
import { UserLoginModel } from '../models/userModel';
import { ApiService, ResponseWithDataDto } from '../services/apiService';
import { AuthService } from '../services/authService';
import { ToastService } from '../services/toastService';

export const LoginPage = (): ReactElement => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleLogin = (data: UserLoginModel): void => {
    ApiService.login(data)
      .then((response: AxiosResponse<ResponseWithDataDto>) => {
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
