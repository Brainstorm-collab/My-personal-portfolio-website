import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Calendar, Users, Code, Zap } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Handle escape key to close modal and focus management
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject !== null) {
        setSelectedProject(null);
      }
    };

    if (selectedProject !== null) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus management - focus the modal when it opens
      requestAnimationFrame(() => {
        const modal = document.querySelector('[role="dialog"]') as HTMLElement;
        if (modal) {
          modal.focus();
        }
      });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
      title: "CREATR",
      description:
        "A sophisticated, full-stack AI-powered content creation platform that revolutionizes how creators generate, manage, and publish blog content. Built with cutting-edge technologies including Next.js 15, React 19, Google Gemini AI, and Convex real-time database. Features advanced AI content generation, rich text editor, real-time analytics, social features, and professional image management with ImageKit integration.",
      detailedDescription: "Creatr is a comprehensive AI-powered content creation platform that combines artificial intelligence, real-time data synchronization, and modern web development practices to deliver a complete solution for content creators, bloggers, and digital marketers. The platform features Google Gemini AI integration for automated blog writing (800-1200 words), content enhancement, SEO optimization, and image prompt generation. Built with Next.js 15.4.6, React 19.1.0, and Convex 1.25.4, it includes a sophisticated content management system with React Quill rich text editor, auto-save functionality, content scheduling, and comprehensive analytics with Chart.js visualization. The platform offers advanced social features including user profiles, follow system, engagement tools, and real-time activity tracking. Professional media management is handled through ImageKit integration with drag-and-drop upload, image transformations, and multiple aspect ratio support. The application demonstrates enterprise-grade architecture with 6 optimized database tables, real-time queries, comprehensive error handling, and full TypeScript coverage across 17,141+ lines of code.",
      image: "/imgs/Creatr.png",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Convex",
        "Clerk Auth",
        "Google Gemini AI",
        "Shadcn UI",
        "Tailwind CSS",
        "ImageKit",
        "React Quill",
        "Chart.js",
        "Real-time Database",
      ],
      detailedTechStack: [
        "Next.js 15.4.6",
        "React 19.1.0",
        "TypeScript",
        "Convex 1.25.4",
        "Clerk 6.31.1",
        "Google Gemini AI 0.24.1",
        "Shadcn UI",
        "Tailwind CSS 4.0",
        "ImageKit 6.0.0",
        "React Quill 3.6.0",
        "Chart.js 5.3.0",
        "Radix UI",
        "React Hook Form 7.62.0",
        "Zod 4.0.17",
        "React Dropzone 14.3.8",
        "Sonner 2.0.7",
        "Next Themes 0.4.6",
        "Real-time Database",
        "Server Components",
        "JWT Authentication",
        "Auto-save System",
        "Image Transformations",
        "SEO Optimization",
        "Responsive Design",
      ],
      features: [
        "AI-powered content generation with Google Gemini (800-1200 words)",
        "Advanced rich text editor with React Quill and auto-save",
        "Real-time analytics dashboard with Chart.js visualization",
        "Social features with follow system and engagement tools",
        "Professional image management with ImageKit integration",
        "Comprehensive user profiles with custom usernames",
        "Content scheduling and draft management system",
        "Image transformations with multiple aspect ratios",
        "SEO optimization and content enhancement tools",
        "Real-time data synchronization across all clients",
        "Anonymous interactions and moderation system",
        "Activity tracking and performance metrics",
        "Drag-and-drop file upload with React Dropzone",
        "Dark/light mode with system preference detection",
        "Responsive design optimized for all devices",
        "Advanced search and content discovery",
        "Daily statistics and growth tracking",
        "Professional authentication with Clerk themes"
      ],
      challenges: [
        "Integrating Google Gemini AI with comprehensive error handling",
        "Implementing real-time data synchronization with Convex reactive queries",
        "Building advanced image transformation pipeline with ImageKit",
        "Creating sophisticated auto-save system with 30-second intervals",
        "Designing responsive analytics dashboard with Chart.js visualization",
        "Implementing complex social features with real-time updates",
        "Optimizing performance with Next.js 15 Server Components",
        "Building comprehensive form validation with Zod schemas",
        "Creating accessible UI components with Radix UI primitives",
        "Implementing professional authentication flow with Clerk",
        "Designing scalable database architecture with 6 optimized tables",
        "Building advanced content management system with scheduling",
        "Creating intuitive drag-and-drop image upload experience",
        "Implementing comprehensive error boundaries and user feedback"
      ],
      github: "https://github.com/Brainstorm-collab/creatr",
      demo: "https://creatr-alpha.vercel.app/",
      duration: "2 months",
      teamSize: "3 developers",
      status: "Live & Active"
    },
    {
      title: "CAREERFLOW",
      description:
        "A modern, full-stack job portal platform that connects talented professionals with innovative companies worldwide. Built with cutting-edge technologies and enterprise-grade architecture, featuring advanced job search with multi-criteria filtering, real-time application tracking, role-based access control, and comprehensive company management system.",
      detailedDescription: "CareerFlow revolutionizes the job market by providing a seamless platform that efficiently connects job seekers with employers. The platform addresses the challenges of traditional job boards by offering smart job search with advanced filtering algorithms, real-time application tracking with optimistic updates, and enterprise-grade security with JWT authentication. Built with React 18, Vite, and Supabase, it demonstrates advanced full-stack development skills with a focus on user experience, performance, and scalability. The application features role-based access control for different user types, responsive design that works across all devices, and comprehensive data management with real-time synchronization.",
      image: "/imgs/CareerFlow.png",
      techStack: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Clerk Auth",
        "Shadcn UI",
        "React Hook Form",
        "Zod Validation",
        "Row Level Security",
        "Real-time Subscriptions",
        "File Upload System",
      ],
      detailedTechStack: [
        "React 18.3.1",
        "Vite 5.3.4",
        "TypeScript",
        "Tailwind CSS 3.4.7",
        "Supabase 2.45.0",
        "PostgreSQL",
        "Clerk 5.3.1",
        "Shadcn/ui",
        "React Hook Form",
        "Zod Validation",
        "Row Level Security",
        "JWT Authentication",
        "Real-time Subscriptions",
        "File Upload System",
        "Optimistic Updates",
        "Local Storage Sync",
      ],
      features: [
        "Advanced job search with multi-criteria filtering",
        "Real-time application tracking with status updates",
        "Role-based access control (candidates vs recruiters)",
        "Secure file upload with validation (PDF, DOC, DOCX)",
        "Company profile management with logo upload",
        "Job posting system with rich text editor",
        "Saved jobs and application history",
        "Responsive design for all devices",
        "Optimistic updates for immediate feedback",
        "Local storage synchronization",
        "Protected routes and authentication guards",
        "Advanced search algorithms with O(n) complexity",
        "Data persistence across browser sessions",
        "Enterprise-grade security implementation"
      ],
      challenges: [
        "Implementing complex state management across multiple data layers",
        "Creating efficient search algorithms with real-time filtering",
        "Building secure file upload system with comprehensive validation",
        "Designing role-based access control for different user types",
        "Optimizing performance with code splitting and lazy loading",
        "Implementing optimistic updates for better user experience",
        "Ensuring data consistency across real-time subscriptions",
        "Creating responsive design that works seamlessly on all devices"
      ],
      github: "https://github.com/Brainstorm-collab/CareerFlow",
      demo: "https://careerflowjb.vercel.app/",
      duration: "1 month",
      teamSize: "Solo Developer",
      status: "Live & Production Ready"
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
      demo: "https://foodie-hub-lilac.vercel.app/",
      duration: "3 weeks",
      teamSize: "Solo Developer",
      status: "Completed"
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
      demo: "https://weather-app-three-blue-95.vercel.app/",
      duration: "1 week",
      teamSize: "Solo Developer",
      status: "Completed"
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
      demo: null,
      duration: "2 weeks",
      teamSize: "Solo Developer",
      status: "Completed"
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
      duration: "5 days",
      teamSize: "Solo Developer",
      status: "Completed"
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
                onClick={() => setSelectedProject(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title} project`}
                className="group bg-theme-primary dark:bg-dark-700 rounded-2xl overflow-hidden shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
                      project.title === "CAREERFLOW" ? "object-center" : ""
                    }`}
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
                      display: 'block',
                      transform: project.title === "CAREERFLOW" ? "rotate(0deg) scaleX(1)" : "none",
                      imageRendering: project.title === "CAREERFLOW" ? "smooth" : "auto",
                      filter: project.title === "CAREERFLOW" ? "none" : "none"
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
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 text-white rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all duration-300 font-medium text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-glow-purple touch-manipulation"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-10 sm:mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Brainstorm-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 text-white rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-glow-purple text-sm sm:text-base"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-theme-primary dark:bg-dark-800 rounded-3xl shadow-2xl border border-theme focus:outline-none"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
              >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setSelectedProject(null);
                  }
                }}
                aria-label="Close project details"
                className="absolute top-4 right-4 z-10 p-2 bg-theme-secondary dark:bg-dark-700 rounded-full hover:bg-theme-tertiary dark:hover:bg-dark-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <X size={24} className="text-theme-primary" />
              </button>

              {selectedProject !== null && (
                <div className="p-6 sm:p-8 lg:p-12">
                  {/* Project Header */}
                  <div className="mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      {/* Project Image */}
                      <div className="lg:w-1/2">
                        <img
                          src={projects[selectedProject].image}
                          alt={projects[selectedProject].title}
                          className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-2xl shadow-lg bg-theme-secondary dark:bg-dark-700"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="lg:w-1/2 space-y-6">
                        <div>
                          <h2 id="project-modal-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary mb-4">
                            {projects[selectedProject].title}
                          </h2>
                          <p id="project-modal-description" className="text-lg sm:text-xl text-theme-secondary leading-relaxed">
                            {projects[selectedProject].detailedDescription || projects[selectedProject].description}
                          </p>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          <div className="bg-theme-secondary dark:bg-dark-700 p-4 rounded-xl">
                            <Calendar className="w-6 h-6 text-blue-500 mb-2" />
                            <p className="text-sm text-theme-tertiary">Duration</p>
                            <p className="font-semibold text-theme-primary">
                              {projects[selectedProject].duration || "2 months"}
                            </p>
                          </div>
                          <div className="bg-theme-secondary dark:bg-dark-700 p-4 rounded-xl">
                            <Users className="w-6 h-6 text-green-500 mb-2" />
                            <p className="text-sm text-theme-tertiary">Team Size</p>
                            <p className="font-semibold text-theme-primary">
                              {projects[selectedProject].teamSize || "Solo"}
                            </p>
                          </div>
                          <div className="bg-theme-secondary dark:bg-dark-700 p-4 rounded-xl sm:col-span-1 col-span-2">
                            <Zap className="w-6 h-6 text-purple-500 mb-2" />
                            <p className="text-sm text-theme-tertiary">Status</p>
                            <p className="font-semibold text-theme-primary">
                              {projects[selectedProject].status || "Completed"}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={projects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${projects[selectedProject].title} on GitHub`}
                            className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 dark:bg-dark-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-dark-700 transition-all duration-300 font-medium border border-gray-700 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            <Github size={20} />
                            View Code
                          </motion.a>
                          {projects[selectedProject].demo && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={projects[selectedProject].demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View live demo of ${projects[selectedProject].title}`}
                              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 text-white rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all duration-300 font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              <ExternalLink size={20} />
                              Live Demo
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  {projects[selectedProject].features && (
                    <div className="mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-6 flex items-center gap-3">
                        <Code className="w-8 h-8 text-blue-500" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projects[selectedProject].features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-theme-secondary dark:bg-dark-700 rounded-xl">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-theme-secondary">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenges Section */}
                  {projects[selectedProject].challenges && (
                    <div className="mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-6 flex items-center gap-3">
                        <Zap className="w-8 h-8 text-orange-500" />
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-4">
                        {projects[selectedProject].challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-theme-secondary dark:bg-dark-700 rounded-xl">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-theme-secondary">{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-6 flex items-center gap-3">
                      <Code className="w-8 h-8 text-green-500" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {(projects[selectedProject].detailedTechStack || projects[selectedProject].techStack).map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full font-medium border border-blue-200 dark:border-blue-700/50 hover:scale-105 transition-transform"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
