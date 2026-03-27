import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: HiMail,
      title: 'Email',
      details: 'dhinesh@example.com',
      color: '#ff6b6b',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      color: '#4ecdc4',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      details: 'City, Country',
      color: '#45b7d1',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: '#', label: 'GitHub' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent to-accentLight mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="p-4 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${method.color}20` }}
                    >
                      <IconComponent size={24} style={{ color: method.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-slate-400">{method.details}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-accent/20">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="p-3 bg-secondary rounded-lg border border-accent/30 text-slate-300 hover:text-accent hover:border-accent transition-all"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-accent/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-accent/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-accent/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accentLight text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
