import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup body scroll lock when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-nav-open');
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      // Remove body scroll lock
      document.body.classList.remove('mobile-nav-open');
      
      // Small delay to ensure menu is closed before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-dark-900/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="font-bold text-xl tracking-tight text-theme-primary transition-colors"
          >
            Gali Eesaan
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-theme-primary'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (!isOpen) {
                  document.body.classList.add('mobile-nav-open');
                } else {
                  document.body.classList.remove('mobile-nav-open');
                }
              }}
              className="p-2 rounded-md text-theme-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut"
        }}
        className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-md border-t border-theme shadow-lg overflow-hidden"
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 touch-manipulation ${
                  isActive
                    ? 'text-blue-600 dark:text-accent-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50'
                    : 'text-theme-primary hover:text-blue-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-dark-700 border border-transparent hover:border-gray-200 dark:hover:border-dark-600'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;