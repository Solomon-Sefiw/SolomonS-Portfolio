
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            Have a project in mind or looking for a full-stack developer to join your team? 
            I'm open to discussing new opportunities and collaborations.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xl transition-all group-hover:scale-110">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <a href="mailto:solomonsefiw91@gmail.com" className="text-xl font-bold hover:text-blue-500">solomonsefiw91@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xl transition-all group-hover:scale-110">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <a href="tel:+251916898598" className="text-xl font-bold">+251 916 898 598</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xl transition-all group-hover:scale-110">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-xl font-bold">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl"
      >
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold">Subject</label>
            <input 
              type="text" 
              placeholder="Project Inquiry"
              className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold">Message</label>
            <textarea 
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-3"
          >
            Send Message
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
