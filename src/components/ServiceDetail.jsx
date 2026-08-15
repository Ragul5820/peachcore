import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Cpu, Lightbulb, Code, GraduationCap, Package } from 'lucide-react';

const serviceData = {
    'electronics': {
        title: 'Electronics Solutions',
        description: 'State-of-the-art electronic design and development for complex modern systems.',
        icon: Cpu,
        color: 'blue',
        ctaText: 'Start Your Project Today',
        details: [
            'Embedded Systems Design and Prototyping',
            'PCB Layout and Multi-layer Board Design',
            'IoT Sensor Integration and Wireless Solutions',
            'Industrial Automation and Control Systems'
        ],
        longDesc: 'Our electronics division specializes in bringing complex hardware ideas to life. From initial circuit design to mass production readiness, we provide comprehensive support for your hardware roadmap.'
    },
    'rd': {
        title: 'Research & Development',
        description: 'Pushing the boundaries of technology through rigorous innovation and testing.',
        icon: Lightbulb,
        color: 'yellow',
        ctaText: 'Start Your Project Today',
        details: [
            'Algorithm Development and Optimization',
            'Feasibility Studies and POC Development',
            'Material Science Research for Tech Apps',
            'Patent-Ready Innovation Frameworks'
        ],
        longDesc: 'Innovation is the heartbeat of Peachcore. Our R&D Lab serves as an incubator for next-generation technologies, helping organizations stay ahead of the curve through strategic technical research.'
    },
    'it-services': {
        title: 'IT Services & ERP',
        description: 'Scalable software solutions designed to streamline your business operations.',
        icon: Code,
        color: 'blue',
        ctaText: 'Start Your Project Today',
        details: [
            'Custom Enterprise Resource Planning (ERP)',
            'Full-Stack Web and Mobile Development',
            'Cloud Migration and Infrastructure Management',
            'AI-Driven Data Analytics and Visualization'
        ],
        longDesc: 'We build digital foundations that scale. Our IT services are tailored to optimize your workflow, improve data integrity, and provide the technical agility needed in today’s digital marketplace.'
    },
    'edutech': {
        title: 'Edutech Platforms',
        description: 'Transforming the educational landscape with interactive and accessible technology.',
        icon: GraduationCap,
        color: 'emerald',
        ctaText: 'Start Learning Today',
        details: [
            'Programming Domains: Java, Python, C, C++, Web Dev',
            'Evening Classes for Students & Professionals',
            'Comprehensive Full Stack Development Courses',
            'Customizable Learning Management Systems (LMS)',
            'Interactive Virtual Classroom Technology'
        ],
        longDesc: 'Empowering the next generation through technology. We create platforms that bridge the gap between learning and accessibility, specializing in software development training across Java, Python, C, and modern web frameworks with flexible evening schedules.'
    },
    'procurement': {
        title: 'Component Procurement',
        description: 'Strategic sourcing and supply chain management for the tech industry.',
        icon: Package,
        color: 'purple',
        ctaText: 'Start Your Project Today',
        details: [
            'Global Network of Authorized Suppliers',
            'Obsolete Component Sourcing and Verification',
            'Inventory Management and Logistics Support',
            'Quality Control and Counterfeit Detection'
        ],
        longDesc: 'Solving the supply chain puzzle. We leverage our global partnerships to ensure you get high-quality components, even in challenging market conditions, keeping your production lines moving.'
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceData[serviceId];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Service not found</h2>
                    <Link to="/services" className="text-primary-blue dark:text-primary-green hover:underline">Return to services</Link>
                </div>
            </div>
        );
    }

    return (
        <section className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link to="/services" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-green transition-colors mb-8 group">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to all services
                    </Link>

                    <div className="flex items-center gap-6 mb-8">
                        <div className={`p-5 rounded-3xl bg-${service.color}-50 dark:bg-${service.color}-950/30 text-${service.color}-600 dark:text-${service.color}-400 shadow-sm`}>
                            <service.icon size={48} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            {service.title}
                        </h1>
                    </div>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                        {service.description}
                    </p>

                    <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative z-10">What We Provide</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                            {service.details.map((detail, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
                                        <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <span className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-tight">{detail}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 border-t border-gray-100 dark:border-slate-800 pt-12 relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Approach</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-350 leading-relaxed italic">
                                "{service.longDesc}"
                            </p>
                        </div>

                        <div className="mt-12 flex justify-center relative z-10">
                            <Link
                                  to="/contact"
                                  className="px-10 py-4 bg-primary-blue text-white font-bold rounded-2xl hover:bg-blue-700 transition-all hover:shadow-2xl hover:-translate-y-1 shadow-lg"
                            >
                                {service.ctaText}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceDetail;
