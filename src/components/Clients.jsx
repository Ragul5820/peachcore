import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Leaf, ArrowUpRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const clients = [
  {
    id: 'veloranexa',
    name: 'Veloranexa Technologies',
    subtitle: 'Enterprise Cloud & Deep Tech Solutions',
    badge: 'Tech Integration Partner',
    icon: Cpu,
    iconColor: 'text-blue-500 dark:text-cyan-400',
    iconBg: 'bg-blue-50 dark:bg-blue-950/40',
    description: 'Collaborating on next-generation enterprise IoT networks, high-throughput cloud API architectures, and automated CI/CD pipeline structures to support their global tech scaling.',
    tags: ['IoT Networks', 'Cloud Infrastructure', 'API Systems', 'Security Scaling'],
    collaborationPeriod: 'Since 2025',
    gradient: 'from-blue-600 to-indigo-650'
  },
  {
    id: 'venkateshwara',
    name: 'Venkateshwara Traders',
    subtitle: 'Agribusiness Logistics & Trading ERP',
    badge: 'Supply Chain Partner',
    icon: Leaf,
    iconColor: 'text-emerald-500 dark:text-emerald-450',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    description: 'Designing intelligent supply chain tracking systems, bulk trading ledgers, and inventory logistics platforms to optimize wholesale trading flows and real-time shipment transparency.',
    tags: ['Smart Logistics', 'Inventory ERP', 'Trading Ledgers', 'Real-time Tracking'],
    collaborationPeriod: 'Since 2024',
    gradient: 'from-emerald-600 to-teal-650'
  }
];

const Clients = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Decorative Blur Spots */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[15%] right-[5%] w-72 h-72 bg-primary-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-blue/10 dark:bg-primary-green/10 text-xs font-semibold text-primary-blue dark:text-primary-green uppercase tracking-wider"
          >
            <ShieldCheck size={12} /> Our Engagements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Driving Success with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">Industry Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            We partner with innovative companies to build robust digital solutions, optimize supply chains, and enable cloud transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent dark:from-slate-800 dark:to-transparent hover:from-primary-blue/30 dark:hover:from-primary-green/30 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                {/* Background Glass Layer */}
                <div className="glass-card rounded-[23px] p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-900/70">
                  
                  {/* Decorative Glow Dot */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-blue/10 dark:from-primary-green/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${client.iconBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-7 h-7 ${client.iconColor}`} />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-slate-700/50">
                        {client.badge}
                      </span>
                    </div>

                    {/* Client Name & Subtitle */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-blue dark:group-hover:text-primary-green transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary-blue/70 dark:text-primary-green/80 mb-6 uppercase tracking-wider">
                      {client.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {client.description}
                    </p>
                  </div>

                  {/* Footer: Tags and Partnership Period */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {client.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-slate-950 text-gray-500 dark:text-gray-400 border border-gray-200/50 dark:border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-gray-200/60 dark:border-slate-800/60">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <Zap size={14} className="text-amber-500" />
                        <span>Cooperation: {client.collaborationPeriod}</span>
                      </div>
                      <div className="text-primary-blue dark:text-primary-green flex items-center gap-1 text-sm font-bold group/link">
                        <span>Partner Profile</span>
                        <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
