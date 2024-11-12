import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import navItems from '@/data/navItems';
import useLayout from '@/hooks/useLayout';

import NavLink from './NavLink';

const Navigation = () => {
  const pathname = usePathname() || '/';
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { isMobileView, isMobileNavOpen } = useLayout();

  const handleHover = (id: number) => setHoveredId(id);
  const handleHoverLeave = () => setHoveredId(null);

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
