import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isPageEnd, setIsPageEnd] = useState(false);
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    const listener: EventListener = event => {
      const target: HTMLDocument = event.target as HTMLDocument;
      const { scrollTop, scrollHeight } = target.documentElement;
      setPageYOffset(window.pageYOffset);

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
    pageYOffset,
  };
};

export default useScroll;
