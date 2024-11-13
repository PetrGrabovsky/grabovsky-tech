import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const useShrunkView = (isMobileView: boolean, isMobileNavOpen: boolean) => {
  const [isShrunkView, setIsShrunkView] = useState(false);

  useEffect(() => {
    if (!isMobileView) {
      setIsShrunkView(false);
      return;
    }

    const shouldShrink = () =>
      isMobileView && !isMobileNavOpen && window.scrollY > 200;

    setIsShrunkView(shouldShrink());

    const handleScroll = throttle(() => {
      setIsShrunkView(shouldShrink());
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileView, isMobileNavOpen]);

  return isShrunkView;
};

export default useShrunkView;
