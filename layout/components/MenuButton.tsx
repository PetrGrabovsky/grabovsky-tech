import clsx from 'clsx';
import { motion } from 'framer-motion';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const iconVariants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

const springTransition = {
  type: 'spring',
  stiffness: 500,
  damping: 20,
  ease: 'easeInOut',
};

interface MenuButtonProperties {
  isNavOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuButton = ({ isNavOpen, onClick, className }: MenuButtonProperties) => {
  const Icon = isNavOpen ? IoMdClose : IoMdMenu;

  return (
    <button
      aria-controls='navigation'
      aria-expanded={isNavOpen}
      aria-label={isNavOpen ? 'Skrýt navigaci' : 'Zobrazit navigaci'}
      className={clsx(
        'transition-primary h-full w-auto',
        isNavOpen ? 'text-red-700' : 'text-gray-400',
        className
      )}
      onClick={onClick}
    >
      <motion.div
        animate={isNavOpen ? 'open' : 'closed'}
        className='h-full'
        initial='closed'
        transition={springTransition}
        variants={iconVariants}
      >
        <Icon className='h-full w-auto' />
      </motion.div>
    </button>
  );
};

export default MenuButton;
