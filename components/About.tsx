
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 flex items-center">
          <span className="w-12 h-1 bg-blue-600 mr-4 rounded-full"></span>
          About Me
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            I am a results-driven Software Developer with deep expertise in digitizing complex administrative and judicial workflows.
            My journey has been defined by a passion for creating scalable, secure, and user-centric enterprise solutions.
          </p>
          <p>
            With a BSc in Computer Science and an MSc in Financial Engineering in progress, I bridge the gap between technical excellence and financial logic. 
            I've spent over 2 years at <strong>Berhan Bank</strong>, contributing to 27+ mission-critical banking applications.
          </p>
          <p>
            My work with the <strong>Amhara Region Supreme Court</strong> and Waghimra Zone High Court allowed me to architect 
            systems that transform documentation through automated transcription and digital letter management.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h4 className="font-bold text-blue-600 text-2xl">2+ Years</h4>
            <p className="text-sm text-slate-500">Professional Exp.</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h4 className="font-bold text-blue-600 text-2xl">BSc CS</h4>
            <p className="text-sm text-slate-500">Mizan Tepi Univ</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
          <p className="italic opacity-90 mb-4 font-light">
            "I focus on creating systems that are not just functional, but transformative—reducing human error and maximizing organizational efficiency through automation and secure design."
          </p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
               <i className="fas fa-quote-right"></i>
             </div>
             <div>
               <p className="font-bold">Solomon Sefiw</p>
               <p className="text-sm opacity-70">Software Architect</p>
             </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold">Key Focus Areas</h4>
          {[
            'ERP Case Management Systems',
            'Secure Banking Web APIs',
            'LDAP & Identity Integration',
            'Real-time Audio Transcription',
            'PWA & Cross-Platform Mobile'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <i className="fas fa-check-circle text-blue-500"></i>
              <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
