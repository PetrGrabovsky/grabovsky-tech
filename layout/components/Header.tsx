import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface HeaderProperties extends PropsWithChildren {
  className?: string;
}

const Header = ({ children, className }: HeaderProperties) => {
  return (
    <header
      className={clsx('layout-background transition-primary fixed inset-0 w-full', className)}
    >
      <div className='container flex h-full w-full justify-between'>{children}</div>
    </header>
  );
};

export default Header;
