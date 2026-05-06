import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's talk about your next project.</h3>
            <p className="text-mutedForeground mb-8 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hkumar51622@gmail.com" className="flex items-center gap-4 text-mutedForeground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">hkumar51622@gmail.com</span>
              </a>
              <a href="https://github.com/harsh51622" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-mutedForeground hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/50 transition-colors">
                  <Code size={20} />
                </div>
                <span className="font-medium">github.com/harsh51622</span>
              </a>
              <a href="https://www.linkedin.com/in/harsh-kumar95" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-mutedForeground hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 transition-colors">
                  <Briefcase size={20} />
                </div>
                <span className="font-medium">linkedin.com/in/harsh-kumar95</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-panel p-8 flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-mutedForeground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-mutedForeground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Your Message" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-mutedForeground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 mt-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
