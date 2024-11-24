import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface MobileNavContainerProperties extends PropsWithChildren {
  className?: string;
}

const MobileNavContainer = ({ children, className }: MobileNavContainerProperties) => {
  return (
    <div
      className={clsx(
        'layout-background fixed bottom-0 left-0 right-0 top-16 transition-all duration-300',
        'ease-in-out',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MobileNavContainer;
