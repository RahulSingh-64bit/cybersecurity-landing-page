"use client";

import { FlaskConical, Award, Users, Briefcase } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Real-World Labs",
    desc: "Simulate attacks, perform forensic analysis, and secure live systems.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    desc: "Prep for CEH, CHFI, Security+, CYSA+, and more.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    desc: "Learn from cybersecurity professionals with field experience.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    desc: "Job placement assistance, resume coaching, and interview prep.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-100 text-teal-600 mb-5">
              <item.icon size={22} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;
