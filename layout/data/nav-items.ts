import { FaCogs } from 'react-icons/fa';
import { HiHome, HiPhone, HiUser } from 'react-icons/hi';
import { MdThumbUp } from 'react-icons/md';

import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 1, href: '/', label: 'Domů', Icon: HiHome },
  { id: 2, href: '/o-mne', label: 'O mně', Icon: HiUser },
  { id: 3, href: '/projekty', label: 'Projekty', Icon: FaCogs },
  { id: 4, href: '/reference', label: 'Reference', Icon: MdThumbUp },
  { id: 5, href: '/kontakt', label: 'Kontakt', Icon: HiPhone },
];

export default navItems;
