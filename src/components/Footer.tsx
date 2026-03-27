import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent mb-2">
              Dhinesh H
            </h3>
            <p className="text-slate-400">Full Stack Developer</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <motion.a href="#" className="hover:text-accent transition-colors" whileHover={{ x: 5 }}>
                  Resume/CV
                </motion.a>
              </li>
              <li>
                <motion.a href="#" className="hover:text-accent transition-colors" whileHover={{ x: 5 }}>
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a href="#" className="hover:text-accent transition-colors" whileHover={{ x: 5 }}>
                  Documentation
                </motion.a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-accent/20 pt-8 text-center"
        >
          <p className="text-slate-400">
            © {currentYear} Dhinesh T. All rights reserved. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
