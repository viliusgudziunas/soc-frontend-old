import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const Table = (props: ChildrenProps): ReactElement => {
  const { children } = props;

  return <table className='divide-y divide-gray-300'>{children}</table>;
};
