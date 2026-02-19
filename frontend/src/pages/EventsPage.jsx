import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Hackathon 2024',
    date: 'March 15, 2024',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3852f92?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Competition',
  },
  {
    title: 'AI Workshop',
    date: 'April 05, 2024',
    time: '10:00 AM - 01:00 PM',
    location: 'Lab 204',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Workshop',
  },
  {
    title: 'Guest Lecture: IoT',
    date: 'April 20, 2024',
    time: '02:00 PM - 04:00 PM',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Seminar',
  },
   {
    title: 'Cyber Security Bootcamp',
    date: 'May 10, 2024',
    time: '10:00 AM - 04:00 PM',
    location: 'Security Lab',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Bootcamp',
  },
  {
    title: 'Blockchain Summit',
    date: 'June 15, 2024',
    time: '10:00 AM - 05:00 PM',
    location: 'Conference Hall',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Conference',
  },
  {
    title: 'Robotics Challenge',
    date: 'July 20, 2024',
    time: '09:00 AM - 06:00 PM',
    location: 'Robotics Lab',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Competition',
  },
];

const EventsPage = () => {
    const [filter, setFilter] = useState('All');
    
    // Get unique types
    const types = ['All', ...new Set(events.map(event => event.type))];

    const filteredEvents = filter === 'All' 
        ? events 
        : events.filter(event => event.type === filter);

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
             {/* Hero Section */}
            <div className={`relative bg-ieee-blue text-white py-20 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
                    >
                        Events & Activities
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
                    >
                        Explore our upcoming workshops, seminars, and competitions.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                filter === type 
                                ? 'bg-ieee-blue text-white shadow-md transform scale-105' 
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredEvents.map((event, index) => (
                        <motion.div 
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-ieee-blue backdrop-blur-sm shadow-sm">
                                        {event.type}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                                    <Calendar className="w-4 h-4 text-ieee-blue" />
                                    <span>{event.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ieee-blue transition-colors leading-tight">
                                    {event.title}
                                </h3>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-lg border border-ieee-blue text-ieee-blue font-semibold hover:bg-ieee-blue hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
                                    Register Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default EventsPage;
