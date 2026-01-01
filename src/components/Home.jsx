import React from 'react';
import Hero from './Hero';
import FAQ from './FAQ';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    const features = [
        "Proven Expertise in R&D and Electronics",
        "Tailored IT Solutions for Global Scaling",
        "Reliable Supply Chain Management",
        "Innovation-First Approach to Every Project"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose <span className="text-primary-green">Peachcore Solutions?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            We don't just provide services; we partner with you to solve complex engineering and technological challenges. Our multi-disciplinary approach ensures that you get the best of all worlds.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-emerald-600" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-800">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 shadow-lg"
                        >
                            Learn More About Our Journey
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <WhyChooseUs />
            <FAQ />
        </div>
    );
};

export default Home;
