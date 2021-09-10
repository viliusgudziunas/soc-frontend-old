import { Button } from 'lib/Button';
import { TextField } from 'lib/TextField';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

interface FormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const initialFormData: FormData = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = (): ReactElement => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormData(initialFormData);
    // TODO: submit form
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const targetField = event.target.name;
    const targetValue = event.target.value;

    const newData = { ...formData, [targetField]: targetValue };
    setFormData(newData);
    // TODO: add validation
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <TextField
        attribute='email'
        changeHandler={handleChange}
        required
        type='email'
        value={formData.email}
      >
        Email
      </TextField>

      <TextField
        attribute='name'
        changeHandler={handleChange}
        required
        value={formData.name}
      >
        Name
      </TextField>

      <TextField
        attribute='password'
        changeHandler={handleChange}
        required
        type='password'
        value={formData.password}
      >
        Password
      </TextField>

      <TextField
        attribute='confirmPassword'
        changeHandler={handleChange}
        required
        type='password'
        value={formData.confirmPassword}
      >
        Confirm password
      </TextField>

      <Button type='submit'>Register</Button>
    </form>
  );
};
