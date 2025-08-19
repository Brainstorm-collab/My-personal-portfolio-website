import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white py-6 sm:py-8 lg:py-12 border-t border-dark-700 dark:border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-4 sm:mb-6 lg:mb-8 p-2 sm:p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 rounded-full hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all shadow-lg hover:shadow-glow-purple touch-manipulation"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="sm:w-6 sm:h-6" />
            </motion.button>

            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 sm:mb-4 lg:mb-6"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text-primary">
                 Gali.Eesaan 
              </h3>
              <p className="text-gray-400 dark:text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">Full-Stack Web Developer</p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4 sm:mb-6 lg:mb-8 max-w-2xl px-4"
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 dark:text-gray-200 italic">
                "Code is poetry written in logic, and every line tells a story of possibility."
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4 sm:mb-6 lg:mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-accent-300 transition-colors text-xs sm:text-sm lg:text-base touch-manipulation px-2 py-1 rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.nav>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 dark:via-dark-600 to-transparent mb-4 sm:mb-6 lg:mb-8"></div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-400 dark:text-gray-300 text-xs sm:text-sm"
            >
              <span>© 2025 G.Eesaan Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-500 fill-current" />
              </motion.div>
              <span>using React & Tailwind</span>
            </motion.div>

            {/* Tech Stack Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
            >
              <p>Powered by React • Tailwind CSS • Framer Motion • TypeScript</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;