
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-4">Career Journey</h2>
        <p className="text-slate-500 dark:text-slate-400">Professional growth and contributions across banking and law enforcement domains.</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

        {experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10 hidden md:block"></div>

            <div className={`w-full md:w-[45%] p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">{exp.role}</h3>
                  <p className="text-slate-800 dark:text-white font-semibold">{exp.company}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <i className="fas fa-check text-blue-500 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
