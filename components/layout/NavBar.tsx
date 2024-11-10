import Logo from './Logo';

const NavBar = () => {
  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />
      <span>MENU</span>
    </div>
  );
};

export default NavBar;
