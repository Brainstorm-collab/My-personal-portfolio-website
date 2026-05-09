import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.05, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };

  const experience = [
    {
      role: 'Trainee Software Engineer',
      company: 'Five Data Products and Solutions Pvt. Ltd.',
      location: 'Hyderabad, India',
      period: 'Feb 2026 — Present',
      points: [
        'Working on the NestJS backend that powers our SaaS platform. It has 25+ feature modules for things like RBAC, tenants, automation, calendar, notifications, and dashboards. The data layer uses Drizzle ORM on Postgres.',
        'Building and maintaining the Module Federation setup. Our main app loads a separate dashboard app at runtime, and I work on both sides.',
        'Adding Keycloak SSO across the apps. On the Next.js side I use oidc-client with PKCE. On the NestJS side I handle JWT verification.',
        'Setting up background jobs with BullMQ and Redis, and file uploads to S3 using presigned URLs.',
      ],
    },
    {
      role: 'Full Stack Web Developer Intern',
      company: 'Solar Secure Solutions (MSME, Govt. of India)',
      location: 'Remote',
      period: 'Feb 2025 — Mar 2025',
      points: [
        'Built features for the company web app across the frontend and backend.',
        'Got an "Excellent" rating from the engineering lead at the end of the internship.',
      ],
    },
  ];

  const education = {
    degree: 'B.Tech, Computer Science and Engineering',
    school: 'Bharath Institute of Higher Education and Research',
    location: 'Chennai, India',
    period: '2022 — 2026',
    detail: 'CGPA: 8.1 / 10',
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-theme-secondary dark:bg-gradient-to-br dark:from-dark-900 dark:to-dark-800 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-theme-primary mb-4 tracking-tight">
              About
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Intro */}
          <motion.div variants={itemVariants} className="mb-14 space-y-5">
            <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
              I'm Gali Eesaan, a full-stack engineer. I build web apps and I'm comfortable working
              on any layer of the stack, backend, frontend, or database.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              The work I'm most interested in is the backend side and performance. I like designing
              APIs and database schemas, getting authentication right, and making slow apps faster.
              On past projects I've cut load times from 15+ seconds down to under 6 by fixing slow
              queries, adding caching, and batching requests.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of work I solve problems on CodeChef (3-star as brainstorm_69) and build side
              projects to try out tools I don't get to use day-to-day.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-8">
              Experience
            </h3>
            <div className="space-y-10">
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 border-b border-gray-200 dark:border-gray-800 pb-10 last:border-b-0 last:pb-0"
                >
                  <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium pt-1">
                    {job.period}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-semibold text-theme-primary tracking-tight">
                        {job.role}
                      </h4>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-1">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <ul className="space-y-2.5 pt-2">
                      {job.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <span className="text-blue-500 dark:text-blue-400 mt-2 flex-shrink-0">
                            ▸
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-8">
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10">
              <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium pt-1">
                {education.period}
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl sm:text-3xl font-semibold text-theme-primary tracking-tight">
                  {education.degree}
                </h4>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {education.school} · {education.location}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 pt-1 font-medium">
                  {education.detail}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
