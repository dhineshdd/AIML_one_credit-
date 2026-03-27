import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-6 hidden sm:block"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-accentLight rounded-full p-1">
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-accentLight to-accent bg-clip-text text-transparent"
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-slate-300 mb-4"
        >
          Hi, I'm <span className="font-semibold text-accentLight">Dhinesh T</span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          A passionate Full Stack Developer crafting beautiful and functional web applications. 
          Specialized in React, Node.js, and modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap mb-12"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-accent to-accentLight text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            onClick={scrollToSection}
            className="text-accent hover:text-accentLight transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiArrowDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
