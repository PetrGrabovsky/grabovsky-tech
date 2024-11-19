import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

const useLayoutManager = () => {
  const [isMobile, setIsMobile] = useState(true);

  // Detekce mobilního zobrazení
  useEffect(() => {
    const mediaQuery = globalThis.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);

    const updateIsMobile = () => {
      setIsMobile(!mediaQuery.matches);
    };

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  return { isMobile };
};

export default useLayoutManager;
