import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';

import navItems from '@/data/navItems';

import NavLink from './NavLink';

interface NavigationProps {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
}

const Navigation = ({ isMobileView, isMobileNavOpen }: NavigationProps) => {
  const pathname = usePathname() || '/';
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleHover = useCallback((id: number) => setHoveredId(id), []);
  const handleHoverLeave = useCallback(() => setHoveredId(null), []);

  return (
    <nav
      id='mainNavigation'
      role='navigation'
      aria-label='Hlavní navigace'
      aria-hidden={isMobileView && !isMobileNavOpen}
    >
      <ul
        className={clsx(
          'flex flex-col items-start space-y-4 md:items-center md:space-y-0',
          'md:flex-row md:space-x-4'
        )}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredId === item.id || (!hoveredId && isActive);
          const isTabbable = isMobileNavOpen || !isMobileView;

          return (
            <li key={item.id} className='w-full md:w-auto'>
              <NavLink
                navItem={item}
                isActive={isActive}
                isHovered={isHovered}
                isTabbable={isTabbable}
                onHover={() => handleHover(item.id)}
                onHoverLeave={handleHoverLeave}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
