import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-theme-primary dark:bg-dark-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.12),transparent_55%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto py-32 sm:py-40"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-6"
          >
            Full-Stack Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-theme-primary tracking-tight leading-[1.05] mb-6"
          >
            Gali Eesaan.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-500 dark:text-gray-400 tracking-tight leading-[1.1] mb-8"
          >
            I build full-stack web apps.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-10"
          >
            I work on web apps with{' '}
            <span className="text-theme-primary font-semibold">NestJS</span>,{' '}
            <span className="text-theme-primary font-semibold">Next.js</span>, and{' '}
            <span className="text-theme-primary font-semibold">Postgres</span>. The parts I care
            about most are the ones that don't usually get the spotlight: API design, database
            schemas, auth, and performance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-blue-600 rounded-lg hover:bg-gray-700 dark:hover:bg-blue-500 transition-colors"
            >
              View projects
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="/imgs/Eesaan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
