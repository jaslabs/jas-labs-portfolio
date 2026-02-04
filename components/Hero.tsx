import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Software Engineering Firm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Crafting the <br />
          <span className="text-gradient">Future of Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We are a team of elite software engineers building scalable architectures,
          innovative mobile experiences, and data-driven ML solutions for forward-thinking enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#work">
            <Button variant="secondary">View Projects</Button>
          </a>
          <a href="#contact">
            <Button icon>Get in Touch</Button>
          </a>
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-12 md:right-20 w-24 h-24 glass-card rounded-2xl flex items-center justify-center hidden lg:flex"
        >
          <span className="text-4xl">🚀</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -left-12 md:left-20 w-32 h-32 glass-card rounded-2xl flex items-center justify-center hidden lg:flex"
        >
          <span className="text-4xl">⚡</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;