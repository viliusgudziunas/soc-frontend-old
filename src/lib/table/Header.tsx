import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableHeader = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return <th className='px-6 py-2 text-xs text-gray-500'>{children}</th>;
};
