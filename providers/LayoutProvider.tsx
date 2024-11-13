'use client';

import { createContext, ReactNode, RefObject, useRef } from 'react';

import useIsMobileView from '@/hooks/useIsMobileView';
import useMenuHandlers from '@/hooks/useMenuHandlers';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import useScrollLock from '@/hooks/useScrollLock';
import useShrunkView from '@/hooks/useShrunkView';

interface LayoutContextType {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
  isShrunkView: boolean;
  handleMenuButtonClick: () => void;
  handleNavLinkClick: () => void;
  handleCloseMobileNav: () => void;
  navRef: RefObject<HTMLDivElement>;
  logoRef: RefObject<HTMLAnchorElement>;
}

const initialState: LayoutContextType = {
  isMobileView: true,
  isMobileNavOpen: false,
  isShrunkView: false,
  handleMenuButtonClick: () => {},
  handleNavLinkClick: () => {},
  handleCloseMobileNav: () => {},
  navRef: { current: null },
  logoRef: { current: null },
};

export const LayoutContext = createContext<LayoutContextType>(initialState);

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const isMobileView = useIsMobileView(initialState.isMobileView);

  const {
    isMobileNavOpen,
    handleMenuButtonClick,
    handleNavLinkClick,
    handleCloseMobileNav,
  } = useMenuHandlers(isMobileView);

  const isShrunkView = useShrunkView(isMobileView, isMobileNavOpen);
  const navRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useOutsideClickHandler([navRef, logoRef], isMobileNavOpen, () =>
    handleCloseMobileNav()
  );

  useScrollLock(isMobileNavOpen);

  return (
    <LayoutContext.Provider
      value={{
        isMobileView,
        isMobileNavOpen,
        isShrunkView,
        handleMenuButtonClick,
        handleNavLinkClick,
        handleCloseMobileNav,
        navRef,
        logoRef,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
