import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      },
    },
  };

  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      content:
        "Currently pursuing my degree at Bharat University, focusing on Computer Science and Software Engineering. Always learning new technologies and staying updated with industry trends.",
    },
    {
      icon: Briefcase,
      title: "Experience",
      content:
        "Passionate about full-stack development with hands-on experience in React, Python, and AI technologies. Building projects that solve real-world problems and enhance user experiences.",
    },
    {
      icon: Heart,
      title: "Interests",
      content:
        "Passionate about clean code architecture, modern UI/UX design, and open-source contribution. I actively explore new frameworks, AI-assisted workflows, and solve algorithmic challenges on platforms like CodeChef — all fueling my drive to build efficient and impactful digital solutions.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-theme-secondary dark:bg-gradient-to-br dark:from-dark-800 dark:to-dark-700">
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
              About Me
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
            <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed px-4">
              I'm a passionate full-stack developer with a strong foundation in
              modern web technologies. My journey in software development is
              driven by curiosity, creativity, and a commitment to building
              solutions that make a positive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-theme-primary dark:bg-dark-700 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover hover-lift"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 rounded-2xl mb-3 sm:mb-4 lg:mb-6 mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <card.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-primary mb-2 sm:mb-3 lg:mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-accent-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-theme-secondary leading-relaxed text-center">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="bg-theme-primary dark:bg-dark-700 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-theme hover:shadow-theme-hover transition-all duration-300 border border-theme hover:border-theme-hover max-w-4xl mx-auto hover-lift">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-primary mb-3 sm:mb-4 lg:mb-6">
                My Mission
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-theme-secondary leading-relaxed">
                To leverage technology as a force for positive change, creating
                innovative solutions that bridge the gap between complex
                problems and elegant, user-friendly applications. I believe in
                writing clean, maintainable code and collaborating with teams to
                build products that truly matter.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
