import React from 'react';
import { Network, Search, Book, DollarSign, Award, Globe } from 'lucide-react';

const benefits = [
  {
    title: 'Networking',
    desc: 'Connect with over 400,000 members worldwide and build professional relationships.',
    icon: <Network className="w-10 h-10" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Technical Resources',
    desc: 'Access to IEEE Xplore digital library, magazines, and technical journals.',
    icon: <Search className="w-10 h-10" />,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Discounts',
    desc: 'Exclusive discounts on conferences, insurance, and educational courses.',
    icon: <DollarSign className="w-10 h-10" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Professional Growth',
    desc: 'Opportunities for volunteering, leadership, and awards.',
    icon: <Award className="w-10 h-10" />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Magazines & Content',
    desc: 'Stay updated with Spectrum, Potentials, and other publications.',
    icon: <Book className="w-10 h-10" />,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Global Community',
    desc: 'Be part of a diverse community spanning 160+ countries.',
    icon: <Globe className="w-10 h-10" />,
    color: 'bg-cyan-100 text-cyan-600',
  },
];

const Benefits = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-ieee-blue font-bold tracking-widest text-sm uppercase">Why Join?</span>
                    <h2 className="text-4xl font-heading font-extrabold text-gray-900 mt-2">Membership Benefits</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                      Unlock a world of opportunities and resources to fuel your career.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-8 border border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                               {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-ieee-blue transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
