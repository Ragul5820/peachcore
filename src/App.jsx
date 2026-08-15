import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#060913] font-sans text-gray-900 dark:text-gray-100 flex flex-col relative overflow-hidden transition-colors duration-300">
      
      {/* Global Tech Grid Background Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      {/* Floating Animated Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-primary-green/10 to-brand-cyan/15 dark:from-primary-green/5 dark:to-brand-cyan/10 rounded-full blur-[100px] opacity-75"
        />
        <motion.div
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 60, -60, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[25%] -right-[15%] w-[60%] h-[60%] bg-gradient-to-bl from-primary-blue/10 to-brand-indigo/15 dark:from-primary-blue/5 dark:to-brand-indigo/10 rounded-full blur-[120px] opacity-75"
        />
        <motion.div
          animate={{
            x: [0, 70, -50, 0],
            y: [0, 40, -70, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-[10%] left-[10%] w-[45%] h-[45%] bg-gradient-to-tr from-brand-indigo/10 to-purple-500/10 dark:from-brand-indigo/5 dark:to-purple-500/5 rounded-full blur-[100px] opacity-70"
        />
      </div>

      {/* Global Background Logo Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.025] dark:opacity-[0.012] transition-opacity duration-300">
        <img src="/logo-transparent.png" alt="" className="w-[800px] h-[800px] object-contain" />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

