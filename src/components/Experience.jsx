import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [

  {
    year: '2026 - Present',
    role: 'Full Stack Developer',
    company: 'Self Employed / Personal Projects',
    description: 'Building full-stack web applications using React.js, Node.js, and Django. Developed scalable and responsive applications including authentication systems, dashboards, and API integrations. Focused on performance optimization and modern UI/UX design.',
  },
  {
    year: '2025 - 2026',
    role: 'Freelance Web Developer',
    company: 'Freelancing',
    description: 'Worked with clients to design and develop responsive websites and web applications. Delivered custom solutions including landing pages, business websites, and dynamic web apps. Improved client satisfaction through timely delivery and optimized performance.',
  },
  {
    year: '2024 - 2025',
    role: 'Frontend Developer (Projects)',
    company: 'Personal Projects',
    description: 'Started web development journey by building multiple frontend projects using HTML, CSS, JavaScript, and React. Created responsive UI designs, implemented animations, and improved user experience across devices.',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Experience & Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)] z-10" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="glass-panel p-6 border border-white/5 hover:border-primary/30 transition-colors duration-300">
                  <span className="text-primary font-medium text-sm mb-2 block">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-mutedForeground font-medium mb-4">{exp.company}</h4>
                  <p className="text-mutedForeground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
