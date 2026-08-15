import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    // Sync theme state with the html class
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <Link to="/" className="flex items-center gap-2 sm:gap-4 group min-w-0">
                        <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-full">
                            <img
                                src="/logo-transparent.png"
                                alt="Peachcore Solutions Logo"
                                className="h-full w-full object-contain scale-150 group-hover:scale-160 transition-transform duration-300"
                            />
                        </div>
                        <span className="text-base sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-primary-green to-primary-blue dark:to-cyan-400 bg-clip-text text-transparent truncate">
                            Peachcore Solutions LLP
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${isActive(link.href)
                                    ? 'text-primary-blue dark:text-primary-green'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-green'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.href) && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue dark:bg-primary-green rounded-full"
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-gray-50 hover:bg-gray-150 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-800 shadow-sm transition-all hover:scale-105 cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-gray-50 hover:bg-gray-150 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-800 shadow-sm transition-all cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-green focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                            style={{ touchAction: 'manipulation' }}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-900 shadow-lg overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.href)
                                        ? 'bg-blue-50 dark:bg-slate-900 text-primary-blue dark:text-primary-green'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-900 hover:text-primary-blue dark:hover:text-primary-green'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
