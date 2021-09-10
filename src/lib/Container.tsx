import { ReactElement, ReactNode } from 'react';

type Props = { children?: ReactNode | undefined };

export const Container = (props: Props): ReactElement => {
  const { children } = props;

  return <div className='container flex flex-row mx-auto'>{children}</div>;
};

Container.defaultProps = { children: undefined } as Partial<Props>;
