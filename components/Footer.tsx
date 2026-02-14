
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-16 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-2xl font-extrabold tracking-tighter mb-4">
            SOLOMON<span className="text-blue-600">.SEFIW</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs">
            Building the digital infrastructure for a safer and more efficient future.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xl hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xl hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="font-bold mb-2">Based in Addis Ababa, ET</p>
          <p className="text-slate-500 dark:text-slate-400">&copy; {year} Solomon Sefiw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
