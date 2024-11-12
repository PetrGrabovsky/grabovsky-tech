import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

import NavItem from '@/types/navItem';

const socialLinks: NavItem[] = [
  { id: 1, href: '/', Icon: FaTiktok, label: 'TikTok' },
  { id: 2, href: '/', Icon: FaInstagram, label: 'Instagram' },
  { id: 3, href: '/', Icon: FaFacebookF, label: 'Facebook' },
];

export default socialLinks;
