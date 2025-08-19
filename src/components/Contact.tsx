import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
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
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // EmailJS configuration with actual credentials
      const result = await emailjs.sendForm(
        'service_v3lr8zc', // Your EmailJS service ID
        'template_rxdgjnu', // Your EmailJS template ID
        formRef.current!,
        'JLKf7gGhHu_uStKDu' // Your EmailJS public key
      );

      if (result.status === 200) {
        setShowSuccess(true);
        setFormData({ user_name: '', user_email: '', user_message: '' });
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "galieesaan@gmail.com",
      href: "mailto:galieesaan@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nallejerlla, A.P, India",
      href: "https://www.google.com/maps/place/Nallajerla,+Andhra+Pradesh+534112/@16.9441674,81.3918278,14z/data=!4m15!1m8!3m7!1s0x3a3651be34e7d45d:0xa1014457c3240a0a!2sNallajerla,+Andhra+Pradesh+534112!3b1!8m2!3d16.9475376!4d81.4072346!16s%2Fm%2F02rblr7!3m5!1s0x3a3651be34e7d45d:0xa1014457c3240a0a!8m2!3d16.9475376!4d81.4072346!16s%2Fm%2F02rblr7?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8866896669",
      href: "tel:+91 8866896669"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Brainstorm-collab", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/eesaan-gali-11o42k5", label: "LinkedIn" }
    // { icon: Gmail, href: "mailto:eesaangali@gmail.com", label: "Gmail" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-theme-secondary dark:bg-gradient-to-br dark:from-dark-800 dark:to-dark-700">
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
              Let's Work Together
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
            <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto px-4 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="relative">
              {showSuccess && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center z-10 border border-green-200 dark:border-green-700/50"
                >
                  <div className="text-center px-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: 1 }}
                    >
                      <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-sm sm:text-base text-green-600 dark:text-green-300">Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                </motion.div>
              )}

              <div className="bg-theme-tertiary dark:bg-dark-700 rounded-2xl p-4 sm:p-6 lg:p-8 border border-theme hover:border-theme-hover transition-all duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-primary mb-3 sm:mb-4 lg:mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-theme-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-theme-primary dark:bg-dark-600 border border-theme rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-accent-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base text-theme-primary placeholder-gray-400 dark:placeholder-gray-500 touch-manipulation"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-theme-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-theme-primary dark:bg-dark-600 border border-theme rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-accent-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base text-theme-primary placeholder-gray-400 dark:placeholder-gray-500 touch-manipulation"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-theme-secondary mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="user_message"
                      value={formData.user_message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-theme-primary dark:bg-dark-600 border border-theme rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-accent-400 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base text-theme-primary placeholder-gray-400 dark:placeholder-gray-500 touch-manipulation"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all shadow-lg hover:shadow-glow-purple text-sm sm:text-base touch-manipulation"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send size={16} className="sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  {error && (
                    <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-primary mb-3 sm:mb-4 lg:mb-6">Get in Touch</h3>
                <p className="text-sm sm:text-base text-theme-secondary leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                  I'm always open to discussing new opportunities, creative projects, or potential 
                  collaborations. Whether you have a specific project in mind or just want to connect, 
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-theme-tertiary dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-all duration-300 border border-theme hover:border-theme-hover touch-manipulation"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 rounded-lg shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-theme-primary text-sm sm:text-base">{info.title}</h4>
                      <p className="text-theme-secondary text-xs sm:text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-theme">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-theme-primary mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 rounded-lg text-white hover:from-blue-600 hover:via-purple-600 hover:to-accent-600 transition-all shadow-lg hover:shadow-glow-purple touch-manipulation"
                      aria-label={social.label}
                    >
                      <social.icon size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download Section */}
              <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-theme">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-theme-primary mb-3 sm:mb-4">Download Resume</h4>
                <motion.a
                  href="/Eesaan_Resume.pdf"
                  download="Eesaan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-glow-purple touch-manipulation"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;