import { ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  alignDirection?: 'left' | 'right';
  children: string;
  to: string;
}

export const AppNavLink = (props: Props): ReactElement => {
  const { children, to, alignDirection } = props;

  const [className, setClassName] = useState('p-6 hover:bg-gray-300');

  const setAlignedClass = () => {
    const alignClass = alignDirection === 'right' ? 'ml-auto' : 'mr-auto';
    setClassName(`${className} ${alignClass}`);
  };

  useEffect(() => {
    if (alignDirection) {
      setAlignedClass();
    }
  }, []);

  return (
    <NavLink to={to} exact className={className} activeClassName='bg-gray-200'>
      {children}
    </NavLink>
  );
};

AppNavLink.defaultProps = { alignDirection: undefined } as Partial<Props>;
