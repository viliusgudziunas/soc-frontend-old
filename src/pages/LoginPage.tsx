import { LoginForm } from 'components/forms';
import { PageContainer } from 'lib/containers';
import { Header } from 'lib/Header';
import { ReactElement } from 'react';

export const LoginPage = (): ReactElement => (
  <PageContainer>
    <Header>Login</Header>
    <LoginForm />
  </PageContainer>
);
