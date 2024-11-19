import { ChildrenProperties } from '@/shared/types';

const Header = ({ children }: ChildrenProperties) => {
  return <header className='h-16 bg-red-500'>{children}</header>;
};

export default Header;
