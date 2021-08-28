import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableHead = ({ children }: ChildrenProps): ReactElement => (
  <thead className='bg-gray-50'>{children}</thead>
);
