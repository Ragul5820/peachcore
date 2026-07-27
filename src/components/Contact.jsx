import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const serviceId = 'service_qnh80s3';
        const templateId = 'template_u0870dq';
        const publicKey = 'QFQ9VU9CzATfU6hpR';

        emailjs.send(serviceId, templateId,
            {
                from_name: form.name,
                to_name: "Peachcore Solutions",
                from_email: form.email,
                to_email: "info@peachcore.in",
                message: form.message,
                reply_to: form.email,
            },
            publicKey
        )
            .then(() => {
                setLoading(false);
                alert('Thank you. We will get back to you as soon as possible.');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (error) => {
                setLoading(false);
                console.error(error);
                alert(`Failed to send: ${error.text || error.message || 'Unknown error'}`);
            });
    };
    return (
        <section className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Get in <span className="text-primary-blue dark:text-primary-green">Touch</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-350 max-w-2xl mx-auto"
                    >
                        Ready to start your project? We'd love to hear from you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-950 p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-800 h-full"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start group">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/30 rounded-2xl flex items-center justify-center text-primary-blue dark:text-primary-green group-hover:bg-primary-blue dark:group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">info@peachcore.in</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-green-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center text-primary-green dark:text-primary-green group-hover:bg-primary-green dark:group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">+91 82480 49471</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400 group-hover:text-white transition-colors duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Office</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">Palladam, Tiruppur, Tamilnadu</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-950 p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-800"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="Ragul"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-primary-blue to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                {loading ? <Loader2 className="ml-2 h-5 w-5 animate-spin" /> : <Send className="ml-2 h-5 w-5" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
