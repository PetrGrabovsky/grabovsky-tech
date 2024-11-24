import navItems from '../data/nav-items';
import NavLink from './NavLink';

const Navigation = () => {
  return (
    <nav
      aria-label='Hlavní navigace'
      className='flex items-center justify-center'
      id='navigation'
      role='navigation'
    >
      <ul className='flex flex-col'>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink navItem={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
