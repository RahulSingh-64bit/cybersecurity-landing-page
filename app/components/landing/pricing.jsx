'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly Subscription',
    price: '$149',
    period: '/month',
    description: 'Perfect for self-paced learning',
    features: [
      'Access to all courses',
      'Virtual labs 24/7',
      'Practice exams',
      'Community support',
      'Cancel anytime',
    ],
    buttonVariant: 'dark',
  },
  {
    name: 'Bootcamp Cohort',
    price: '$3,999',
    period: 'one-time',
    description: '12-week intensive program',
    features: [
      'Everything in Monthly',
      'Live instructor sessions',
      'One-on-one mentoring',
      'Career coaching',
      'Exam vouchers included',
      'Job placement assistance',
    ],
    buttonVariant: 'teal',
    popular: true,
  },
  {
    name: 'Lifetime Access',
    price: '$2,499',
    period: 'one-time',
    description: 'Learn at your own pace, forever',
    features: [
      'Lifetime course access',
      'All future updates',
      'Virtual labs',
      'Practice exams',
      'Community support',
    ],
    buttonVariant: 'dark',
  },
];

const Pricing = () => {
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
            Choose Your Learning Path
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Flexible pricing options to fit your budget and learning style. Financing and
            scholarships available.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl ${
                plan.popular
                  ? 'bg-white ring-4 ring-teal-400 shadow-2xl scale-105 z-10'
                  : 'bg-white shadow-xl'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-600">{plan.period}</span>
                </div>
                <p className="mt-3 text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.buttonVariant === 'teal'
                    ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Enroll Today
              </button>
            </motion.div>
          ))}
        </div>

        {/* Financing Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="text-teal-600 font-medium hover:text-teal-700 underline underline-offset-4"
          >
            Need financing? Learn about payment plans
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;