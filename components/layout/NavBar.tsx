import useLayout from '@/hooks/useLayout';

import Logo from './Logo';

const NavBar = () => {
  const { isMobileView } = useLayout();

  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />
      {isMobileView && <span>MENU</span>}
    </div>
  );
};

export default NavBar;
