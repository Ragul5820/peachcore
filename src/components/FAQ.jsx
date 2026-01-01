import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: 'What IT services do you offer for startups?',
        answer: 'We provide end-to-end IT solutions including custom web and mobile app development, cloud infrastructure setup, and ERP implementation tailored specifically for startup scalability.'
    },
    {
        question: 'How do you handle electronic component procurement?',
        answer: 'We have a global network of trusted suppliers. We handle everything from sourcing hard-to-find components to quality testing and secure supply chain logistics.'
    },
    {
        question: 'Can you help with research and development (R&D) projects?',
        answer: 'Absolutely! Our R&D team specializes in hardware-software integration, rapid prototyping, and industrial design. We help turn conceptual ideas into market-ready products.'
    },
    {
        question: 'Do you offer customized Edutech platforms?',
        answer: 'Yes, we build custom Learning Management Systems (LMS), interactive classroom tools, and remote laboratory solutions for educational institutions and corporate training.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-primary-blue mb-6"
                    >
                        <HelpCircle size={18} />
                        Got Questions?
                    </motion.div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Everything you need to know about our services and processes.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                            >
                                <span className="text-lg font-bold text-gray-900 leading-tight">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-primary-blue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
