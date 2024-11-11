import { useEffect, useState } from 'react';

const useIsMobileView = (defaultValue: boolean) => {
  const [isMobileView, setIsMobileView] = useState(defaultValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = () => setIsMobileView(!mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobileView;
};

export default useIsMobileView;
