import { ChildrenProperties } from '@/shared/types';

const Header = ({ children }: ChildrenProperties) => {
  return <header className='layout-background fixed inset-0 h-16'>{children}</header>;
};

export default Header;
