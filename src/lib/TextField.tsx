import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

interface Props {
  attribute: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  children: string;
  required?: boolean;
  type?: 'text' | 'email' | 'password';
  value: string | number;
}

export const TextField = (props: Props): ReactElement => {
  const { attribute, children, type, value, changeHandler, required } = props;

  const [label, setLabel] = useState(children);

  useEffect(() => {
    if (required) {
      setLabel(`${children} *`);
    }
  }, []);

  return (
    <label htmlFor={attribute} className='mb-4 text-sm font-bold'>
      {label}
      <input
        id={attribute}
        name={attribute}
        onChange={changeHandler}
        required={required}
        type={type}
        value={value}
        className='mt-1 block rounded shadow leading-tight'
      />
    </label>
  );
};

TextField.defaultProps = { required: false, type: 'text' } as Partial<Props>;
