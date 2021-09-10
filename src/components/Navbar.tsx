import { NavbarLink } from 'lib/NavbarLink';
import { ReactElement } from 'react';

export const Navbar = (): ReactElement => (
  <nav className='flex flex-row border-b-2 bg-white'>
    {/* // TODO: Add icon here */}
    <div className='m-6 mr-12'>Icon here</div>
    <NavbarLink to='/'>Home</NavbarLink>
    <NavbarLink to='/standings'>Standings</NavbarLink>
    <NavbarLink to='/about'>About</NavbarLink>
    <NavbarLink to='/login' alignDirection='right'>
      Login
    </NavbarLink>
    <NavbarLink to='/register'>Register</NavbarLink>
  </nav>
);
