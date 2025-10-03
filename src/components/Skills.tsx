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
      icon: "🎨",
      skills: [
        { name: "React 18", experience: "Expert", color: "bg-blue-500", icon: "⚛️" },
        { name: "TypeScript", experience: "Beginner", color: "bg-blue-600", icon: "📘" },
        { name: "JavaScript", experience: "Expert", color: "bg-yellow-500", icon: "📜" },
        { name: "HTML", experience: "Expert", color: "bg-orange-500", icon: "🌐" },
        { name: "Tailwind CSS", experience: "Advanced", color: "bg-teal-500", icon: "🎨" },
        { name: "Framer Motion", experience: "Advanced", color: "bg-purple-500", icon: "✨" },
        { name: "Authentication", experience: "Advanced", color: "bg-green-600", icon: "🔐" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Python", experience: "Advanced", color: "bg-green-500", icon: "🐍" },
        { name: "Node.js", experience: "Advanced", color: "bg-green-600", icon: "🌲" },
        { name: "Next.js", experience: "Intermediate", color: "bg-gray-700", icon: "▲" },
        { name: "PostgreSQL", experience: "Intermediate", color: "bg-blue-700", icon: "🐘" },
        // { name: "Supabase", experience: "Intermediate", color: "bg-green-700", icon: "🗄️" },
        { name: "Context API", experience: "Advanced", color: "bg-blue-500", icon: "🔄" }
      ]
    },
    {
      title: "AI & Modern Stack",
      icon: "🤖",
      skills: [
        { name: "AI Integrations", experience: "Advanced", color: "bg-purple-600", icon: "🧠" },
        { name: "Shadcn UI", experience: "Advanced", color: "bg-gray-700", icon: "🎨" },
        { name: "Clerk (Auth)", experience: "Advanced", color: "bg-blue-600", icon: "🔐" },
        { name: "Convex", experience: "Beginner", color: "bg-orange-500", icon: "⚡" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", experience: "Advanced", color: "bg-gray-800", icon: "🔧" },
        { name: "Docker", experience: "Beginner", color: "bg-blue-500", icon: "🐳" },
        { name: "Figma", experience: "Beginner", color: "bg-purple-500", icon: "🎨" },
        { name: "Postman", experience: "Beginner", color: "bg-orange-600", icon: "📮" },
        { name: "Redux Toolkit", experience: "Beginner", color: "bg-purple-600", icon: "📦" }
      ]
    }
  ];

  const techIcons = [
    { name: "React 18", icon: "⚛️" },         // Atomic symbol = perfect for React
    { name: "Python", icon: "🐍" },        // Snake = Python 🐍
    { name: "JavaScript", icon: "📜" },    // Scroll = JavaScript scripting
    { name: "Next.js", icon: "▲" },        // Triangle = Next.js
    { name: "Git", icon: "🔧" },           // Wrench = version control/tool
    { name: "Tailwind CSS", icon: "🎨" },  // Palette = Tailwind CSS
    { name: "HTML", icon: "🌐" },      // Globe = HTML/CSS web technologies
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group bg-theme-primary dark:bg-dark-700 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift"
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-6 sm:mb-8">
                  <div className="text-3xl sm:text-4xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-theme-primary group-hover:text-blue-600 dark:group-hover:text-accent-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.2 }
                      }}
                      className="group/skill relative bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Skill Icon */}
                      <div className="flex items-center justify-center mb-2 sm:mb-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${skill.color} rounded-xl flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg group-hover/skill:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-xs sm:text-sm font-semibold text-theme-secondary text-center mb-1 sm:mb-2 group-hover/skill:text-theme-primary transition-colors">
                        {skill.name}
                      </h4>
                      
                      {/* Experience Level */}
                      <div className="flex justify-center">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          skill.experience === 'Expert' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : skill.experience === 'Advanced'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : skill.experience === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {skill.experience}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
                      />
                    </motion.div>
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