import clsx from 'clsx';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

interface MenuButtonProperties {
  isNavOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuButton = ({ isNavOpen, onClick, className }: MenuButtonProperties) => {
  const Icon = isNavOpen ? IoMdClose : IoMdMenu;

  return (
    <button
      className={clsx('transition-primary h-full w-auto text-gray-400', className)}
      onClick={onClick}
    >
      <Icon className='h-full w-auto' />
    </button>
  );
};

export default MenuButton;
