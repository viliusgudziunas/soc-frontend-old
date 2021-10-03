import { ReactElement, ReactNode, useEffect } from 'react';
import { ClassesObjectModel } from '../models/classes-object-model';
import Utils from '../shared/utils';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
}

export const Button = (props: Props): ReactElement => {
  const { children, type, disabled } = props;

  const classes: ClassesObjectModel = {
    'bg-blue-500': true,
    'font-bold': true,
    'mt-2': true,
    'py-2': true,
    rounded: true,
    'text-white': true,
    'disabled:opacity-50': true,
    'disabled:cursor-not-allowed': true,
  };

  const adjustClasses = (): void => {
    classes['hover:bg-blue-700'] = !disabled;
  };

  useEffect(() => adjustClasses(), [disabled]);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type ?? 'button'}
      disabled={disabled}
      className={Utils.makeClassName(classes)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = { type: 'button', disabled: false } as Partial<Props>;
