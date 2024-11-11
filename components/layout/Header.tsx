'use client';

import clsx from 'clsx';

import NavBar from './NavBar';

const Header = () => {
  return (
    <header
      className={clsx(
        'layout-background fixed inset-0 h-fit border-b bg-gradient-to-b'
      )}
    >
      <div className='container'>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
