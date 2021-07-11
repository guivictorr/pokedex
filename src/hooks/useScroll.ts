import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isPageEnd, setIsPageEnd] = useState(false);

  useEffect(() => {
    const listener: EventListener = event => {
      const target: HTMLDocument = event.target as HTMLDocument;
      const { scrollTop, scrollHeight } = target.documentElement;

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
  };
};

export default useScroll;
