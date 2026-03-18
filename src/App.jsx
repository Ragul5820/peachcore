import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col relative overflow-hidden">
      {/* Global Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
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
