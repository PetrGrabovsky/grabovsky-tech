import { throttle } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

const useMenuHandlers = (isMobileView: boolean) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!isMobileView) {
      setIsMobileNavOpen(false);
    }
  }, [isMobileView]);

  const handleMenuButtonClick = useMemo(
    () =>
      throttle(() => {
        setIsMobileNavOpen((prev) => !prev);
      }, 300),
    []
  );

  useEffect(() => {
    return () => {
      handleMenuButtonClick.cancel();
    };
  }, [handleMenuButtonClick]);

  const handleNavLinkClick = () => {
    if (isMobileView) {
      setTimeout(() => {
        setIsMobileNavOpen(false);
      }, 300);
    }
  };

  const handleCloseMobileNav = () => {
    if (isMobileView && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return {
    isMobileNavOpen,
    handleMenuButtonClick,
    handleNavLinkClick,
    handleCloseMobileNav,
  };
};

export default useMenuHandlers;
