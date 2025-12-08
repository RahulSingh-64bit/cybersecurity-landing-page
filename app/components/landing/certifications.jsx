'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle2, BookOpen } from 'lucide-react';

const certs = [
  { name: 'Security+', full: 'CompTIA Security+ Foundation' },
  { name: 'CEH', full: 'Certified Ethical Hacker' },
  { name: 'CHFI', full: 'Computer Hacking Forensic Investigator' },
  { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst' },
  { name: 'CISSP', full: 'Foundation Prep Only' },
  { name: 'GCIH', full: 'GIAC Certified Incident Handler' },
];

const Certifications = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Certification Preparation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Get Certified, Get Hired
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Prepare for industry-recognized certifications with our comprehensive study
            materials and practice exams
          </p>

          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-sm font-medium">
            <CheckCircle2 className="w-5 h-5" />
            Exam vouchers included for selected programs
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex items-center gap-5 bg-gray-50/70 border border-gray-200 rounded-2xl px-6 py-5 hover:bg-white hover:shadow-xl hover:border-teal-200 transition-all duration-400"
            >
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                <Shield className="w-7 h-7 text-teal-600 mx-auto" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{cert.name}</h3>
                <p className="text-gray-600 text-sm mt-0.5">{cert.full}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;