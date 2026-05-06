import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Next.js', level: 30 },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python / Django', level: 90 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'REST APIs', level: 95 },
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Render', level: 75 },
      { name: 'Vercel / AWS', level: 80 },
      { name: 'Figma', level: 70 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillsData.map((categoryGroup, index) => (
            <div key={index} className="flex flex-col space-y-8">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl font-bold text-white mb-2"
              >
                {categoryGroup.category}
              </motion.h3>

              <div className="space-y-6">
                {categoryGroup.skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                    className="relative group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-mutedForeground font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-indigo-500 relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
