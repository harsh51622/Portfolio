import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Havron Switch-Gears Company',
    description: 'Havron Switch-Gears Company is an electrical solutions provider specializing in switchgear products and power distribution systems, focusing on safety, reliability, and high-quality performance.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
    tech: ['React.Js', 'HTML5', 'CSS3.0', 'JavaScript', 'Python'],
    link: 'https://harsh51622.github.io/HavronSwitchgears/',
    github: 'https://github.com/harsh51622/HavronSwitchgears.git'
  },
  {
    id: 2,
    title: 'Anytime Trips',
    description: 'Anytime Trips is a travel booking platform where users can explore various trips, view details, apply filters, and book trips easily with secure payment and a personalized dashboard experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Material UI', 'Python', 'Django', 'SQL'],
    link: 'https://anytime-trips.vercel.app/',
    github: 'https://github.com/harsh51622/Anytime_Trips.git'
  },
  {
    id: 3,
    title: 'AI Chat Bot',
    description: 'An intelligent AI chatbot application that allows users to have real-time conversations, providing smart responses with a smooth and interactive user experience.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Material UI', 'Python', 'Django', 'SQL'],
    link: 'https://your-chatbot-demo.vercel.app',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => window.open(project.link, "_blank")}
              className="group relative rounded-2xl overflow-hidden glass-panel cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] border border-white/5 hover:border-primary/50 flex flex-col h-full"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative h-60 w-full overflow-hidden bg-black/50">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Blur Overlay on Hover */}
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                  <div className="bg-black/60 px-6 py-2 rounded-full border border-white/20 text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Live</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                    className="text-mutedForeground hover:text-white transition-colors cursor-pointer"
                  >
                    <Code size={20} />
                  </div>
                </div>

                <p className="text-mutedForeground mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
