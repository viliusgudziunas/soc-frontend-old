import { PageContainer } from 'components/containers';
import { AddWorkoutForm } from 'components/forms';
import { Header } from 'lib/Header';
import { ReactElement } from 'react';
import { ApiService, AuthService, ToastService } from 'services';
import { AddWorkoutModel } from 'shared/types';

export const HomePage = (): ReactElement => {
  const handleAddWorkout = (data: AddWorkoutModel): void => {
    const authToken = AuthService.getAuthToken();

    ApiService.addWorkout(data, authToken)
      .then(() => {
        ToastService.success('Workout submitted successfully!');
      })
      .catch(() => {
        // TODO: Get error message from backend
        ToastService.error('An issue has occurred!');
      });
  };

  return (
    <PageContainer>
      <Header>Submit workout</Header>
      <AddWorkoutForm handleSubmitFormFunc={handleAddWorkout} />
    </PageContainer>
  );
};
