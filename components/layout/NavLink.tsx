import clsx from 'clsx';
import Link from 'next/link';

import { sora } from '@/styles/fonts';
import NavItem from '@/types/navItem';

interface NavLinkProps {
  navItem: NavItem;
  isActive: boolean;
}

const NavLink = ({ navItem, isActive }: NavLinkProps) => {
  return (
    <Link
      href={navItem.href}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        sora.className,
        'flex items-center border-brand-secondary border-opacity-0 px-2 py-1',
        'transition-primary justify-center space-x-2 text-text-secondary',
        'border-b',
        isActive
          ? 'rounded-md bg-brand-secondary bg-opacity-40'
          : 'bg-transparent hover:border-opacity-100'
      )}
    >
      <navItem.Icon aria-hidden='true' className='h-4 w-auto' />
      <span>{navItem.label}</span>
    </Link>
  );
};

export default NavLink;
