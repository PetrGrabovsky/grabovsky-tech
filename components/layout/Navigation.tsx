import { usePathname } from 'next/navigation';

import navItems from '@/data/navItems';

import NavLink from './NavLink';

const Navigation = () => {
  const pathname = usePathname() || '/';

  return (
    <nav>
      <ul className='flex items-center md:flex-row md:space-x-4'>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink navItem={item} isActive={pathname === item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
