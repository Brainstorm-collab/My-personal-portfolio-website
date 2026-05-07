import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const LazyImage = React.memo(
  ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '100px' }
      );

      if (imgRef.current) observer.observe(imgRef.current);
      return () => observer.disconnect();
    }, []);

    const handleLoad = useCallback(() => setIsLoaded(true), []);

    return (
      <div ref={imgRef} className="relative w-full h-full">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl" />
        )}
        {isInView && (
          <img
            src={src}
            alt={alt}
            className={`${className} transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    );
  }
);

const projects = [
  {
    title: 'Creatr',
    tagline: 'AI-powered content management platform',
    description:
      'Full-stack AI blogging platform with automated content generation, scheduling, and real-time analytics.',
    impact: [
      'Reduced content generation latency from 15–18s to ~5s with optimized Gemini API integration and request batching',
      'Built sub-second dashboard with caching, request deduplication, and optimized data fetching',
      'Real-time content sync across clients via Convex reactive queries',
    ],
    image: '/imgs/Creatr.png',
    techStack: ['Next.js', 'TypeScript', 'Convex', 'Tailwind CSS', 'Gemini AI', 'Clerk'],
    github: 'https://github.com/Brainstorm-collab/creatr',
    demo: 'https://creatr-alpha.vercel.app/',
  },
  {
    title: 'CareerFlow',
    tagline: 'Serverless ATS-lite job recruitment platform',
    description:
      'Job recruitment platform with role-based access for candidates and recruiters, built on a real-time serverless backend.',
    impact: [
      'Implemented OAuth (Google/Facebook), resume uploads, and recruiter/candidate workflows with role-based access control',
      'Improved frontend performance via lazy loading, virtualized lists, request deduplication, and PWA caching',
      'Real-time application tracking with optimistic UI updates and Convex reactive queries',
    ],
    image: '/imgs/CareerFlow.png',
    techStack: ['React', 'Vite', 'Convex', 'Tailwind CSS', 'OAuth 2.0'],
    github: 'https://github.com/Brainstorm-collab/CareerFlow',
    demo: 'https://careerflowjb.vercel.app/',
  },
  {
    title: 'Cosypos',
    tagline: 'Full-stack restaurant point-of-sale system',
    description:
      'Restaurant POS with order tracking, inventory management, staff attendance, and three-tier role-based access.',
    impact: [
      'Reduced application load time from 15–20s to under 6s through multi-layer caching and query optimization',
      'Built JWT auth with three-tier role hierarchy (Admin/Staff/User) and granular permission controls',
      'Designed 11 Prisma models with strategic indexing, connection pooling, and ETag-based HTTP caching',
    ],
    image: '/imgs/demo-cosypos.png',
    techStack: ['React', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/Brainstorm-collab/cosyposy-Org',
    demo: 'https://cosyposy.vercel.app/',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 lg:py-32 bg-theme-primary dark:bg-gradient-to-br dark:from-dark-950 dark:to-dark-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-theme-primary mb-5 tracking-tight">
              Projects
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Project rows */}
          <div className="space-y-20 sm:space-y-28">
            {projects.map((project, idx) => {
              const imageOnLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                  {/* Image */}
                  <div
                    className={`${
                      imageOnLeft ? 'lg:order-1' : 'lg:order-2'
                    } relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 aspect-[16/10]`}
                  >
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      imageOnLeft ? 'lg:order-2' : 'lg:order-1'
                    } space-y-5`}
                  >
                    <div>
                      <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-2">
                        {project.tagline}
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {project.impact.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">
                            ▸
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-3">
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-blue-600 rounded-lg hover:bg-gray-700 dark:hover:bg-blue-500 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
