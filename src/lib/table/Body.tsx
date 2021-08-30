import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableBody = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return (
    <tbody className='bg-white divide-y divide-gray-300'>{children}</tbody>
  );
};
