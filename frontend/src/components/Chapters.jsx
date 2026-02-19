import React from 'react';
import { Link } from 'react-router-dom';
import { chaptersData } from '../data/chaptersData';
import { ArrowRight, Cpu, Zap, Radio, Activity } from 'lucide-react'; // Mapping icons manually for now

const iconMap = {
  cis: <Cpu className="w-8 h-8" />,
  cass: <Zap className="w-8 h-8" />, // CAS usually circuits/energy
  smcs: <Activity className="w-8 h-8" />, // Cybernetics/Systems
  its: <Radio className="w-8 h-8" />, // Info Theory/Comms
};

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
          {chaptersData.map((chapter, index) => {
             const colorClass = {
                blue: 'bg-blue-600',
                green: 'bg-green-600',
                purple: 'bg-purple-600',
                orange: 'bg-orange-600',
             }[chapter.color] || 'bg-blue-600';

             const textClass = {
                blue: 'text-blue-600',
                green: 'text-green-600',
                purple: 'text-purple-600',
                orange: 'text-orange-600',
             }[chapter.color] || 'text-blue-600';

            return (
                <div key={chapter.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative top-0 hover:-top-2 flex flex-col h-full">
                <div className={`h-2 w-full ${colorClass}`}></div>
                <div className="p-8 flex-grow flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md transition-transform transform group-hover:scale-110 ${colorClass} bg-opacity-90`}>
                    {iconMap[chapter.id] || <Cpu className="w-8 h-8" />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-ieee-blue transition-colors">
                    {chapter.acronym}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    {chapter.name}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {chapter.description}
                    </p>
                    
                    <div className="mt-auto">
                        <Link to={`/chapter/${chapter.id}`} className={`inline-flex items-center text-sm font-semibold ${textClass} hover:opacity-80 transition-opacity group/link`}>
                        View Details 
                        <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
