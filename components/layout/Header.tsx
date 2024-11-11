'use client';

import clsx from 'clsx';

import useLayout from '@/hooks/useLayout';

import NavBar from './NavBar';
import Navigation from './Navigation';

const Header = () => {
  const { isMobileView, isMobileNavOpen } = useLayout();

  return (
    <header
      className={clsx(
        'layout-background fixed inset-0 z-50 border-b bg-gradient-to-b',
        'transition-primary flex flex-col',
        isMobileNavOpen ? 'h-screen' : 'h-16'
      )}
    >
      <div className='container flex flex-grow flex-col'>
        <NavBar />
        {isMobileView && (
          <div
            className={clsx(
              'transition-primary flex items-center justify-center',
              'overflow-hidden',
              isMobileNavOpen ? 'flex-grow opacity-100' : 'h-0 opacity-0'
            )}
          >
            <Navigation />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
