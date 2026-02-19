import React from 'react';
import { Target, Eye, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container bg-white relative overflow-hidden">
        {/* Background Decorative Elem */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ieee-light/50 rounded-full blur-3xl opacity-50 z-0 animate-pulse"></div>

        <div className="text-center mb-16 relative z-10">
          <span className="text-ieee-blue font-semibold uppercase tracking-widest text-sm bg-blue-50 px-3 py-1 rounded-full">About Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-4 mb-6">
            Pioneering Technical Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed font-light">
            We are a vibrant community of students and professionals dedicated to advancing technology for humanity.
            Through workshops, seminars, and projects, we bridge the gap between academic learning and industry demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Mission */}
          <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl group-hover:bg-blue-200 transition-colors"></div>
             
             <div className="relative z-10">
               <div className="w-12 h-12 bg-ieee-blue text-white rounded-xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform">
                 <Target className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
               <p className="text-gray-600 leading-relaxed">
                 To foster technological innovation and excellence for the benefit of humanity. We aim to be essential
                 to the global technical community and to technical professionals everywhere, and be universally recognized
                 for the huge contributions of technology and of technical professionals in improving global conditions.
               </p>
             </div>
          </div>

          {/* Vision */}
          <div className="group bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-100 rounded-full opacity-50 blur-xl group-hover:bg-green-200 transition-colors"></div>
             
             <div className="relative z-10">
               <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform">
                 <Eye className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
               <p className="text-gray-600 leading-relaxed">
                 To be the trusted voice for engineering, computing, and technology information around the globe.
                 We Envision a world where technology works for everyone, driving sustainable development and
                 creating opportunities for future generations.
               </p>
             </div>
          </div>
        </div>
    </section>
  );
};

export default About;
