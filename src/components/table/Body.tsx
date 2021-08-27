import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableBody = ({ children }: ChildrenProps): ReactElement => (
  <tbody className='bg-white divide-y divide-gray-300'>{children}</tbody>
);
