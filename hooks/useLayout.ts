import { useContext } from 'react';

import { LayoutContext } from '@/providers/LayoutProvider';

const useLayout = () => {
  const context = useContext(LayoutContext);

  return context;
};

export default useLayout;
