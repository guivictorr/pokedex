import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isPageEnd, setIsPageEnd] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const listener: EventListener = event => {
      const target: Document = event.target as Document;
      const { scrollTop, scrollHeight } = target.documentElement;
      setScrollY(window.scrollY);

      if (scrollHeight - scrollTop === window.innerHeight) {
        setIsPageEnd(true);
      } else {
        setIsPageEnd(false);
      }
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return {
    isPageEnd,
    scrollY,
    scrollToTop: () => window.scrollTo(0, 0),
  };
};

export default useScroll;
