import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // Adjust these values to control when a section is considered "active"
      threshold: 0
    };

    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      }, observerOptions);

      observer.observe(element);
      return observer;
    });

    // Cleanup function
    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return activeSection;
};
