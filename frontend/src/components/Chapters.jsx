import React from 'react';
import { Cpu, Zap, Wifi, Users, Globe, BookOpen } from 'lucide-react';

const chapters = [
  {
    name: 'Computer Society',
    acronym: 'IEEE CS',
    desc: 'Focusing on advancing the theory, practice, and application of computer and information processing science.',
    icon: <Cpu className="w-8 h-8" />,
    color: 'bg-blue-600',
    hover: 'hover:bg-blue-600',
    link: '#',
  },
  {
    name: 'Power & Energy Society',
    acronym: 'IEEE PES',
    desc: 'The world\'s largest forum for sharing the latest in technological developments in the electric power industry.',
    icon: <Zap className="w-8 h-8" />,
    color: 'bg-green-600',
    hover: 'hover:bg-green-600',
    link: '#',
  },
  {
    name: 'Robotics & Automation',
    acronym: 'IEEE RAS',
    desc: 'Fostering the development and facilitating the exchange of scientific and technological knowledge in robotics.',
    icon: <Wifi className="w-8 h-8" />,
    color: 'bg-red-600',
    hover: 'hover:bg-red-600',
    link: '#',
  },
  {
    name: 'Women in Engineering',
    acronym: 'IEEE WIE',
    desc: 'Dedicated to promoting women engineers and scientists, and inspiring girls around the world.',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-indigo-600',
    hover: 'hover:bg-indigo-600',
    link: '#',
  },
];

const Chapters = () => {
  return (
    <section id="chapters" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ieee-blue font-bold tracking-widest text-sm uppercase">Our Communities</span>
          <h2 className="text-4xl font-heading font-extrabold text-gray-900 mt-2">Student Chapters</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapters.map((chapter, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className={`h-2 w-full ${chapter.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md transition-transform transform group-hover:scale-110 ${chapter.color} bg-opacity-90`}>
                  {chapter.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-ieee-blue transition-colors">
                  {chapter.acronym}
                </h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {chapter.name}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {chapter.desc}
                </p>
                
                <a href={chapter.link} className="inline-flex items-center text-sm font-semibold text-ieee-blue hover:text-blue-800 transition-colors group/link">
                  Learn More 
                  <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
