import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-10">

      <ParticleBackground />

      {/* Soft Background Glow (reduced & premium) */}
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[220px] h-[220px] bg-purple-500/10 blur-[110px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[48%] text-center lg:text-left"
        >
          {/* Mobile Top Circle Image */}
 <motion.img
  src="/dd.png"
  alt="Harsh Kumar"
  className="
    block md:hidden   /* 👈 only mobile */

    mx-auto
    mb-4

    w-28 h-28
    sm:w-32 sm:h-32

    rounded-full
    object-cover

    border-4 border-amber-400
    shadow-[0_0_25px_rgba(245,158,11,0.5)]
  "
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
/>
          <h3 className="text-xs sm:text-sm text-zinc-400 mb-2">
            I'm Harsh Kumar
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Crafting{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Premium
            </span>{" "}
            Web Experiences
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 mb-5 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Full-stack developer building fast, scalable & modern web apps with smooth UI.
          </p>

          <p className="text-xs text-zinc-500 mb-6">
            React • Python • Node • PostgreSQL
          </p>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">

            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm text-white 
              bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 
              backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition"
            >
              Explore
              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>

            <a
              href="/resume.pdf"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm text-white 
              border border-white/10 backdrop-blur-md hover:scale-105 hover:border-amber-400 
              hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition"
            >
              Resume
              <Download size={14} className="group-hover:-translate-y-1 transition" />
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[50%] flex justify-center items-center"
        >
        {/* FLOATING FULL SCREEN IMAGE */}
<motion.img
  src="/dd.png"
  alt="Harsh Kumar"
  className="
    absolute 
    right-0 
    bottom-[-60px]   /* 👈 niche push karega */

    w-[220px]
    sm:w-[280px]
    md:w-[350px]
    lg:w-[420px]

    object-contain
    opacity-90
    pointer-events-none
    select-none
    z-0
  "
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
/>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
