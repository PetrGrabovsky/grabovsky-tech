import useLayout from '@/hooks/useLayout';

import Logo from './Logo';
import MenuButton from './MenuButton';

const NavBar = () => {
  const { isMobileView } = useLayout();

  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />
      {isMobileView && <MenuButton />}
    </div>
  );
};

export default NavBar;
