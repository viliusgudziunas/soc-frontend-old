import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const TableHead = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return <thead className='bg-gray-50'>{children}</thead>;
};
