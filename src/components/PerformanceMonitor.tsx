import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be used with web-vitals library
      console.log('Performance monitoring enabled');
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
        console.log(`DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`);
      }
    });

    // Monitor image load performance
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.addEventListener('load', () => {
        console.log(`Image loaded: ${img.src}`);
      });
    });

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
