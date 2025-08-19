import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React 18", level: 92, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Next.js", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "HTML/CSS", level: 92, color: "from-orange-400 to-orange-600" },
        { name: "Tailwind CSS", level: 89, color: "from-teal-400 to-teal-600" },
        { name: "Framer Motion", level: 85, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 85, color: "from-green-400 to-green-600" },
        { name: "Node.js", level: 82, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "PostgreSQL", level: 75, color: "from-blue-500 to-indigo-600" },
        { name: "SupaBase", level: 72, color: "from-green-600 to-green-800" },
        { name: "Authentication", level: 85, color: "from-green-600 to-green-800" },
        { name: "Context API", level: 88, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Vite", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Git/GitHub", level: 88, color: "from-gray-700 to-gray-900" },
        { name: "Docker", level: 70, color: "from-blue-400 to-blue-600" },
        { name: "Figma", level: 82, color: "from-purple-400 to-purple-600" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700" },
        { name: "PostMan", level: 81, color: "from-yellow-500 to-yellow-700" },
        { name: "Redux Toolkit", level: 85, color: "from-orange-400 to-orange-600" }
      ]
    }
  ];

  const techIcons = [
    { name: "React 18", icon: "⚛️" },         // Atomic symbol = perfect for React
    { name: "TypeScript", icon: "📘" },       // Blue book = TypeScript
    { name: "Python", icon: "🐍" },        // Snake = Python 🐍
    { name: "JavaScript", icon: "📜" },    // Scroll = JavaScript scripting
    { name: "Supabase", icon: "🗄️" },      // Database = Supabase backend
    { name: "Clerk", icon: "🔐" },         // Lock = Clerk authentication
    { name: "Shadcn UI", icon: "🎨" },     // Palette = Shadcn UI components
    { name: "Express.js", icon: "🚂" },    // Train = "Express" (like a fast engine)
    { name: "Node.js", icon: "🌲" },       // Tree = Node (as in node/tree structure)
    { name: "Git", icon: "🔧" },           // Wrench = version control/tool
    { name: "Vite", icon: "⚡" },          // Lightning = Vite (fast build tool)
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-theme-primary dark:bg-gradient-to-br dark:from-dark-900 dark:to-dark-800">
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
              Skills & Expertise
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
            <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto px-4 leading-relaxed">
              Blending expertise with enthusiasm for evolving technologies, I approach every task with certainty—ready to provide powerful results through refined and up-to-date skills.
            </p>
          </motion.div>

          {/* Tech Icons */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center p-2.5 sm:p-3 lg:p-4 bg-theme-primary dark:bg-dark-700 rounded-2xl shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift touch-manipulation"
                >
                  <div className="text-xl sm:text-2xl lg:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <span className="text-xs sm:text-sm font-medium text-theme-secondary group-hover:text-blue-600 dark:group-hover:text-accent-400 transition-colors text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-theme-primary dark:bg-dark-700 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-primary mb-3 sm:mb-4 lg:mb-6 text-center group-hover:text-blue-600 dark:group-hover:text-accent-400 transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-theme-secondary text-xs sm:text-sm lg:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-theme-tertiary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-1.5 sm:h-2 lg:h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative shadow-sm`}
                        >
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-white/30 dark:bg-white/20 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-theme-primary dark:bg-dark-700 rounded-2xl p-6 sm:p-8 shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover max-w-4xl mx-auto hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-4 sm:mb-6">Always Learning</h3>
              <p className="text-base sm:text-lg text-theme-secondary leading-relaxed">
               Continuously learning modern web technologies, AI-enhanced systems, and cloud-native DevOps to build smarter, scalable applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;