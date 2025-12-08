'use client';

import { motion } from 'framer-motion';
import { Shield, Search } from 'lucide-react';

const Pathways = () => {
  const pathways = [
    {
      icon: Shield,
      title: 'Cybersecurity Pathway',
      items: [
        'Network Security',
        'Ethical Hacking',
        'Threat Intelligence',
        'SOC Operations',
      ],
      color: 'bg-teal-500',
    },
    {
      icon: Search,
      title: 'Digital Forensics Pathway',
      items: [
        'Incident Response',
        'Malware Analysis',
        'Mobile Forensics',
        'Investigation & Reporting',
      ],
      color: 'bg-teal-600',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Choose Your Learning Pathway
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Select the track that aligns with your career goals. Both pathways include hands-on
            labs and certification preparation.
          </p>
        </motion.div>

        {/* Pathway Cards */}
        <div className="grid md:grid-cols-2 gap-24 max-w-5xl mx-auto">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="group relative bg-gray-50/70 border border-gray-100 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-teal-200 transition-all duration-500"
            >
              {/* Icon */}
              <div className={`${pathway.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                <pathway.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {pathway.title}
              </h3>

              {/* List */}
              <ul className="space-y-3 mb-10">
                {pathway.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-teal-600 text-white py-3.5 rounded-full font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 group-hover:gap-4 duration-300">
                View Curriculum →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto">
            Explore All Courses →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pathways;