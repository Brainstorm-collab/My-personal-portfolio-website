// Bundle analysis utilities for performance monitoring

export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    // Log bundle information in development
    console.group('📦 Bundle Analysis');
    
    // Check for large dependencies
    const largeDeps = [
      'framer-motion',
      'lucide-react',
      'react',
      'react-dom',
    ];
    
    largeDeps.forEach(dep => {
      console.log(`📊 ${dep}: Check bundle analyzer for size`);
    });
    
    // Performance tips
    console.log('💡 Performance Tips:');
    console.log('- Use React.memo for expensive components');
    console.log('- Implement lazy loading for images');
    console.log('- Use code splitting for large components');
    console.log('- Optimize animations with will-change');
    
    console.groupEnd();
  }
};

export const measureComponentRenderTime = (componentName: string) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      const renderTime = end - start;
      
      if (renderTime > 16) { // More than one frame at 60fps
        console.warn(`⚠️ ${componentName} took ${renderTime.toFixed(2)}ms to render`);
      }
    };
  }
  
  return () => {};
};

export const logPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Log Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        'Load Complete': navigation.loadEventEnd - navigation.loadEventStart,
        'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
      };
      
      console.table(metrics);
    }
  }
};
