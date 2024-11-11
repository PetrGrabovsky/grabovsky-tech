import clsx from 'clsx';
import Link from 'next/link';

import { sora } from '@/styles/fonts';
import NavItem from '@/types/navItem';

interface NavLinkProps {
  navItem: NavItem;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onHoverLeave: () => void;
}

const NavLink = ({
  navItem,
  isActive,
  isHovered,
  onHover,
  onHoverLeave,
}: NavLinkProps) => {
  return (
    <Link
      href={navItem.href}
      aria-current={isActive ? 'page' : undefined}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
      className={clsx(
        sora.className,
        'transition-primary flex items-center justify-center space-x-2 px-2',
        'border-b border-brand-secondary py-1 text-sm text-text-secondary',
        isHovered ? 'border-opacity-100' : 'border-opacity-0'
      )}
    >
      <navItem.Icon aria-hidden='true' className='h-4 w-auto' />
      <span>{navItem.label}</span>
    </Link>
  );
};

export default NavLink;
