import { useEffect } from 'react';

const useScrollLock = (isScrollDisabled: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isScrollDisabled]);
};

export default useScrollLock;
