import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart management, and checkout flow.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
      link: '#',
    },
    {
      title: 'Social Media Feed',
      description: 'A social media feed application with user profiles, posts, and real-time notifications.',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      image: '📱',
      link: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard with data visualization and reporting capabilities.',
      technologies: ['React', 'Chart.js', 'API Integration'],
      image: '📊',
      link: '#',
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Geolocation'],
      image: '🌤️',
      link: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blogging platform with markdown support and user authentication.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: '📝',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent to-accentLight mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-all group"
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
              }}
            >
              <div className="h-40 bg-gradient-to-br from-accent/20 to-secondary flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                <span className="text-6xl">{project.image}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/50 rounded-lg hover:bg-accent hover:text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiCode size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accentLight transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                    <HiExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
