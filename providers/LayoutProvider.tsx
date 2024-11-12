'use client';

import { throttle } from 'lodash';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import useIsMobileView from '@/hooks/useIsMobileView';

interface LayoutContextType {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
  handleMenuButtonClick: () => void;
  handleNavLinkClick: () => void;
}

const initialState: LayoutContextType = {
  isMobileView: true,
  isMobileNavOpen: false,
  handleMenuButtonClick: () => {},
  handleNavLinkClick: () => {},
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

  useEffect(() => {
    if (!isMobileView) {
      setIsMobileNavOpen(false);
    }
  }, [isMobileView]);

  useEffect(() => {
    return () => {
      handleMenuButtonClick.cancel();
    };
  }, []);

  const handleMenuButtonClick = useMemo(() => {
    return throttle(() => {
      setIsMobileNavOpen((prev) => !prev);
    }, 300);
  }, []);

  const handleNavLinkClick = () => {
    if (isMobileView) {
      setTimeout(() => {
        setIsMobileNavOpen(false);
      }, 300);
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        isMobileView,
        isMobileNavOpen,
        handleMenuButtonClick,
        handleNavLinkClick,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
