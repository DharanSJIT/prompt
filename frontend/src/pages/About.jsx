import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, BookOpen, ExternalLink } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className={`relative bg-ieee-blue text-white py-24 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
                    >
                        Pioneering Excellence
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Introduction */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                     <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                     >
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 relative">
                            Who We Are
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-ieee-blue rounded-full"></span>
                        </h2>
                        <p className="text-gray-600 leading-loose text-lg mb-6">
                            Our Student Branch is a vibrant community of students and professionals. We bridge the gap between academic learning and industry demands through workshops, seminars, and hands-on projects.
                        </p>
                        <p className="text-gray-600 leading-loose text-lg">
                            We aim to provide a platform for students to develop their technical and professional skills, fostering a culture of innovation and collaboration.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixidx=1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Team Collaboration" 
                            className="relative rounded-2xl shadow-xl border-4 border-white"
                        />
                    </motion.div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-blue-50 p-10 rounded-3xl border border-blue-100 relative overflow-hidden group"
                     >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 group-hover:bg-blue-300 transition-colors"></div>
                        <Target className="w-12 h-12 text-ieee-blue mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            To foster technological innovation and excellence for the benefit of humanity. To be essential to the global technical community and be universally recognized for the contributions of technology in improving global conditions.
                        </p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-cyan-50 p-10 rounded-3xl border border-cyan-100 relative overflow-hidden group"
                     >
                         <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200 rounded-full blur-3xl opacity-50 group-hover:bg-cyan-300 transition-colors"></div>
                        <Globe className="w-12 h-12 text-cyan-600 mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                             To be the trusted voice for engineering, computing, and technology information around the globe. We envision a world where technology works for everyone, driving sustainable development.
                        </p>
                    </motion.div>
                </div>

                {/* History/Timeline Component Placeholder */}
                <div className="bg-gray-900 text-white rounded-3xl p-12 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                     <div className="relative z-10 text-center">
                        <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                        <h2 className="text-3xl font-heading font-bold mb-4">Our History</h2>
                        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed text-lg mb-8">
                            Established in 2010, our Student Branch has grown from a small group of 20 members to a thriving community of over 500 active participants, winning multiple regional awards essentially.
                        </p>
                         <button className="inline-flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all">
                            Read Full History <ExternalLink className="w-4 h-4" />
                        </button>
                     </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
