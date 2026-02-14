
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Banking', 'Judiciary', 'Enterprise'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Portfolio Showcase</h2>
          <p className="text-slate-500 dark:text-slate-400">Transforming ideas into secure, scalable digital products.</p>
        </div>

        <div className="flex bg-slate-200 dark:bg-slate-800 p-1.5 rounded-2xl overflow-x-auto max-w-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap ${filter === cat ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-blue-600 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {project.achievements.map((acc, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <i className="fas fa-caret-right text-blue-500"></i>
                      <span>{acc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex-1 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">
                    Case Study
                  </button>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-xl hover:text-blue-600 transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
