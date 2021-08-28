import { AppNavLink } from 'lib/Link';
import { ReactElement } from 'react';

export const NavbarComponent = (): ReactElement => (
  <nav className='flex flex-row border-b-2'>
    {/* // TODO: Add icon here */}
    <div className='m-6 mr-12'>Icon here</div>
    <AppNavLink to='/'>Home</AppNavLink>
    <AppNavLink to='/about'>About</AppNavLink>
    <AppNavLink to='/login' alignDirection='right'>
      Login
    </AppNavLink>
  </nav>
);
