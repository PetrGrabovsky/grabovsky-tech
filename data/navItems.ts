import NavItem from '@/types/navItem';

import {
  AboutIcon,
  ContactIcon,
  HomeIcon,
  ProjectIcon,
  ReferenceIcon,
} from './icons';

const navItems: NavItem[] = [
  { id: 1, href: '/', label: 'Domů', Icon: HomeIcon },
  { id: 2, href: '/o-mne', label: 'O mně', Icon: AboutIcon },
  { id: 3, href: '/projekty', label: 'Projekty', Icon: ProjectIcon },
  { id: 4, href: '/reference', label: 'Reference', Icon: ReferenceIcon },
  { id: 5, href: '/kontakt', label: 'Kontakt', Icon: ContactIcon },
];

export default navItems;
