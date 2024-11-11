'use client';

import { throttle } from 'lodash';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import useIsMobileView from '@/hooks/useIsMobileView';

interface LayoutContextType {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
  handleMenuButtonClick: () => void;
}

const initialState: LayoutContextType = {
  isMobileView: true,
  isMobileNavOpen: false,
  handleMenuButtonClick: () => {},
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

  return (
    <LayoutContext.Provider
      value={{ isMobileView, isMobileNavOpen, handleMenuButtonClick }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
