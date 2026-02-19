import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Chapters', href: '#chapters' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl ${scrolled ? 'bg-ieee-blue text-white' : 'bg-white text-ieee-blue'}`}>
              IE
            </div>
            <div className={`font-heading font-bold text-xl tracking-tight ${scrolled ? 'text-ieee-dark' : 'text-white'}`}>
              IEEE <span className="font-medium opacity-90">Student Branch</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-ieee-blue ${scrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md ${scrolled ? 'bg-ieee-blue text-white hover:bg-blue-700' : 'bg-white text-ieee-blue hover:bg-gray-100'}`}>
              Join IEEE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700 hover:text-ieee-blue' : 'text-white hover:text-gray-200'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-ieee-blue hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full text-center px-5 py-3 rounded-lg bg-ieee-blue text-white font-semibold hover:bg-blue-700">
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
