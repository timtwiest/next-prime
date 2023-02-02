import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold: number): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return scrolled;
}
