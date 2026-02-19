import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540339832862-43d696ab1539?ixidx=2&auto=format&fit=crop&w=2560&q=80')` }}
      >
        <div className="absolute inset-0 bg-ieee-dark/80 backdrop-blur-[2px]"></div> {/* Blue Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 animate-fade-in shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide">Innovating for a Better Tomorrow</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-6 animate-slide-up animation-delay-200 drop-shadow-lg">
          Advancing Technology <br/>
          <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            for Humanity
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light animate-fade-in animation-delay-400">
          Join the world's largest technical professional organization for the advancement of technology.
          Empowering students to drive innovation and excellence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-scale-in animation-delay-600">
          <button className="px-8 py-4 bg-white text-ieee-blue font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
            Become a Member
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300">
            Explore Chapters
          </button>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-12 text-center opacity-80 border-t border-white/10 pt-8 w-full max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-bold font-heading">4+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Technical Chapters</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading">50+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Annual Events</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading">200+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Active Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
