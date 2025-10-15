import { useEffect, useRef, useCallback } from 'react';
import { useDebouncedCallback } from './useDebounce';

interface UseScrollPerformanceOptions {
  throttleMs?: number;
  onScroll?: (scrollY: number) => void;
  onScrollEnd?: () => void;
}

export const useScrollPerformance = (options: UseScrollPerformanceOptions = {}) => {
  const { throttleMs = 16, onScroll, onScrollEnd } = options;
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (!isScrolling.current) {
      isScrolling.current = true;
      requestAnimationFrame(() => {
        isScrolling.current = false;
        onScroll?.(window.scrollY);
      });
    }
  }, [onScroll]);

  const debouncedScrollEnd = useDebouncedCallback(() => {
    onScrollEnd?.();
  }, 150);

  const throttledScroll = useDebouncedCallback(handleScroll, throttleMs);

  useEffect(() => {
    const handleScrollEvent = () => {
      throttledScroll();
      debouncedScrollEnd();
    };

    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [throttledScroll, debouncedScrollEnd]);

  return {
    isScrolling: isScrolling.current,
  };
};
