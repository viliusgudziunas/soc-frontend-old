import { Form, Formik, FormikHelpers } from 'formik';
import { Button } from 'lib/Button';
import { TextField } from 'lib/TextField';
import { ReactElement, useState } from 'react';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialFormData: FormData = {
  email: '',
  password: '',
};

export const LoginForm = (): ReactElement => {
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = (
    _values: FormData,
    actions: FormikHelpers<FormData>
  ): void => {
    // TODO: submit form
    actions.resetForm();
  };

  const handleValidate = (values: FormData): FormErrors => {
    const errors: FormErrors = {};
    const { email, password } = values;

    if (!email) {
      errors.email = 'Field required';
    }
    if (!password) {
      errors.password = 'Field required';
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
      {/* TODO: find type for props below */}
      {() => (
        <Form className='flex flex-col'>
          <TextField attribute='email' required type='email'>
            Email
          </TextField>
          <TextField attribute='password' required type='password'>
            Password
          </TextField>

          <Button type='submit' disabled={submitDisabled}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
