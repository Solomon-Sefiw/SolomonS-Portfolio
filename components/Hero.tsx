
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6"
          >
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Solomon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Sefiw</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Expert <span className="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</span> specializing in secure enterprise ecosystems, 
            digitizing judicial workflows, and building high-scale banking platforms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 rounded-xl font-bold transition-all"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6 justify-center md:justify-start grayscale opacity-60 hover:grayscale-0 transition-all"
          >
             <i className="fab fa-react text-3xl"></i>
             <i className="fab fa-microsoft text-3xl"></i>
             <i className="fab fa-js text-3xl"></i>
             <i className="fab fa-github text-3xl"></i>
             <i className="fas fa-database text-3xl"></i>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="relative group"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-transform group-hover:rotate-2">
            <img 
              src="https://picsum.photos/seed/solomon/400/400" 
              alt="Solomon Sefiw" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
            <p className="text-sm font-bold">27+ Projects</p>
            <p className="text-xs text-slate-500">Delivered Worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
