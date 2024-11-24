import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface HeaderProperties extends PropsWithChildren {
  className?: string;
}

const Header = ({ children, className }: HeaderProperties) => {
  return (
    <header
      className={clsx(
        'layout-background fixed inset-0 w-full transition-all duration-300 ease-in-out',
        className
      )}
    >
      <div className='container flex h-full w-full justify-between py-2'>{children}</div>
    </header>
  );
};

export default Header;
