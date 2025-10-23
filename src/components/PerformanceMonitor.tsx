import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be used with web-vitals library
      console.log('Performance monitoring enabled');
    }

    // Monitor page load time
    const handleLoad = () => {
      // Use setTimeout to ensure timing metrics are finalized
      setTimeout(() => {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {
          const navigation = navigationEntry as PerformanceNavigationTiming;
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0];
          
          console.log(`✅ Page Load Time: ${loadTime.toFixed(2)}ms`);
          console.log(`📄 DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`);
          if (firstContentfulPaint) {
            console.log(`🎨 First Contentful Paint: ${firstContentfulPaint.startTime.toFixed(2)}ms`);
          }
        }
      }, 0);
    };

    window.addEventListener('load', handleLoad);

    // Monitor image load performance
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.addEventListener('load', () => {
        console.log(`Image loaded: ${img.src}`);
      });
    });

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
