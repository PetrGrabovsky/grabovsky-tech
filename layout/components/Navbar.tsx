import { ChildrenProperties } from '@/shared/types';

const Navbar = ({ children }: ChildrenProperties) => {
  return (
    <div className='container flex h-full items-center justify-between bg-yellow-700 py-2'>
      {children}
    </div>
  );
};

export default Navbar;
