import clsx from 'clsx';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

import useLayout from '@/hooks/useLayout';

interface MenuButtonProps {
  isMobileNavOpen: boolean;
  isShrunkView: boolean;
}

const MenuButton = ({ isMobileNavOpen, isShrunkView }: MenuButtonProps) => {
  const { handleMenuButtonClick } = useLayout();

  const Icon = isMobileNavOpen ? IoMdClose : IoMdMenu;

  return (
    <div
      className={clsx(
        'transition-primary h-full',
        isShrunkView ? 'py-1' : 'py-3'
      )}
    >
      <button
        onClick={handleMenuButtonClick}
        aria-expanded={isMobileNavOpen}
        aria-controls='mainNavigation'
        aria-label={isMobileNavOpen ? 'Skrýt navigaci' : 'Zobrazit navigaci'}
        className={clsx(
          'h-full',
          isMobileNavOpen ? 'text-accent-primary' : 'text-text-secondary'
        )}
      >
        <Icon className='h-full w-full' />
      </button>
    </div>
  );
};

export default MenuButton;
