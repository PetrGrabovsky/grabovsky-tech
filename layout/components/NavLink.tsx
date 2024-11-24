import Link from 'next/link';

import { NavItem } from '../types';

interface NavLinkProperties {
  navItem: NavItem;
}

const NavLink = ({ navItem: { href, label, Icon } }: NavLinkProperties) => {
  return (
    <Link
      className='flex items-center justify-center space-x-1 px-2 py-1 text-gray-400'
      href={href}
    >
      <Icon className='h-4 w-auto' />
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
