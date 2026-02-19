import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    if (!isHome) return; // Let Link handle navigation
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Events', href: '/events', type: 'link' },
    { name: 'Gallery', href: '/gallery', type: 'link' },
    { name: 'Team', href: '/team', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' },
  ];

  const chapters = [
    { name: 'Computational Intelligence', id: 'cis' },
    { name: 'Circuits and Systems', id: 'cass' },
    { name: 'Systems, Man, & Cybernetics', id: 'smcs' },
    { name: 'Information Theory', id: 'its' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome || true ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-gray-900 border-b border-gray-100' : 'bg-transparent py-5 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors ${scrolled || !isHome || true ? 'bg-ieee-blue text-white' : 'bg-white text-ieee-blue group-hover:bg-blue-50'}`}>
              IE
            </div>
            <div className={`font-heading font-bold text-xl tracking-tight ${scrolled || !isHome || true ? 'text-ieee-dark' : 'text-white'}`}>
              IEEE <span className="font-medium opacity-90 hidden sm:inline">Student Branch</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-ieee-blue ${scrolled || !isHome || true ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}>
                Home
            </Link>
            
            {/* Chapters Dropdown */}
            <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <Link 
                    to="/chapters" 
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-ieee-blue ${scrolled || !isHome || true ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}
                >
                    Chapters <ChevronDown className="w-4 h-4" />
                </Link>
                <div className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transform transition-all duration-200 origin-top-left ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    {chapters.map((chapter) => (
                        <Link 
                            key={chapter.id} 
                            to={`/chapter/${chapter.id}`}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-ieee-blue transition-colors border-b border-gray-50 last:border-0"
                        >
                            {chapter.name}
                        </Link>
                    ))}
                </div>
            </div>

            {navLinks.slice(1).map((link) => (
              link.type === 'scroll' ? (
                  isHome ? (
                    <button 
                        key={link.name} 
                        onClick={() => scrollToSection(link.href)}
                        className={`text-sm font-medium transition-colors hover:text-ieee-blue ${scrolled || !isHome || true ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}
                    >
                        {link.name}
                    </button>
                  ) : (
                    <Link 
                        key={link.name} 
                        to={`/#${link.href}`}
                        className={`text-sm font-medium transition-colors hover:text-ieee-blue ${scrolled || !isHome || true ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}
                    >
                        {link.name}
                    </Link>
                  )
              ) : (
                <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-ieee-blue ${scrolled || !isHome || true ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}
                >
                    {link.name}
                </Link>
              )
            ))}
            <button className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md ${scrolled || !isHome || true ? 'bg-ieee-blue text-white hover:bg-blue-700' : 'bg-white text-ieee-blue hover:bg-gray-100'}`}>
              Join IEEE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || !isHome || true ? 'text-gray-700 hover:text-ieee-blue' : 'text-white hover:text-gray-200'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100 h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 space-y-2">
            <Link 
                to="/" 
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
            >
                Home
            </Link>
            
            <div className="px-3 py-2">
                <Link to="/chapters" onClick={() => setIsOpen(false)} className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 hover:text-ieee-blue">
                    Chapters
                </Link>
                <div className="space-y-1 pl-2 border-l-2 border-gray-100">
                    {chapters.map((chapter) => (
                        <Link 
                            key={chapter.id} 
                            to={`/chapter/${chapter.id}`}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-ieee-blue hover:bg-blue-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {chapter.name}
                        </Link>
                    ))}
                </div>
            </div>

            {navLinks.slice(1).map((link) => (
               isHome ? (
                    <button
                        key={link.name}
                        onClick={() => {
                            scrollToSection(link.href);
                            setIsOpen(false);
                        }}
                        className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-ieee-blue hover:bg-gray-50"
                    >
                        {link.name}
                    </button>
               ) : (
                   <Link
                        key={link.name}
                        to={`/#${link.href}`}
                        className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-ieee-blue hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
               )
            ))}
            
            <div className="pt-4 px-3">
              <button className="w-full text-center px-5 py-3 rounded-lg bg-ieee-blue text-white font-semibold hover:bg-blue-700 shadow-md">
                Join IEEE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

