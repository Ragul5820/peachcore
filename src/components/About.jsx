import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Lightbulb, Mail } from 'lucide-react';

const About = () => {
    return (
        <section className="pt-32 pb-20 min-h-screen bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 lg:mb-0 relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">Peachcore Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We are a dynamic team of innovators dedicated to bridging the gap between education, technology, and commerce. At Peachcore Solutions LLP, we believe in the power of digital transformation to elevate businesses and learning experiences.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {['Customer-Centric', 'Innovative Tech', 'Reliable Support', 'Scalable Growth'].map((item, index) => (
                                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-blue/30 transition-colors">
                                    <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0" />
                                    <span className="text-gray-800 font-semibold">{item}</span>
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
                            <div className="bg-white rounded-[22px] h-96 w-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-0"></div>
                                <div className="z-10">
                                    <Users className="w-20 h-20 text-primary-blue mb-6 mx-auto opacity-80" />
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600">To be the global catalyst for digital empowerment.</p>
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
                        { icon: Target, title: 'Mission', desc: 'To provide robust, scalable, and user-centric solutions.', color: 'text-red-500', bg: 'bg-red-50' },
                        { icon: Lightbulb, title: 'Innovation', desc: 'Constantly pushing boundaries to deliver the best.', color: 'text-yellow-500', bg: 'bg-yellow-50' },
                        { icon: Users, title: 'Community', desc: 'Building lasting relationships with our clients and partners.', color: 'text-blue-500', bg: 'bg-blue-50' }
                    ].map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${val.bg}`}>
                                <val.icon className={`w-8 h-8 ${val.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                            <p className="text-gray-600">{val.desc}</p>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue to-primary-green mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: 'Shakil Ahmed', role: 'Chief Executive Officer', email: 'shakilnazarahmed@peachcore.in', icon: Users, gradient: 'from-blue-500 to-indigo-600' },
                            { name: 'Bharani Dharan', role: 'Chief Technology Officer', email: 'bharanidharan@peachcore.in', icon: Users, gradient: 'from-emerald-500 to-teal-600' },
                            { name: 'Ganesh Surya', role: 'Chief Financial Officer', email: 'ganeshsurya@peachcore.in', icon: Users, gradient: 'from-orange-500 to-red-600' },
                            { name: 'Ragul', role: 'Chief Business Officer (IT & Edutech Head)', email: 'ragul@peachcore.in', icon: Users, gradient: 'from-purple-500 to-pink-600' }
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden flex flex-col items-center justify-between"
                            >
                                <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div>
                                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                        <member.icon size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-blue transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-blue font-semibold text-sm tracking-wider uppercase mb-4 min-h-[40px]">
                                        {member.role}
                                    </p>
                                </div>

                                <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center text-sm text-gray-500 hover:text-primary-blue hover:bg-white transition-all gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 hover:border-primary-blue/30 shadow-sm hover:shadow-md group/email"
                                >
                                    <Mail size={14} className="group-hover/email:scale-110 transition-transform" />
                                    <span className="truncate max-w-[150px] font-medium">{member.email}</span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
