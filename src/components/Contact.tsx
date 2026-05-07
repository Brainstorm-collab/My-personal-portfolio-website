import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
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
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-theme-primary dark:bg-gradient-to-br dark:from-dark-950 dark:to-dark-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-theme-primary mb-5 tracking-tight">
              Get in touch
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              I'm looking for full-time roles after graduation. If you want to work together
              or just have a question, send me a message.
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

              <div className="bg-theme-primary dark:bg-dark-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                  Send a message
                </h3>
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-theme-secondary dark:bg-dark-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors text-sm text-theme-primary placeholder-gray-400 dark:placeholder-gray-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-theme-secondary dark:bg-dark-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors text-sm text-theme-primary placeholder-gray-400 dark:placeholder-gray-600"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="user_message"
                      value={formData.user_message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 bg-theme-secondary dark:bg-dark-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none text-sm text-theme-primary placeholder-gray-400 dark:placeholder-gray-600"
                      placeholder="What are you working on?"
                    />
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-blue-600 rounded-lg hover:bg-gray-700 dark:hover:bg-blue-500 transition-colors disabled:opacity-60"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send message
                      </>
                    )}
                  </motion.button>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                  Direct
                </h3>
                <div className="space-y-1">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.title === 'Location' ? '_blank' : undefined}
                      rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                      className="group flex items-baseline gap-3 py-3 border-b border-gray-200 dark:border-gray-800 last:border-b-0 transition-colors"
                    >
                      <info.icon className="w-4 h-4 text-gray-500 dark:text-gray-400 self-center flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
                          {info.title}
                        </p>
                        <p className="text-sm sm:text-base text-theme-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5 break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                  Elsewhere
                </h3>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 hover:text-theme-primary transition-colors"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                  Resume
                </h3>
                <a
                  href="/imgs/Eesaan_Resume.pdf"
                  download="Eesaan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;