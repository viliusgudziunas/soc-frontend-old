import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableHeader = ({ children }: ChildrenProps): ReactElement => (
  <th className='px-6 py-2 text-xs text-gray-500'>{children}</th>
);
