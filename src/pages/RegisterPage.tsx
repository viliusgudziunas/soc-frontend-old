import { RegisterForm } from 'components/forms';
import { PageContainer } from 'lib/containers';
import { Header } from 'lib/Header';
import { ReactElement } from 'react';

export const RegisterPage = (): ReactElement => (
  <PageContainer>
    <Header>Register</Header>
    <RegisterForm />
  </PageContainer>
);
