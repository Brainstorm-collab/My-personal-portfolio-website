import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const socials = [
    { icon: Github, href: 'https://github.com/Brainstorm-collab', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eesaan-gali-11o42k5', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:galieesaan@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-theme-secondary dark:bg-dark-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Brand */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-theme-primary tracking-tight">
                Gali Eesaan
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full-Stack Engineer
              </p>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-theme-primary dark:hover:text-gray-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 hover:text-theme-primary transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2026 Gali Eesaan. Designed and built by hand.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
