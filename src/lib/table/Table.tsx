import { ReactElement } from 'react';
import { ChildrenProps } from 'shared/types';

export const Table = ({ children }: ChildrenProps): ReactElement => (
  <table className='divide-y divide-gray-300'>{children}</table>
);
