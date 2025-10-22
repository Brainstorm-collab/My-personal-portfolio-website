import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Calendar, Users, Code, Zap } from "lucide-react";
import TechStackList from "./TechStackList";
import { useScrollPerformance } from "../hooks/useScrollPerformance";

// Lazy Image Component for better performance
const LazyImage = React.memo(({ src, alt, className, style, onError, onLoad }: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onError?.(e);
  }, [onError]);

  return (
    <div ref={imgRef} className="relative">
      {!isLoaded && (
        <div 
          className={`${className} bg-gray-200 dark:bg-gray-700 animate-pulse`}
          style={style}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Optimized scroll performance
  useScrollPerformance({
    throttleMs: 16, // 60fps
    onScroll: () => {
      // Optional: Add scroll-based animations or effects
    },
    onScrollEnd: () => {
      // Optional: Trigger actions when scrolling stops
    },
  });

  // Memoized event handlers for better performance
  const handleProjectClick = useCallback((index: number) => {
    setSelectedProject(index);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProject(index);
    }
  }, []);

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
      }        }
      });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Optimized animation variants for better performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05, // Reduced delay
        staggerChildren: 0.05, // Reduced stagger
        duration: 0.3, // Faster animation
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 10, opacity: 0 }, // Reduced movement
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Faster animation
        ease: "easeOut" as const
      }
    },
  }), []);

  // Memoize projects data to prevent unnecessary re-renders
  const projects = useMemo(() => [
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
        "CareerFlow is a serverless ATS-lite platform that connects job seekers and employers with a smooth, high-performance experience. It includes Google/Facebook OAuth and email/password authentication, role-based access (candidate vs recruiter), real-time data via Convex, and a responsive React (Vite + Tailwind) UI. Users can post jobs, apply, save jobs, manage candidates, receive notifications, and handle resumes, with lazy/deferred routing, virtualized lists, request caching/deduplication, and a production-only service worker for fast, reliable UX.",
      detailedDescription: "CareerFlow is a comprehensive serverless ATS-lite platform that revolutionizes the job market by providing a seamless, high-performance experience for both job seekers and employers. Built with modern technologies including React 18, Vite, and Convex, it features Google/Facebook OAuth and email/password authentication with role-based access control. The platform offers advanced job search with multi-criteria filtering, real-time application tracking and notifications, secure resume upload and handling via Convex storage, and comprehensive candidate management. With lazy/deferred routing, virtualized lists, request caching/deduplication, and a production-only service worker, CareerFlow delivers fast, reliable UX with optimistic UI updates and protected routes. The application demonstrates enterprise-grade architecture with real-time data synchronization, local storage session handling, and comprehensive authentication guards.",
      image: "/imgs/CareerFlow.png",
      techStack: [
        "React 18",
        "Vite 5",
        "Tailwind CSS",
        "Convex",
        "React Router v6",
        "Google OAuth",
        "Facebook SDK",
        "Radix UI",
        "React Hook Form",
        "Zod Validation",
        "Service Worker",
        "Embla Carousel",
      ],
      detailedTechStack: [
        "React 18",
        "Vite 5",
        "Tailwind CSS",
        "Convex (queries/mutations, storage)",
        "React Router v6",
        "@react-oauth/google",
        "Facebook SDK",
        "Radix UI primitives",
        "Custom UI components",
        "React Hook Form",
        "Zod validation",
        "Service Worker (prod-only)",
        "Embla Carousel",
        "Lucide Icons",
        "Real-time data synchronization",
        "Optimistic UI updates",
        "Request caching/deduplication",
        "Virtualized lists",
        "Lazy/deferred routing",
        "Local storage session handling",
        "Protected routes and authentication guards"
      ],
      features: [
        "Advanced job search with multi-criteria filtering",
        "Real-time application tracking and notifications",
        "Role-based access control (candidates vs recruiters)",
        "Secure resume upload and handling via Convex storage",
        "Job posting and candidate management",
        "Saved jobs and application history",
        "Responsive, modern UI with lazy/deferred routing",
        "Optimistic UI updates and request deduplication",
        "Protected routes and authentication guards",
        "Local storage session handling with Convex sync",
        "Google/Facebook OAuth authentication",
        "Email/password authentication",
        "Virtualized lists for performance",
        "Production-only service worker",
        "Request caching and deduplication",
        "Real-time data synchronization"
      ],
      challenges: [
        "Google OAuth origin errors: Fixed by strict env usage and allowed origins; added dev SW disable to prevent stale bundles",
        "Convex query writes: Removed invalid writes inside queries; merged fields in-memory for safe read operations",
        "Data consistency and UX: Used optimistic updates, caching hooks, and virtualized lists to keep UI snappy with real-time data",
        "Role-based navigation: Centralized auth state and guards to route users by role without flicker",
        "Implementing complex state management across multiple data layers",
        "Creating efficient search algorithms with real-time filtering",
        "Building secure file upload system with comprehensive validation",
        "Designing role-based access control for different user types",
        "Optimizing performance with code splitting and lazy loading",
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
      title: "Cosyposy",
      description:
        "A comprehensive full-stack restaurant Point of Sale (POS) system that combines real-time data synchronization, role-based access control, and performance optimization. Features advanced order management with multi-status workflow, dynamic menu management, intelligent inventory tracking, and sophisticated staff attendance monitoring. Response times improved from 20-30 seconds to under 1 second.",
      detailedDescription: "CosyPOS is a comprehensive full-stack restaurant Point of Sale (POS) system that combines real-time data synchronization, role-based access control, and enterprise-grade performance optimization to deliver a complete solution for restaurants, cafes, and food service businesses. The platform features advanced order management with multi-status workflow (Pending → In Progress → Served → Paid), dynamic menu management with category organization, intelligent inventory tracking with low-stock alerts, and sophisticated staff attendance monitoring. Built with React 19.1.1, Node.js 22.16.0, Express 5.1.0, and Prisma ORM 6.17.1 with PostgreSQL, it includes a comprehensive reservation system with table allocation, real-time dashboard analytics with Recharts visualization, and professional image management with Sharp optimization reducing payload by 70-90%. The platform offers enterprise-grade security with JWT authentication, three-tier role hierarchy (Admin/Staff/User), and granular permission controls. Professional architecture demonstrates 11 optimized database models with strategic indexing, ETag-based HTTP caching, request deduplication, image optimization middleware, and rate limiting, delivering response times under 1 second across 4,000+ lines of production code with 161+ optimized images.",
      image: "/imgs/demo-cosypos.png",
      techStack: [
        "React 19",
        "Node.js 22",
        "Express 5",
        "Prisma ORM 6",
        "PostgreSQL",
        "JWT",
        "Sharp",
        "Recharts",
        "Multer",
        "bcryptjs",
        "Helmet",
        "CORS",
      ],
      detailedTechStack: [
        "React 19.1.1",
        "Node.js 22.16.0",
        "Express 5.1.0",
        "Prisma ORM 6.17.1",
        "PostgreSQL",
        "JWT 9.0.2",
        "bcryptjs 2.4.3",
        "Sharp 0.34.4",
        "Multer 1.4.5-lts.1",
        "Recharts 3.3.0",
        "React Icons 5.5.0",
        "Lucide React 0.546.0",
        "Helmet 8.0.0",
        "Compression 1.7.4",
        "CORS 2.8.5",
        "Express Rate Limit 8.1.0",
        "dotenv 17.2.3",
        "Vite 7.1.7",
        "React Router 7.9.4",
        "ESLint 9.36.0",
        "Context API",
        "Custom CSS",
        "Lazy Loading",
        "Code Splitting",
      ],
      features: [
        "Real-time dashboard with business metrics and KPIs",
        "Advanced order management with 5-status workflow system",
        "Dynamic menu management with category organization and image upload",
        "Comprehensive reservation system with table and floor management",
        "Staff management with attendance tracking and clock-in/out system",
        "Intelligent inventory tracking with low-stock alerts and par levels",
        "Reports & analytics with Recharts and Chart.js visualization",
        "JWT authentication with three-tier role-based access control",
        "Image optimization with Sharp (70-90% size reduction, 4 presets)",
        "Real-time data synchronization with custom React hooks",
        "ETag-based HTTP caching for sub-millisecond responses",
        "Pagination support for large datasets (50-100 items per page)",
        "Request deduplication preventing stampeding herd problem",
        "Session management with auto-refresh and token expiration",
        "Toast notifications for real-time user feedback",
        "Mobile-responsive design optimized for all devices",
        "Performance monitoring with comprehensive error handling",
        "Rate limiting (100 req/min general, 10 req/15min auth)",
        "Database connection pooling with graceful shutdown",
        "Protected routes with role-based permission checking",
        "Dark theme UI with modern animations",
        "Prisma Studio integration for database management",
        "Multi-size image presets (thumbnail/small/medium/large)",
        "Comprehensive API with RESTful design patterns",
      ],
      challenges: [
        "Reducing response times from 20-30 seconds to under 1 second - Implemented multi-layer caching with ETag support and in-memory cache, added request deduplication middleware to solve stampeding herd problem, optimized database queries with strategic field selection and indexing",
        "Managing large image files (161+ images) efficiently - Integrated Sharp for automatic compression and resizing (4 size presets), implemented in-memory LRU cache for processed images, achieved 70-90% reduction in payload size",
        "Building complex multi-status order workflow system - Designed state machine for order progression with audit trail, implemented real-time tracking with status notifications, created comprehensive order history and analytics",
        "Implementing granular role-based access control - Developed three-tier hierarchy with custom permission JSON, created middleware for route and feature-level checking, built dynamic permission management system",
        "Designing scalable database architecture - Created 11 optimized Prisma models with strategic relationships, implemented comprehensive indexing on frequently queried fields, configured connection pooling (10 connections, 20s timeout)",
        "Handling concurrent requests and database connections - Implemented request deduplication with 30-second timeout, added graceful shutdown handling for database connections, configured Prisma client singleton pattern",
        "Building real-time staff attendance tracking - Created clock-in/clock-out with break time tracking, implemented date-based queries with status management, designed attendance reports with performance analytics",
        "Creating comprehensive reservation system - Built table allocation with floor management and capacity limits, implemented date/time validation and conflict prevention, created multi-status workflow with deposit tracking",
        "Optimizing frontend performance with lazy loading - Implemented code splitting for all major routes, created custom lazy components with React Suspense, reduced initial bundle size and improved TTI",
        "Implementing secure file upload system - Integrated Multer with file type validation and size limits, created separate directories for categories, menu, and profiles, added security checks and sanitization",
      ],
      github: "https://github.com/Brainstorm-collab/cosyposy-Org",
      demo: "https://cosyposy.vercel.app/",
      duration: "1 months",
      teamSize: "solo developer",
      status: "Live & Active"
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
  ], []); // Empty dependency array since projects data is static

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
                  y: -5, // Reduced movement
                  scale: 1.01, // Reduced scale
                  transition: { duration: 0.2 }, // Faster transition
                }}
                onClick={() => handleProjectClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title} project`}
                className="group bg-theme-primary dark:bg-dark-700 rounded-2xl overflow-hidden shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="relative overflow-hidden">
                  <LazyImage
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
                      imageRendering: (project.title === "CAREERFLOW" ? "smooth" : "auto") as React.CSSProperties['imageRendering'],
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

                  <TechStackList 
                    techStack={project.techStack} 
                    className="mb-3 sm:mb-4 lg:mb-6"
                    maxItems={8}
                  />

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
            onClick={handleModalClose}
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
                onClick={handleModalClose}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    handleModalClose();
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
                        <LazyImage
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
                    <TechStackList 
                      techStack={projects[selectedProject].detailedTechStack || projects[selectedProject].techStack}
                      className="gap-3"
                      maxItems={20}
                    />
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

export default React.memo(Projects);
