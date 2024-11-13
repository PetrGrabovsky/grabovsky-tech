'use client';

import { throttle } from 'lodash';
import {
  createContext,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import useIsMobileView from '@/hooks/useIsMobileView';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import useScrollLock from '@/hooks/useScrollLock';

interface LayoutContextType {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
  handleMenuButtonClick: () => void;
  handleNavLinkClick: () => void;
  handleLogoClick: () => void;
  navRef: RefObject<HTMLDivElement>;
  logoRef: RefObject<HTMLAnchorElement>;
}

const initialState: LayoutContextType = {
  isMobileView: true,
  isMobileNavOpen: false,
  handleMenuButtonClick: () => {},
  handleNavLinkClick: () => {},
  handleLogoClick: () => {},
  navRef: { current: null },
  logoRef: { current: null },
};

export const LayoutContext = createContext<LayoutContextType>(initialState);

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const isMobileView = useIsMobileView(initialState.isMobileView);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(
    initialState.isMobileNavOpen
  );
  const navRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useOutsideClickHandler([navRef, logoRef], isMobileNavOpen, () =>
    setIsMobileNavOpen(false)
  );

  useScrollLock(isMobileNavOpen);

  useEffect(() => {
    if (!isMobileView) {
      setIsMobileNavOpen(false);
    }
  }, [isMobileView]);

  const handleMenuButtonClick = useMemo(() => {
    return throttle(() => {
      setIsMobileNavOpen((prev) => !prev);
    }, 300);
  }, []);

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

  const handleLogoClick = () => {
    if (isMobileView && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        isMobileView,
        isMobileNavOpen,
        handleMenuButtonClick,
        handleNavLinkClick,
        handleLogoClick,
        navRef,
        logoRef,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
