import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import navItems from '@/data/navItems';

import NavLink from './NavLink';

const Navigation = () => {
  const pathname = usePathname() || '/';
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleHover = (id: number) => setHoveredId(id);
  const handleHoverLeave = () => setHoveredId(null);

  return (
    <nav>
      <ul
        className={clsx(
          'flex flex-col items-start space-y-4 md:items-center md:space-y-0',
          'md:flex-row md:space-x-4'
        )}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredId === item.id || (!hoveredId && isActive);

          return (
            <li key={item.id}>
              <NavLink
                navItem={item}
                isActive={isActive}
                isHovered={isHovered}
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
