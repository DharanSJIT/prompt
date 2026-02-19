import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Jane Doe',
    role: 'Chairperson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Leading with vision and passion.',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
  {
    name: 'John Smith',
    role: 'Vice Chairperson',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Dedicated to operational excellence.',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
  {
    name: 'Emily Davis',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Keeping the records straight and clear.',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
   {
    name: 'Michael Brown',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Managing finances for a sustainable future.',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
  {
    name: 'Sarah Wilson',
    role: 'Webmaster',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Crafting digital experiences.',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
  {
    name: 'David Lee',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Creating memorable events.',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const TeamPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-ieee-blue text-white py-20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
                >
                    Meet Our Leadership
                </motion.h1>
                <div className="w-24 h-1 bg-white/50 mx-auto mt-4 rounded-full"></div>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto mt-6 text-xl text-blue-100 font-light"
                >
                    The dedicated students driving the vision and mission of our IEEE Student Branch forward.
                </motion.p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {team.map((member, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                    >
                        <div className="relative h-24 bg-gradient-to-r from-ieee-blue to-cyan-500">
                             <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                             </div>
                        </div>
                        
                        <div className="pt-20 pb-8 px-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-ieee-blue transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                {member.role}
                            </p>
                            <p className="text-gray-600 mb-6 italic">
                                "{member.bio}"
                            </p>
                            
                            <div className="flex justify-center space-x-4">
                                <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href={member.socials.twitter} className="text-gray-400 hover:text-sky-500 hover:bg-sky-50 p-2 rounded-full transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href={member.socials.mail} className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  );
};

export default TeamPage;
