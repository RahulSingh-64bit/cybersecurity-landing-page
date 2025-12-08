"use client";

import { motion } from "framer-motion";
import { Terminal, HardDrive, AlertTriangle, Flag, Cloud } from "lucide-react";

const features = [
  { icon: Terminal, text: "Virtual cyber range" },
  { icon: HardDrive, text: "Forensic investigation toolkit" },
  { icon: AlertTriangle, text: "Realistic breach simulations" },
  { icon: Flag, text: "Capture-the-flag (CTF) challenges" },
  { icon: Cloud, text: "Cloud-based environment available 24/7" },
];

const HandsOn = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left Side – Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Hands-On Learning Environment
              </h2>
              <p className="text-lg text-gray-300 max-w-lg">
                Practice in a safe, isolated environment with real-world tools
                and scenarios. Our platform gives you unlimited access to
                cutting-edge technology.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group flex items-center gap-5 bg-white/5 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/10 hover:shadow-2xl transition-all duration-400 border border-white/10"
                >
                  <div className="bg-teal-500/20 p-4 rounded-xl group-hover:bg-teal-500/30 transition-colors">
                    <feature.icon className="w-8 h-8 text-teal-400" />
                  </div>
                  <span className="text-lg text-white font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side – Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            
            <div className="absolute -top-4 right-4 sm:-top-5 sm:right-8 bg-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold shadow-lg z-20 text-center leading-tight">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wide opacity-90">
                Active Labs
              </span>
              <span className="block text-2xl sm:text-3xl mt-0.5 sm:mt-1">
                247
              </span>
            </div>

            {/* TERMINAL WRAPPER */}
            <div className="relative w-full max-w-2xl mx-auto mt-10">
              
              <div className="bg-linear-to-br from-gray-900/90 to-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-teal-500/20 overflow-hidden">
                
                <div className="flex items-center bg-gray-800/80 px-4 sm:px-6 py-3 sm:py-4 border-b border-teal-500/30 gap-3 sm:gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>

                  <span className="text-gray-400 text-xs sm:text-sm truncate">
                    security-lab.cyber
                  </span>
                </div>

                {/* TERMINAL CONTENT */}
                <div className="p-4 sm:p-8 font-mono text-xs sm:text-sm">
                  <p className="text-teal-400">
                    $ sudo nmap -sV 192.168.1.0/24
                  </p>
                  <p className="text-gray-400 mt-3">Starting Nmap scan...</p>
                  <p className="text-green-400 mt-2">
                    Host is up (0.0032s latency)
                  </p>

                  <p className="text-cyan-300 mt-6 font-semibold">
                    PORT STATE SERVICE VERSION
                  </p>
                  <p className="text-gray-300">22/tcp open ssh OpenSSH 8.2</p>
                  <p className="text-gray-300">
                    80/tcp open http Apache 2.4.41
                  </p>
                  <p className="text-gray-300">
                    443/tcp open https Apache 2.4.41
                  </p>
                </div>
              </div>

              {/* FLOATING COMPLETED CHALLENGES */}
              <div className="absolute -bottom-10 left-2 sm:-bottom-12 sm:-left-6 bg-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold shadow-xl text-center z-20">
                <span className="block text-[10px] sm:text-xs uppercase tracking-wide opacity-80">
                  Completed Challenges
                </span>
                <span className="block text-xl sm:text-2xl leading-tight">
                  15.2K
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HandsOn;
