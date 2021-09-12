import { Form, Formik, FormikHelpers } from 'formik';
import { Button } from 'lib/Button';
import { TextField } from 'lib/TextField';
import { ReactElement, useState } from 'react';

interface FormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
}

const initialFormData: FormData = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = (): ReactElement => {
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
