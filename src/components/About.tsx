import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent to-accentLight mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-lg text-slate-300 space-y-6">
              <p>
                I'm a dedicated Full Stack Developer with a passion for creating elegant solutions to complex problems. 
                With expertise in both frontend and backend technologies, I've built numerous projects from concept to deployment.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved into a professional career focused on 
                delivering high-quality, user-centric applications that make a real impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Technologies', value: '20+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-primary border border-accent/30 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: '#60a5fa' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
