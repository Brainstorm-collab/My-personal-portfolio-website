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
      role: 'Software Engineering Intern',
      company: 'Five Data Products and Solutions Pvt. Ltd.',
      location: 'Hyderabad, India',
      period: 'Feb 2026 — Present',
      points: [
        'Architected and built a self-service, multi-tenant analytics dashboard, my main project, integrated into the company platform as a Webpack Module Federation remote with per-tenant data isolation.',
        'Built a no-code query builder so non-technical users create live charts without SQL, with a drag-and-drop designer, multiple chart types, column whitelisting, and UI-driven joins.',
        'Integrated an AI natural-language layer with RAG pipelines and agentic workflows (a LangChain data dictionary and a tool-calling SQL agent, built with the team), and owned the stateless orchestration across React, Node/Express, and Postgres.',
        'Designed clean REST APIs and modular NestJS services, with secure authentication via Keycloak and JWT for multi-tenant isolation.',
      ],
    },
    {
      role: 'Full Stack Web Developer Intern',
      company: 'Solar Secure Solutions (MSME, Govt. of India)',
      location: 'Remote',
      period: 'Feb 2025 — Mar 2025',
      points: [
        'Built secure REST APIs and responsive frontend flows for reliable client-server data exchange.',
        'Implemented server-side validation and authentication flows, and earned an "Excellent" rating from the engineering lead.',
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
              I'm Gali Eesaan, a full-stack engineer who builds AI-powered, multi-tenant systems and
              the full stack around them.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I design and integrate RAG pipelines, LLM agentic workflows, and stateless
              orchestration that connect language models to real business data, then build the rest
              of the product across React, Next.js, NestJS, Node.js, and Postgres with clean REST
              APIs. I care most about API design, orchestration, authentication, and performance. On
              past work I cut load times from 15+ seconds to under 6 with caching, query
              optimization, and request batching.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of work I solve problems on CodeChef (3-star as brainstorm_69, 1600+ solved)
              and build side projects to try out tools I don't use day-to-day.
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
