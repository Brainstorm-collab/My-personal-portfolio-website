import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut' as const,
      },
    },
  };

  const skillGroups = [
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      title: 'Frontend',
      skills: [
        'Next.js',
        'React',
        'Module Federation',
        'Tailwind CSS',
        'shadcn/ui',
        'Framer Motion',
        'Zustand',
        'React Hook Form + Zod',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'NestJS',
        'Node.js',
        'Express.js',
        'BullMQ',
        'REST APIs',
        'Drizzle',
        'Prisma',
      ],
    },
    {
      title: 'Databases & Auth',
      skills: [
        'PostgreSQL',
        'Convex',
        'Keycloak',
        'JWT',
        'OAuth 2.0',
        'Clerk',
        'Supabase',
      ],
    },
    {
      title: 'Infrastructure',
      skills: [
        'Docker',
        'AWS S3',
        'Webpack',
        'Activepieces',
        'Flyway',
        'Git',
        'Vercel',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-32 bg-theme-secondary dark:bg-gradient-to-br dark:from-dark-900 dark:to-dark-800 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-theme-primary mb-5 tracking-tight">
              Skills
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Lead-in sentence */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mb-14 sm:mb-16 max-w-3xl leading-relaxed"
          >
            My core stack is Next.js, NestJS, and Postgres with TypeScript.
          </motion.p>

          {/* Categorized list */}
          <div className="space-y-8 sm:space-y-10">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 items-baseline border-b border-gray-200 dark:border-gray-800 pb-8 sm:pb-10 last:border-b-0 last:pb-0"
              >
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400">
                  {group.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
                  {group.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default">
                        {skill}
                      </span>
                      {sIdx < group.skills.length - 1 && (
                        <span className="mx-2.5 text-gray-300 dark:text-gray-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
