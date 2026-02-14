
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} transition-colors duration-500 overflow-x-hidden`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
          <About />
        </section>

        <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <Skills />
          </div>
        </section>

        <section id="projects" className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
          <Projects />
        </section>

        <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <Experience />
          </div>
        </section>

        <section id="contact" className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
