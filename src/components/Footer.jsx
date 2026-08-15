import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-slate-950/80 border-t border-transparent dark:border-slate-900 text-white py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-green to-primary-blue dark:to-cyan-400 bg-clip-text text-transparent mb-4 block">
                            Peachcore Solutions
                        </span>
                        <p className="text-gray-400 dark:text-gray-300 max-w-sm">
                            Empowering businesses and learners with next-gen technology solutions. Your partner in digital transformation.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 dark:text-gray-400 hover:text-primary-green transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 dark:text-gray-400 hover:text-primary-green transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 dark:text-gray-400 hover:text-primary-green transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 dark:text-gray-400 hover:text-primary-green transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="http://linkedin.com/in/peachcore-solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-green transition-colors"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/peachcore_solutions?igsh=ZXFxOWk3Z2hmeDI4" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-green transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 dark:border-slate-900 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Peachcore Solutions LLP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
