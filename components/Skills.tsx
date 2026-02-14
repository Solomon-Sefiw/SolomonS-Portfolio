
import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data';

const Skills: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-center">Technical Arsenal</h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto">
          A comprehensive suite of technologies I utilize to build robust, end-to-end enterprise solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6">
              <i className={`fas ${category.icon}`}></i>
            </div>
            <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-500 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-blue-600"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
