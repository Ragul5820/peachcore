import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, ArrowRight, Cpu, Lightbulb, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'electronics',
        title: 'Electronics',
        description: 'Advanced electronic solutions and circuit design for modern applications.',
        icon: Cpu,
        color: 'text-orange-600 dark:text-orange-400',
        bg: 'bg-orange-50 dark:bg-orange-950/30',
        border: 'border-orange-100 dark:border-orange-950/20',
        gradient: 'from-orange-500 to-red-600'
    },
    {
        id: 'rd',
        title: 'Research & Development',
        description: 'Innovative R&D services to bring your groundbreaking ideas to life.',
        icon: Lightbulb,
        color: 'text-yellow-650 dark:text-yellow-400',
        bg: 'bg-yellow-50 dark:bg-yellow-950/30',
        border: 'border-yellow-100 dark:border-yellow-950/20',
        gradient: 'from-yellow-500 to-amber-600'
    },
    {
        id: 'it-services',
        title: 'IT Services',
        description: 'Custom software development, cloud solutions, and enterprise resource planning.',
        icon: Code,
        color: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        border: 'border-blue-100 dark:border-blue-950/20',
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        id: 'edutech',
        title: 'Edutech',
        description: 'Transforming learning with interactive platforms, LMS, and virtual classrooms.',
        icon: GraduationCap,
        color: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-950/30',
        border: 'border-emerald-100 dark:border-emerald-950/20',
        gradient: 'from-emerald-500 to-green-600'
    },
    {
        id: 'procurement',
        title: 'Components Procurement',
        description: 'Reliable sourcing and supply chain management for high-quality electronic components.',
        icon: Package,
        color: 'text-purple-600 dark:text-purple-400',
        bg: 'bg-purple-50 dark:bg-purple-950/30',
        border: 'border-purple-100 dark:border-purple-950/20',
        gradient: 'from-purple-500 to-pink-600'
    },
];

const Services = () => {
    return (
        <section className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Our <span className="text-primary-blue dark:text-primary-green">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        We provide comprehensive solutions across key sectors to drive your business forward with innovation and precision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border ${service.border} dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-950 group overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500`}></div>

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.bg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-350 leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <Link to={`/services/${service.id}`} className={`inline-flex items-center font-semibold ${service.color} hover:opacity-80 transition-opacity`}>
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
