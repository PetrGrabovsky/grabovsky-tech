import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

interface MenuButtonProperties {
  isNavOpen: boolean;
  onClick: () => void;
}

const MenuButton = ({ isNavOpen, onClick }: MenuButtonProperties) => {
  const Icon = isNavOpen ? IoMdClose : IoMdMenu;

  return (
    <button className='h-full w-auto py-1 text-gray-400' onClick={onClick}>
      <Icon className='h-full w-auto' />
    </button>
  );
};

export default MenuButton;
