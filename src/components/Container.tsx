import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const Container = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return (
    <div className='container flex flex-row justify-center mx-auto'>
      {children}
    </div>
  );
};
