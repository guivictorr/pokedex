import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const listener: EventListener = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return {
    scrollY,
    scrollToTop: () => window.scrollTo(0, 0),
  };
};

export default useScroll;
