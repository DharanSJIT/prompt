import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const allNews = [
    {
        id: 1,
        title: "IEEE Students Win National Hackathon",
        date: "March 15, 2024",
        category: "Achievement",
        author: "John Smith",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Our student branch team secured 1st place at the National Engineering Hackathon held in Hyderabad, competing against 50 top universities.",
        content: "Detailed content about the hackathon win..."
    },
    {
        id: 2,
        title: "New AI Research Group Formed",
        date: "March 10, 2024",
        category: "Research",
        author: "Dr. Alan Turing",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "The Computational Intelligence Society has launched a new specialized group for Deep Learning research, focusing on medical imaging applications.",
        content: "Detailed content about the AI group..."
    },
    {
        id: 3,
        title: "Call for Papers: Annual Symposium",
        date: "March 05, 2024",
        category: "Event",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Submissions are now open for the 2024 Annual Student Research Symposium. Submit your abstracts by April 1st to be considered for presentation.",
        content: "Detailed content about the symposium..."
    },
    {
        id: 4,
        title: "Guest Lecture Series on Quantum Computing",
        date: "February 28, 2024",
        category: "Event",
        author: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Join us for an enlightening series of lectures on the fundamentals and future of Quantum Computing, hosted by industry experts.",
        content: "Detailed content about the lecture series..."
    },
    {
        id: 5,
        title: "Community Outreach: Tech for Good",
        date: "February 15, 2024",
        category: "Volunteering",
        author: "Emily Chen",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Our members visited local schools to teach basic coding and robotics to underprivileged children, fostering a love for STEM.",
        content: "Detailed content about the outreach program..."
    },
    {
        id: 6,
        title: "New Partnership with Tech Giants",
        date: "January 30, 2024",
        category: "Announcement",
        author: "Chairperson",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "We are excited to announce new sponsorship deals with Google and Microsoft to support student projects and internships.",
        content: "Detailed content about the partnership..."
    }
];

const NewsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(allNews.map(item => item.category))];

    const filteredNews = allNews.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-20 min-h-screen bg-gray-50 font-sans">
             {/* Header */}
             <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6"
                        >
                            News & Insights
                        </motion.h1>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            Stay updated with the latest happenings, achievements, and announcements from our IEEE Student Branch.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                        </div>

                        {/* Categories */}
                        <div className="flex overflow-x-auto gap-2 w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                           {categories.map(category => (
                               <button
                                   key={category}
                                   onClick={() => setSelectedCategory(category)}
                                   className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                                       selectedCategory === category 
                                       ? 'bg-ieee-blue text-white border-ieee-blue' 
                                       : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                   }`}
                               >
                                   {category}
                               </button>
                           ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredNews.length > 0 ? (
                    <motion.div 
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredNews.map((item) => (
                            <motion.article 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id} 
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-gray-900 shadow-sm border border-gray-100">
                                            {item.category}
                                        </span>
                                    </div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium">
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" /> {item.date}
                                        </div>
                                        {item.author && (
                                            <div className="flex items-center">
                                                <User className="w-3 h-3 mr-1" /> {item.author}
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ieee-blue transition-colors leading-tight">
                                        {item.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                                        {item.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <button className="text-ieee-blue font-semibold text-sm hover:text-blue-800 transition-colors inline-flex items-center">
                                            Read Full Story <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <Filter className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-500">
                            Try adjusting your search or category filter.
                        </p>
                        <button 
                            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                            className="mt-6 text-ieee-blue font-medium hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
