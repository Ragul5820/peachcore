import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-primary-blue"
                    >
                        🚀 Transforming Ideas into Reality
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight"
                    >
                        Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600">Education</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-indigo-600">Innovation</span> through Technology
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Peachcore Solutions LLP delivers cutting-edge Edutech platforms, robust IT services, Electronics, and R&D solutions tailored for your growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-5"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-primary-blue to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-lg font-bold rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:border-primary-blue/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-primary-green/20 to-emerald-300/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-bl from-primary-blue/20 to-indigo-300/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
        </section>
    );
};

export default Hero;
