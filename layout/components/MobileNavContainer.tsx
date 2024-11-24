import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface MobileNavContainerProperties extends PropsWithChildren {
  className?: string;
}

const MobileNavContainer = ({ children, className }: MobileNavContainerProperties) => {
  return (
    <div
      className={clsx(
        'layout-background transition-primary fixed bottom-0 left-0 right-0 top-16',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MobileNavContainer;
