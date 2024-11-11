import useLayout from '@/hooks/useLayout';

import Logo from './Logo';
import MenuButton from './MenuButton';
import Navigation from './Navigation';

const NavBar = () => {
  const { isMobileView } = useLayout();

  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />
      {isMobileView ? <MenuButton /> : <Navigation />}
    </div>
  );
};

export default NavBar;
