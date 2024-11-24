import { useEffect, useRef, useState } from 'react';

const MOBILE_BREAKPOINT = 768;
const SCROLL_THRESHOLD = 200;

const useLayoutManager = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  const markerReference = useRef<HTMLSpanElement | undefined>(undefined);

  // Detekce mobilního zobrazení
  useEffect(() => {
    const mediaQuery = globalThis.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);

    const updateIsMobile = () => setIsMobile(!mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  // Sledování isShrunkView
  useEffect(() => {
    if (
      !markerReference.current ||
      !isMobile ||
      isNavOpen ||
      !('IntersectionObserver' in globalThis)
    ) {
      setIsShrunk(false);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setIsShrunk(!entry.isIntersecting), {
      root: undefined,
      threshold: 1,
      rootMargin: `${SCROLL_THRESHOLD}px 0px 0px 0px`,
    });

    observer.observe(markerReference.current);

    return () => observer.disconnect();
  }, [isMobile, isNavOpen]);

  // Blokace scrollování
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = isNavOpen ? 'hidden' : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isNavOpen]);

  // Funkce pro přepínání mobilní navigace
  const toggleNavOpen = () => setIsNavOpen((previous) => !previous);

  return { isMobile, isNavOpen, isShrunk, markerRef: markerReference, toggleNavOpen };
};

export default useLayoutManager;
