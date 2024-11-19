import Link from 'next/link';

import Logo from '@/shared/components/Logo';

const LinkedLogo = () => {
  return (
    <Link
      aria-label='Logo Petr Grabovský, odkaz na domovskou stránku'
      className='h-full w-auto'
      href='/'
    >
      <Logo />
    </Link>
  );
};

export default LinkedLogo;
