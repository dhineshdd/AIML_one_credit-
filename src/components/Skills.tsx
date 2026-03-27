import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiJavascript, SiTypescript, SiGit } from 'react-icons/si';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61dafb' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
        { name: 'Git', icon: SiGit, color: '#f1502f' },
      ],
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent to-accentLight mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-8 text-center">{category.title}</h3>
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-secondary rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all group"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 0 20px ${skill.color}40`,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent
                            size={40}
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        <h4 className="font-semibold text-center text-slate-300 group-hover:text-accent transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-secondary rounded-lg border border-accent/20"
        >
          <h3 className="text-xl font-semibold text-accent mb-4">Other Skills & Tools</h3>
          <p className="text-slate-300">
            REST APIs • Database Design • UI/UX Principles • Problem Solving • Code Optimization • 
            Testing & Debugging • Agile Methodologies • Team Collaboration • Docker • Cloud Services
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
