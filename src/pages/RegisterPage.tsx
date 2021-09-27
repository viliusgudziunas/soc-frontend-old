import { PageContainer } from 'components/containers';
import { RegisterForm } from 'components/forms';
import { Header } from 'lib/Header';
import { UserAuthModel } from 'models';
import { ReactElement, useState } from 'react';
import { Redirect } from 'react-router';
import { ApiService, ToastService } from 'services';

export const RegisterPage = (): ReactElement => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleSubmitForm = async (data: UserAuthModel): Promise<void> => {
    const response = await ApiService.addUser(data);
    const { status } = response?.data;

    if (status === 'success') {
      ToastService.success('User created!');
      setIsSubmitSuccessful(true);
    } else {
      // TODO: Get error message from backend
      ToastService.error('An issue has occurred!');
    }
  };

  if (isSubmitSuccessful) {
    return <Redirect to='/login' />;
  }

  return (
    <PageContainer>
      <Header>Register</Header>
      <RegisterForm handleSubmitFormFunc={handleSubmitForm} />
    </PageContainer>
  );
};
