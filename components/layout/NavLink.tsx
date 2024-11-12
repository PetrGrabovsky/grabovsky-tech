import clsx from 'clsx';
import Link from 'next/link';

import { sora } from '@/styles/fonts';
import NavItem from '@/types/navItem';

interface NavLinkProps {
  navItem: NavItem;
  isActive: boolean;
  isHovered: boolean;
  isTabbable: boolean;
  onHover: () => void;
  onHoverLeave: () => void;
}

const NavLink = ({
  navItem: { href, label, Icon },
  isActive,
  isHovered,
  isTabbable,
  onHover,
  onHoverLeave,
}: NavLinkProps) => (
  <Link
    href={href}
    tabIndex={isTabbable ? 0 : -1}
    aria-current={isActive ? 'page' : undefined}
    onMouseEnter={onHover}
    onMouseLeave={onHoverLeave}
    className={clsx(
      sora.className,
      'transition-primary flex w-full items-start justify-start space-x-2',
      'px-2 py-1 text-sm md:border-b md:border-brand-secondary',
      'text-text-secondary',
      isHovered ? 'md:border-opacity-100' : 'md:border-opacity-0'
    )}
  >
    <Icon
      aria-hidden='true'
      className={clsx(
        'transition-primary h-4 w-auto md:text-text-secondary',
        isHovered ? 'scale-110 text-brand-secondary' : 'text-text-secondary'
      )}
    />
    <span>{label}</span>
  </Link>
);

export default NavLink;
