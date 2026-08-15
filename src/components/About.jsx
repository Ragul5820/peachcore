import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Lightbulb, Mail } from 'lucide-react';

const About = () => {
    return (
        <section className="pt-32 pb-20 min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 lg:mb-0 relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue dark:from-cyan-400 to-primary-green">Peachcore Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            We are a dynamic team of innovators dedicated to bridging the gap between education, technology, and commerce. At Peachcore Solutions LLP, we believe in the power of digital transformation to elevate businesses and learning experiences.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {['Customer-Centric', 'Innovative Tech', 'Reliable Support', 'Scalable Growth'].map((item, index) => (
                                <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 hover:border-primary-blue/30 transition-colors">
                                    <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0" />
                                    <span className="text-gray-800 dark:text-gray-200 font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-blue to-primary-green p-1">
                            <div className="bg-white dark:bg-slate-900 rounded-[22px] h-96 w-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-0 opacity-10"></div>
                                <div className="z-10">
                                    <Users className="w-20 h-20 text-primary-blue dark:text-primary-green mb-6 mx-auto opacity-80" />
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                                    <p className="text-gray-600 dark:text-gray-300">To be the global catalyst for digital empowerment.</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-green/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {[
                        { icon: Target, title: 'Mission', desc: 'To provide robust, scalable, and user-centric solutions.', color: 'text-red-500 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/30' },
                        { icon: Lightbulb, title: 'Innovation', desc: 'Constantly pushing boundaries to deliver the best.', color: 'text-yellow-500 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-950/30' },
                        { icon: Users, title: 'Community', desc: 'Building lasting relationships with our clients and partners.', color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/30' }
                    ].map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-slate-905 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-slate-800"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${val.bg}`}>
                                <val.icon className={`w-8 h-8 ${val.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{val.title}</h3>
                            <p className="text-gray-650 dark:text-gray-300">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Leadership Section */}
                <div className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Leadership</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue to-primary-green mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { name: 'Shakil Ahmed', role: 'Founder & CEO', email: 'shakilnazarahmed@peachcore.in', icon: Users, gradient: 'from-blue-500 to-indigo-600' },
                            { name: 'Ragul', role: 'Founder & Director', email: 'ragul@peachcore.in', icon: Users, gradient: 'from-purple-500 to-pink-600' }
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden flex flex-col items-center justify-between"
                            >
                                <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div>
                                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                        <member.icon size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-blue dark:group-hover:text-primary-green transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-blue dark:text-primary-green font-semibold text-sm tracking-wider uppercase mb-4 min-h-[40px]">
                                        {member.role}
                                    </p>
                                </div>

                                <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-green hover:bg-white dark:hover:bg-slate-800 transition-all gap-2 bg-gray-50 dark:bg-slate-950 px-4 py-2 rounded-full border border-gray-100 dark:border-slate-800 hover:border-primary-blue/30 dark:hover:border-primary-green/30 shadow-sm hover:shadow-md group/email"
                                >
                                    <Mail size={14} className="group-hover/email:scale-110 transition-transform" />
                                    <span className="truncate max-w-[150px] font-medium">{member.email}</span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Key Partnerships Section */}
                <div className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Key Client Partnerships</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue to-primary-green mx-auto rounded-full"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                            We collaborate with industry frontrunners to deliver bespoke technical services and enterprise-grade software.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                name: 'Veloranexa Technologies',
                                role: 'Enterprise Cloud & IoT Systems',
                                desc: 'Building secure infrastructure, automated deployment pipelines, and high-performance server APIs to support complex enterprise requirements.'
                            },
                            {
                                name: 'Venkateshwara Traders',
                                role: 'Supply Chain & Logistics ERP',
                                desc: 'Developing custom commodity logistics platforms, automated ledger management, and inventory tracking systems for bulk trade.'
                            }
                        ].map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-primary-blue/30 dark:hover:border-primary-green/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{partner.name}</h3>
                                <p className="text-primary-blue dark:text-primary-green font-semibold text-xs uppercase tracking-wider mb-4">
                                    {partner.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-305 text-sm leading-relaxed">
                                    {partner.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

