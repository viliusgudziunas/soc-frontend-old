import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableRow = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return <tr className='whitespace-nowrap'>{children}</tr>;
};
