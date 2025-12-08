'use client';

import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const courses = ['Cybersecurity Pathway', 'Digital Forensics Pathway', 'Certification Prep', 'All Courses'];
  const company = ['About Us', 'Instructors', 'Success Stories', 'Blog'];
  const support = ['Help Center', 'Contact Support', 'System Status', 'FAQs'];
  const legal = ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility'];
  
  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Youtube, label: 'YouTube' }
  ];

  return (
    <footer className="bg-linear-to-b from-[#0a0f2e] to-[#050820] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              <span className="text-2xl font-bold text-white">CyberDefender Academy</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Empowering the next generation of cybersecurity professionals through hands-on training and real-world experience.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@cyberdefender.edu" className="flex items-center gap-3 hover:text-teal-400 transition-colors group">
                <Mail className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>info@cyberdefender.edu</span>
              </a>
              <a href="tel:1-800-CYBER-ED" className="flex items-center gap-3 hover:text-teal-400 transition-colors group">
                <Phone className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>1-800-CYBER-ED</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Courses</h3>
            <ul className="space-y-3">
              {courses.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-400 transition-colors hover:translate-x-1 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-400 transition-colors hover:translate-x-1 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-400 transition-colors hover:translate-x-1 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="mt-12">
          <h3 className="text-white font-semibold mb-5 text-lg">Legal</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {legal.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-teal-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 CyberDefender Academy. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a 
                key={label}
                href="#" 
                aria-label={label}
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;