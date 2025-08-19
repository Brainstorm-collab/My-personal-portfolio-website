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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-theme'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-2xl gradient-text-primary"
          >
            G.Eesaan 
          </motion.div>

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
                        ? scrolled
                          ? 'text-blue-600 dark:text-accent-400'
                          : 'text-blue-200'
                        : scrolled
                        ? 'text-theme-primary hover:text-blue-500 dark:hover:text-accent-400'
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-purple-600" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300'
                  : 'bg-white/20 backdrop-blur-sm text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={18} className="purple-600" />
              ) : (
                <Sun size={18} className="text-yellow-400" />
              )}
            </motion.button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-md transition-colors touch-manipulation ${
                scrolled ? 'text-theme-primary' : 'text-white'
              }`}
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
        className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-md border-t border-theme shadow-lg"
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors touch-manipulation ${
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