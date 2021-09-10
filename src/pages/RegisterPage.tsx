import { RegisterForm } from 'components/forms';
import { Header } from 'lib/Header';
import { ReactElement } from 'react';

export const RegisterPage = (): ReactElement => (
  <div className='flex-row'>
    <div className='flex-col bg-white m-12 p-10 rounded'>
      <Header>Register</Header>
      <RegisterForm />
    </div>
  </div>
);
