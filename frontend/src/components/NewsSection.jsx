import React from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "IEEE Students Win National Hackathon",
      date: "March 15, 2024",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Our student branch team secured 1st place at the National Engineering Hackathon held in Hyderabad.",
      link: "#"
    },
    {
      id: 2,
      title: "New AI Research Group Formed",
      date: "March 10, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The Computational Intelligence Society has launched a new specialized group for Deep Learning research.",
      link: "#"
    },
    {
      id: 3,
      title: "Call for Papers: Annual Symposium",
      date: "March 05, 2024",
      category: "Event",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Submissions are now open for the 2024 Annual Student Research Symposium. Submit your abstracts by April 1st.",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
           <div>
              <span className="block text-ieee-blue font-bold tracking-wider uppercase text-sm mb-2">Latest Updates</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900">News & Announcements</h2>
           </div>
           <Link to="/news" className="hidden md:flex items-center text-ieee-blue font-semibold hover:text-blue-700 transition-colors">
              View All News <ArrowRight className="ml-2 w-4 h-4" />
           </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-xs font-medium mb-3">
                    <Calendar className="w-3 h-3 mr-1" /> {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ieee-blue transition-colors leading-tight">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {item.excerpt}
                </p>
                <a href={item.link} className="inline-flex items-center text-sm font-semibold text-ieee-blue hover:text-blue-700 mt-auto">
                    Read More <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

         <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center text-ieee-blue font-semibold hover:text-blue-700 transition-colors">
              View All News <ArrowRight className="ml-2 w-4 h-4" />
           </Link>
         </div>
      </div>
    </section>
  );
};

export default NewsSection;
