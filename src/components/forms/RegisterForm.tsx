import { Form, Formik, FormikHelpers } from 'formik';
import { Button } from 'lib/Button';
import { TextField } from 'lib/TextField';
import { UserAuthModel } from 'models';
import { ReactElement, useState } from 'react';

interface Props {
  handleSubmitFormFunc: (data: UserAuthModel) => Promise<void>;
}

interface FormErrors {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
}

const initialFormData: UserAuthModel = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = (props: Props): ReactElement => {
  const { handleSubmitFormFunc } = props;

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = async (
    values: UserAuthModel,
    actions: FormikHelpers<UserAuthModel>
  ): Promise<void> => {
    await handleSubmitFormFunc(values);
    actions.resetForm();
  };

  const handleValidate = (values: UserAuthModel): FormErrors => {
    const errors: FormErrors = {};
    const { email, name, password, confirmPassword } = values;

    if (!email) {
      errors.email = 'Field required';
    }
    if (!name) {
      errors.name = 'Field required';
    }
    if (!password) {
      errors.password = 'Field required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Field required';
    }

    // TODO: check if browser can validate this
    if (password && confirmPassword && password !== confirmPassword) {
      errors.password = 'Passwords must match';
      errors.confirmPassword = 'Passwords must match';
    }

    const isErrorsEmpty = Object.keys(errors).length === 0;
    setSubmitDisabled(!isErrorsEmpty);

    return errors;
  };

  return (
    <Formik
      initialValues={initialFormData}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {/* TOOD: find type for props below */}
      {() => (
        <Form className='flex flex-col'>
          <TextField attribute='email' required type='email'>
            Email
          </TextField>
          <TextField attribute='name' required>
            Name
          </TextField>
          <TextField attribute='password' required type='password'>
            Password
          </TextField>
          <TextField attribute='confirmPassword' required type='password'>
            Confirm password
          </TextField>

          <Button type='submit' disabled={submitDisabled}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};
