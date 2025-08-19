import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background with Theme Support */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-purple-900/50 dark:from-accent-900/50 dark:to-secondary-900/50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear" as const
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-accent-400/20 dark:to-secondary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 120, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear" as const
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-secondary-400/20 dark:to-pink-400/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern with Theme Support */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-screen py-8 sm:py-12 lg:py-20"
        >
          {/* Left Column - Text Content */}
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-accent-400 rounded-full mx-auto lg:mx-0 shadow-glow"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 dark:from-gray-50 dark:via-accent-100 dark:to-secondary-100 bg-clip-text text-transparent">
                  Gali.Eesaan
                </span>
              </h1>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-100 dark:text-accent-200"
            >
              Creative Full-Stack Developer
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 dark:text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
            >
              I build fast modern web apps with React, Node-js, and clean UI/UX. 
              Passionate about creating digital experiences that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/Eesaan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">View Resume</span>
                <span className="sm:hidden">View Resume</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/30 hover:border-white/50 dark:border-gray-400/30 dark:hover:border-gray-300/50 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-white backdrop-blur-sm transition-all duration-300 text-sm sm:text-base hover:bg-white/5 dark:hover:bg-gray-800/20 touch-manipulation"
              >
                <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Let's Connect</span>
                <span className="sm:hidden">Connect</span>
              </motion.a>
            </motion.div>

            {/* Stats or Social Proof */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 text-xs sm:text-sm text-gray-400 dark:text-gray-300 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 dark:bg-accent-400 rounded-full" />
                <span>Based in India</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              variants={imageVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Decorative Elements */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-accent-400 dark:to-secondary-500 rounded-full blur-xl opacity-60"
              />
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-400 to-pink-500 dark:from-secondary-400 dark:to-pink-500 rounded-full blur-xl opacity-40"
              />
              
              {/* Profile Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-accent-500 dark:to-secondary-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-accent-400 dark:via-secondary-500 dark:to-pink-500 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-800 dark:bg-dark-800 rounded-full flex items-center justify-center overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-accent-500 dark:to-secondary-600 flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">EG</span>
                    </div>
                    {/* Replace with actual image when available */}
                    {/* <img 
                      src="/path-to-your-image.jpg" 
                      alt="Eesaan G - Full Stack Developer"
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons - Hidden on very small screens */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" as const }
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none hidden sm:block"
              >
                {[
                  { icon: "⚛️", position: "top-0 left-1/2 -translate-x-1/2" },
                  { icon: "🔍", position: "top-1/4 right-0" },
                  { icon: "💻", position: "bottom-1/4 right-0" },
                  { icon: "🚀", position: "bottom-0 left-1/2 -translate-x-1/2" },
                  { icon: "⚡", position: "bottom-1/4 left-0" },
                  { icon: "🧠", position: "top-1/4 left-0" },
                  { icon: "📈", position: "top-1/4 left-0" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      rotate: -360,
                      transition: { duration: 20, repeat: Infinity, ease: "linear" as const }
                    }}
                    className={`absolute ${item.position} w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xs sm:text-sm lg:text-xl border border-white/20 dark:border-gray-700/30`}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 dark:text-gray-300/60"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-1 sm:gap-2"
        >
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-white/30 dark:border-gray-400/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-1.5 sm:h-2 lg:h-3 bg-white/60 dark:bg-gray-300/60 rounded-full mt-1 sm:mt-1.5 lg:mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;