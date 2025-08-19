import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
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
    },
  };

  const projects = [
    {
      title: "CAREERFLOW",
      description:
        "A full-stack job portal application built with React 18, TypeScript, and Tailwind CSS. Features user authentication with Clerk, role-based access control (job seekers vs employers), job posting and management system, advanced search and filtering, application tracking, resume uploads via Supabase Storage, company profiles with logo management, and real-time notifications. Implements PostgreSQL database with Row Level Security policies, responsive mobile-first design, and secure file handling.",
      image: "/imgs/CareerFlow.png",
      techStack: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Clerk Auth",
        "Shadcn UI",
        "Row Level Security",
        "Real-time Subscriptions",
        "File Storage",
      ],
      github: "https://github.com/Brainstorm-collab/CareerFlow",
      demo: "#",
    },
    {
      title: "FoodieHub",
      description:
        "A modern, responsive food delivery web application built with React 18, TypeScript, and Tailwind CSS. Features interactive menu with real-time search, advanced filtering, sorting, one-click cart and wishlist management, and multi-step checkout with live order tracking. Implements robust authentication, session persistence, and payment integration (UPI), all within a performance-optimized, mobile-first design.",
      image: "/imgs/FoodieHub.png",
      techStack: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Context API",
        "Vite",
      ],
      github: "https://github.com/Brainstorm-collab/FoodieHub.git",
      demo: "https://foodie-8evm45rcs-eesaans-projects.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather application powered by the OpenWeather API. Offers dynamic city-based search, responsive UI, and live data display including temperature, humidity, and wind speed. Features dynamic backgrounds, color transitions, and cross-device optimization.",
      image: "/imgs/weather.png",
      techStack: [
        "React.js",
        "Vite",
        "CSS3",
        "LocalStorage",
        "Framer Motion",
        "Responsive Design",
      ],
      github: "https://github.com/Brainstorm-collab/weather-app",
      demo: "#",
    },
    {
      title: "Snake Game",
      description:
        "An interactive retro Snake Game built using Python and Pygame. Implements real-time collision detection, responsive controls, scoring mechanism, and enhanced visual elements for smooth gameplay.",
      image: "/imgs/snake.png",
      techStack: [
        "Python 3",
        "Pygame",
        "Game Loop Logic",
        "Collision Detection",
        "Event Handling",
      ],
      github: "https://github.com/Brainstorm-collab/PythonSnakeGameProject.git",
      demo: "#",
    },
    {
      title: "2048 React Game",
      description:
        "A fully responsive 2048 puzzle game built with React and Vite, featuring smooth iOS-style animations, score tracking via localStorage, undo functionality, dark mode, and swipe gesture support. Focuses on clean state management and modular component architecture.",
      image: "/imgs/2048.png",
      techStack: [
        "React.js",
        "Vite",
        "CSS3",
        "LocalStorage",
        "Framer Motion",
        "Responsive Design",
      ],
      github: "https://github.com/Brainstorm-collab/2048-react-game",
      demo: "https://2048-react-game-three.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-theme-secondary dark:bg-gradient-to-br dark:from-dark-900 dark:to-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
            <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto px-4 leading-relaxed">
              A showcase of my recent work, featuring full-stack applications
              and innovative solutions that demonstrate my technical skills and
              passion for creating meaningful software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-theme-primary dark:bg-dark-700 rounded-2xl overflow-hidden shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`, e);
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
                    }}
                    onLoad={() => {
                      console.log(`Image loaded successfully: ${project.image}`);
                    }}
                    style={{
                      minHeight: '128px',
                      backgroundColor: '#f3f4f6',
                      display: 'block'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Hover overlay with project info */}
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500 p-3 sm:p-4">
                    <div className="text-white">
                      <h4 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-theme-primary mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-theme-secondary mb-3 sm:mb-4 lg:mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 lg:mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full font-medium border border-blue-200 dark:border-blue-700/50 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 dark:bg-dark-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-dark-700 transition-all duration-300 font-medium text-xs sm:text-sm lg:text-base border border-gray-700 dark:border-dark-600 hover:border-gray-600 dark:hover:border-dark-500 hover-glow touch-manipulation"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Code</span>
                      <span className="sm:hidden">GitHub</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 text-white rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all duration-300 font-medium text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-glow-purple touch-manipulation"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      {project.demo === "#" ? (
                        <span className="hidden sm:inline">Demo</span>
                      ) : (
                        <span className="hidden sm:inline">Live Demo</span>
                      )}
                      {project.demo === "#" ? (
                        <span className="sm:hidden">Demo</span>
                      ) : (
                        <span className="sm:hidden">Live</span>
                      )}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-10 sm:mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 text-white rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-glow-purple text-sm sm:text-base"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
