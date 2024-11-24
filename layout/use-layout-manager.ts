import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

const useLayoutManager = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Detekce mobilního zobrazení
  useEffect(() => {
    const mediaQuery = globalThis.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);

    const updateIsMobile = () => setIsMobile(!mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  // Funkce pro přepínání mobilní navigace
  const toggleNavOpen = () => setIsNavOpen((previous) => !previous);

  return { isMobile, isNavOpen, toggleNavOpen };
};

export default useLayoutManager;
