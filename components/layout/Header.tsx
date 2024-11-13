'use client';

import clsx from 'clsx';

import useLayout from '@/hooks/useLayout';

import Logo from './Logo';
import MenuButton from './MenuButton';
import Navigation from './Navigation';

const Header = () => {
  const { isMobileView, isMobileNavOpen, isShrunkView } = useLayout();

  const renderNavigation = () => (
    <Navigation isMobileNavOpen={isMobileNavOpen} isMobileView={isMobileView} />
  );

  return (
    <header
      className={clsx(
        'layout-background fixed inset-0 z-40 border-b bg-gradient-to-b',
        'transition-primary flex flex-col overflow-hidden',
        isMobileNavOpen ? 'h-screen' : isShrunkView ? 'h-10' : 'h-16'
      )}
    >
      <div className='container flex flex-grow flex-col'>
        <div
          className={clsx(
            'transition-primary flex items-center justify-between',
            isShrunkView ? 'h-10' : 'h-16'
          )}
        >
          <Logo />
          {isMobileView ? (
            <MenuButton
              isMobileNavOpen={isMobileNavOpen}
              isShrunkView={isShrunkView}
            />
          ) : (
            renderNavigation()
          )}
        </div>
        {isMobileView && (
          <div
            className={clsx(
              'transition-primary flex items-center justify-center',
              'overflow-hidden',
              isMobileNavOpen ? 'flex-grow opacity-100' : 'h-0 opacity-0'
            )}
          >
            {renderNavigation()}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
