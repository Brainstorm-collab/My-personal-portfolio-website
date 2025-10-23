import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;
      
      isScrolling = true;
      requestAnimationFrame(() => {
        // Get all section elements and their positions
        const sectionElements = sections
          .map(id => {
            const element = document.getElementById(id);
            if (!element) return null;
            
            const rect = element.getBoundingClientRect();
            return {
              id,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height
            };
          })
          .filter(Boolean);

        // Find the section that's most visible in the viewport
        // Priority: Section whose top is closest to the top of viewport (within reasonable range)
        const viewportHeight = window.innerHeight;
        const scrollThreshold = viewportHeight * 0.3; // Top 30% of viewport

        let newActiveSection = activeSection;

        // Check each section
        for (const section of sectionElements) {
          if (!section) continue;
          
          // Section is in view if its top is above the threshold and bottom is below viewport top
          if (section.top <= scrollThreshold && section.bottom > 0) {
            newActiveSection = section.id;
            break; // Take the first matching section
          }
        }

        // Handle edge case: if at very top of page, always show home
        if (window.scrollY < 100) {
          newActiveSection = 'home';
        }

        // Handle edge case: if at very bottom of page, show contact
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
          newActiveSection = 'contact';
        }

        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
          // Debug: Log active section changes (remove in production if needed)
          console.log(`📍 Active Section: ${newActiveSection}`);
        }
        
        isScrolling = false;
      });
    };

    // Initial check
    handleScroll();

    // Listen to scroll events with passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return activeSection;
};
