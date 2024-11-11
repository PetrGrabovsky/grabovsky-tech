import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from 'react-icons';

import { sora } from '@/styles/fonts';

interface NavLinkProps {
  navItem: {
    id: number;
    href: string;
    label: string;
    Icon: IconType;
  };
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onHoverLeave: () => void;
}

const NavLink = ({
  navItem: { href, label, Icon },
  isActive,
  isHovered,
  onHover,
  onHoverLeave,
}: NavLinkProps) => (
  <Link
    href={href}
    aria-current={isActive ? 'page' : undefined}
    onMouseEnter={onHover}
    onMouseLeave={onHoverLeave}
    className={clsx(
      sora.className,
      'transition-primary flex w-full items-start justify-start space-x-2',
      'border-b border-brand-secondary px-2 py-1 text-sm',
      'text-text-secondary',
      isHovered ? 'border-opacity-100' : 'border-opacity-0'
    )}
  >
    <Icon aria-hidden='true' className='h-4 w-auto' />
    <span>{label}</span>
  </Link>
);

export default NavLink;
