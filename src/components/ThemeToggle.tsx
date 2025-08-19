import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'floating';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'default' 
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const baseClasses = `flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-900 ${sizeClasses[size]}`;

  const variantClasses = {
    default: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 hover:scale-105',
    minimal: 'bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-700',
    floating: 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border border-gray-200/50 dark:border-dark-600/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-700 shadow-lg hover:shadow-xl'
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon size={iconSizes[size]} className="text-purple-600" />
      ) : (
        <Sun size={iconSizes[size]} className="text-yellow-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
