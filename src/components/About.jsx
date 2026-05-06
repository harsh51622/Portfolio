import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Zap } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '25+' },
  { label: 'Technologies Mastered', value: '10+' },
  { label: 'Years Experience', value: '3+' },
];

const cards = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    title: 'My Passion',
    description: 'I am deeply passionate about building scalable web applications that solve real-world problems. I love translating complex requirements into simple, elegant, and intuitive user interfaces.'
  },
  {
    icon: <Zap size={24} className="text-indigo-400" />,
    title: 'Core Skills',
    description: 'My expertise lies in full-stack development, primarily using React.js for crafting beautiful frontends and Python/Django for robust backend architectures and APIs.'
  },
  {
    icon: <Target size={24} className="text-purple-400" />,
    title: 'Career Vision',
    description: 'My goal is to continue evolving as a software engineer, contributing to high-impact projects, and ultimately leading teams to build next-generation digital products.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-mutedForeground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="glass-panel p-8 lift-and-glow flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-mutedForeground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
