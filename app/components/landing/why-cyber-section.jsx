"use client";

import { FlaskConical, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyCyberSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-900 via-black to-teal-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.35),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-semibold mb-4"
        >
          Why Cybersecurity & Forensics?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-base sm:text-lg"
        >
          The demand for cybersecurity professionals has never been higher. Join
          a field that offers job security, competitive salaries, and the
          opportunity to protect organizations from cyber threats.
        </motion.p>

        {/* STATS GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-teal-500 p-4 rounded-xl">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="text-4xl font-bold text-teal-400 mb-2">
              3.5M
            </div>

            <p className="text-gray-300 text-sm sm:text-base">
              Open cybersecurity jobs globally
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-teal-500 p-4 rounded-xl">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="text-4xl font-bold text-teal-400 mb-2">
              $75K–$120K
            </div>

            <p className="text-gray-300 text-sm sm:text-base">
              Average starting salary range
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-teal-500 p-4 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="text-4xl font-bold text-teal-400 mb-2">
              35%
            </div>

            <p className="text-gray-300 text-sm sm:text-base">
              Job growth rate through 2031
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
 