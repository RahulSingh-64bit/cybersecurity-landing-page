'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    { text: 'Accredited Program', icon: CheckCircle2 },
    { text: 'Industry Partnerships', icon: CheckCircle2 },
    { text: 'Job Ready Skills', icon: CheckCircle2 },
  ];

  const companies = ['COMPANY A', 'COMPANY B', 'COMPANY C', 'COMPANY D'];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-medium">
            <CheckCircle2 className="h-4 w-4" />
            About the Program
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Path to Cybersecurity Excellence
          </h2>

          {/* Description */}
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our curriculum blends theoretical knowledge with practical,
            scenario-based learning to prepare you for high-demand roles in
            cybersecurity, incident response, and digital forensics.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300"
              >
                <feature.icon className="h-6 w-6 text-teal-500" />
                <span className="font-medium text-gray-800">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-full max-w-4xl mx-auto h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

          {/* Trusted By */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Trusted by leading organizations
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60">
              {companies.map((company, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl sm:text-3xl font-bold tracking-wider text-gray-400"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
