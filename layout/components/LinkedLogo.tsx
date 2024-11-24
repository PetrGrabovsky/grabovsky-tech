import { motion } from 'framer-motion';
import Link from 'next/link';

import Logo from '@/shared/components/Logo';

const logoVariants = {
  initial: { scale: 1, filter: 'brightness(1)' },
  animated: {
    scale: [1, 0.95, 1],
    filter: ['brightness(1)', 'brightness(0.8)', 'brightness(1)'],
  },
};

const logoTransition = {
  repeat: Infinity,
  duration: 3,
  ease: 'easeInOut',
};

const LinkedLogo = () => {
  return (
    <Link
      aria-label='Logo Petr Grabovský, odkaz na domovskou stránku'
      className='h-full w-auto'
      href='/'
    >
      <motion.div
        animate='animated'
        className='h-full w-auto'
        initial='initial'
        transition={logoTransition}
        variants={logoVariants}
      >
        <Logo />
      </motion.div>
    </Link>
  );
};

export default LinkedLogo;
