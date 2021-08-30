import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableCell = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return <td className='px-6 py-4 text-sm text-black-500'>{children}</td>;
};
