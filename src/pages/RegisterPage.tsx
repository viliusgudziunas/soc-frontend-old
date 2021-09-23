import { PageContainer } from 'components/containers';
import { RegisterForm } from 'components/forms';
import { Header } from 'lib/Header';
import { UserAuthModel } from 'models';
import { ReactElement } from 'react';
import { ApiService, ToastService } from 'services';

export const RegisterPage = (): ReactElement => {
  const handleSubmitForm = async (data: UserAuthModel): Promise<void> => {
    const response = await ApiService.addUser(data);
    const { status } = response?.data;

    if (status === 'success') {
      ToastService.success('User created!');
      // TODO: Navigate to login page
    } else {
      // TODO: Get error message from backend
      ToastService.error('An issue has occured!');
    }
  };

  return (
    <PageContainer>
      <Header>Register</Header>
      <RegisterForm handleSubmitFormFunc={handleSubmitForm} />
    </PageContainer>
  );
};
