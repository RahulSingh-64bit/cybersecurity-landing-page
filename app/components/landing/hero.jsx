"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, FlaskConical, Zap, Shield } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="min-h-screen bg-linear-to-b from-[#0a0f2e] to-[#001a3f] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10"
        ref={ref}
      >
        {/* LEFT CONTENT */}
        <motion.div
          className="space-y-6 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
            <Shield size={16} /> Industry-Leading Training
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight relative">
            Become the
            <br />
            <span className="relative z-10">
              Defender
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-400 rounded-full" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Master Cybersecurity & Digital Forensics with hands-on training,
            real-world simulations, and industry-recognized certifications.
          </p>

          <div className="flex flex-wrap gap-6 text-teal-300">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="text-xl font-semibold">15K+</span>
              <span>Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <FlaskConical className="h-6 w-6" />
              <span className="text-xl font-semibold">50+</span>
              <span>Labs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-semibold">24/7</span>
              <span>Access</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition">
              Start Learning Now →
            </button>
            <button className="border border-teal-500 text-teal-300 px-8 py-3 rounded-full font-medium hover:bg-teal-500/20 transition">
              Download Brochure
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[90%] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[760px] rounded-2xl overflow-visible">

            {/* LIVE LABS */}
            <div className="absolute -top-3 right-3 sm:right-6 flex flex-col bg-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold shadow-xl z-20">
              <span>Live Labs</span>
              <span className="mt-1 sm:mt-2 w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full"></span>
            </div>

            {/* SUCCESS RATE */}
            <div className="absolute -right-10 sm:right-[-70px] lg:right-[-90px] top-1/2 -translate-y-1/2 bg-[#0b1e3d] text-white px-4 sm:px-6 py-3 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl text-center z-20 border border-teal-400/40">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-400">
                98%
              </div>
              <div className="text-[10px] sm:text-xs text-gray-300">
                Success Rate
              </div>
            </div>

            {/* CERTIFIED */}
            <div className="absolute -bottom-1 -sm:bottom-1 left-3 sm:left-6 flex flex-col items-center bg-teal-500/25 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl z-20 backdrop-blur-md">
              <span className="text-[10px] sm:text-sm uppercase tracking-wide opacity-90 mb-1">
                Certified Training
              </span>

              <div className="flex items-center gap-2 sm:gap-3">
                <Shield size={18} className="text-teal-300 sm:hidden" />
                <Shield size={22} className="text-teal-300 hidden sm:block" />
                <span className="text-xs sm:text-base font-semibold">
                  CEH • CHFI
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <Image
              src="/hero-labs.png"
              alt="Cyber Security Live Lab"
              width={900}
              height={600}
              className="w-full h-auto object-contain scale-100 sm:scale-105 lg:scale-110"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
