import { useEffect } from 'react';

const ResourcePreloader = () => {
  useEffect(() => {
    // Note: Image preloading is handled by lazy loading component
    // Only preconnect to external domains for faster resource loading

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://github.com',
      'https://vercel.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // DNS prefetch for external resources
    const dnsPrefetchDomains = [
      'https://api.github.com',
      'https://cdn.jsdelivr.net',
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

  }, []);

  return null;
};

export default ResourcePreloader;
