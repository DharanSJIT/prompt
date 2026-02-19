import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

const resources = [
  { name: 'IEEE Membership Brochure 2024', size: '2.4 MB', type: 'PDF' },
  { name: 'Student Branch Constitution', size: '1.1 MB', type: 'PDF' },
  { name: 'Event Calendar 2024-25', size: '850 KB', type: 'PDF' },
  { name: 'IEEE Brand Identity Guidelines', size: '4.2 MB', type: 'PDF' },
];

const Resources = () => {
  return (
    <section className="py-16 bg-ieee-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-heading font-bold">Student Resources</h2>
            <p className="text-blue-100 mt-2">Download important documents and guides.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-white text-ieee-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Resources <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/10 rounded-lg text-white group-hover:bg-white group-hover:text-ieee-blue transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <Download className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-1 leading-tight">{res.name}</h3>
              <div className="flex items-center gap-3 text-sm text-blue-200 mt-3">
                <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-white">{res.type}</span>
                <span>{res.size}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
             <button className="inline-flex items-center gap-2 bg-white text-ieee-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View All Resources <ExternalLink className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
