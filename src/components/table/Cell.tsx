import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableCell = ({ children }: ChildrenProps): ReactElement => (
  <td className='px-6 py-4 text-sm text-black-500'>{children}</td>
);
