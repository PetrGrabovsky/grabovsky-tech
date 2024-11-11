import { usePathname } from 'next/navigation';
import { useState } from 'react';

import navItems from '@/data/navItems';

import NavLink from './NavLink';

const Navigation = () => {
  const pathname = usePathname() || '/';
  const [hoveredId, setHoveredId] = useState(-1);

  return (
    <nav>
      <ul className='flex items-center md:flex-row md:space-x-4'>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              navItem={item}
              isActive={pathname === item.href}
              isHovered={
                hoveredId === item.id ||
                (pathname === item.href && hoveredId === -1)
              }
              onHover={() => setHoveredId(item.id)}
              onHoverLeave={() => setHoveredId(-1)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
