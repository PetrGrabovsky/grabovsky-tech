'use client';

import { createContext, ReactNode } from 'react';

import useIsMobileView from '@/hooks/useIsMobileView';

interface LayoutContextType {
  isMobileView: boolean;
}

const initialState: LayoutContextType = {
  isMobileView: true,
};

export const LayoutContext = createContext<LayoutContextType>(initialState);

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const isMobileView = useIsMobileView(initialState.isMobileView);

  return (
    <LayoutContext.Provider value={{ isMobileView }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
