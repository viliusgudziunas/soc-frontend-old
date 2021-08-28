import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableRow = ({ children }: ChildrenProps): ReactElement => (
  <tr className='whitespace-nowrap'>{children}</tr>
);
