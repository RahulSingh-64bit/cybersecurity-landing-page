'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    initials: 'SC',
    role: 'SOC Analyst at TechGuard',
    text: 'I landed a SOC analyst role in 3 months! The hands-on labs and real-world scenarios made all the difference. The instructors were incredible.',
  },
  {
    name: 'Marcus Rodriguez',
    initials: 'MR',
    role: 'Digital Forensics Specialist',
    text: 'The forensics pathway gave me the exact skills I needed. Now I’m investigating cyber incidents for a Fortune 500 company. Best investment I’ve made.',
  },
  {
    name: 'Emily Thompson',
    initials: 'ET',
    role: 'Ethical Hacker',
    text: 'From zero experience to passing CEH in 4 months. The certification prep and career support were outstanding. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Student Success Stories
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Join thousands of graduates who have launched successful careers in
            cybersecurity
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Stars + Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-teal-500 text-teal-500"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-200 -rotate-180" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-8">
                "{t.text}"
              </p>

              {/* Avatar + Name + Role */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;