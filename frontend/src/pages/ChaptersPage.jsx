import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { chaptersData } from '../data/chaptersData';
import { ArrowRight, Cpu, Zap, Activity, Radio, Users, Globe, BookOpen } from 'lucide-react';

const iconMap = {
  cis: <Cpu className="w-6 h-6" />,
  cass: <Zap className="w-6 h-6" />,
  smcs: <Activity className="w-6 h-6" />,
  its: <Radio className="w-6 h-6" />,
};

const ChaptersPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm"
                    >
                        Technical Societies
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
                    >
                        Our Student Chapters
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Deep dive into specialized fields of technology. Join a community of pioneers, innovators, and leaders shaping the future of engineering.
                    </motion.p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-ieee-blue mb-1">4</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Active Chapters</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-ieee-blue mb-1">500+</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Student Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-ieee-blue mb-1">50+</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Annual Events</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-ieee-blue mb-1">12</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Research Papers</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapters List - Alternating Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
                {chaptersData.map((chapter, index) => {
                     const isEven = index % 2 === 0;
                     const themeColor = {
                        blue: 'text-blue-600 border-blue-200 bg-blue-50',
                        green: 'text-emerald-600 border-emerald-200 bg-emerald-50',
                        purple: 'text-purple-600 border-purple-200 bg-purple-50',
                        orange: 'text-orange-600 border-orange-200 bg-orange-50',
                     }[chapter.color] || 'text-blue-600 border-blue-200 bg-blue-50';

                    return (
                        <motion.div 
                            key={chapter.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${chapter.color === 'blue' ? 'from-blue-600 to-cyan-400' : chapter.color === 'green' ? 'from-emerald-600 to-teal-400' : chapter.color === 'purple' ? 'from-purple-600 to-pink-400' : 'from-orange-600 to-yellow-400'} rounded-2xl transform rotate-3 scale-105 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img 
                                        src={chapter.heroImage} 
                                        alt={chapter.name} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Icon */}
                                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-gray-900 shadow-lg">
                                        {iconMap[chapter.id]}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${themeColor}`}>
                                    <Users className="w-3 h-3" /> {chapter.acronym}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
                                    {chapter.name}
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {chapter.description}
                                </p>
                                
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 bg-gray-100 p-2 rounded-lg">
                                            <Target className="w-5 h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Vision</h4>
                                            <p className="text-sm text-gray-600">{chapter.vision}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 bg-gray-100 p-2 rounded-lg">
                                            <Globe className="w-5 h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Focus Areas</h4>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {chapter.focusAreas.slice(0, 3).map((area, i) => (
                                                    <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                                        {area}
                                                    </span>
                                                ))}
                                                {chapter.focusAreas.length > 3 && (
                                                    <span className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-400 rounded">
                                                        +{chapter.focusAreas.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link 
                                    to={`/chapter/${chapter.id}`}
                                    className="inline-flex items-center text-white bg-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-ieee-blue transition-colors group shadow-lg shadow-gray-200"
                                >
                                    Explore Chapter
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChaptersPage;
