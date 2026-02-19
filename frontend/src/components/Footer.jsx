import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ieee-dark text-white pt-20 pb-10 border-t border-blue-900 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ieee-blue to-cyan-400"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 bg-white text-ieee-blue rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                IE
                             </div>
                             <div>
                                 <h3 className="font-heading font-bold text-2xl tracking-tight leading-none text-white">IEEE</h3>
                                 <p className="text-xs uppercase tracking-widest text-blue-200">Student Branch</p>
                             </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Advancing technology for humanity. Join us to innovate, learn, and grow together in a community of technical excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-ieee-blue hover:text-white transition-all duration-300 text-gray-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 text-gray-400">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-400">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li><a href="#" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> About IEEE</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Membership Benefits</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Upcoming Events</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Our Societies</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Contact Us</a></li>
                        </ul>
                    </div>

                     {/* Societies */}
                     <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2 inline-block">Societies</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li><a href="#" className="hover:text-ieee-blue transition-colors">Computer Society</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors">Power & Energy Society</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors">Robotics & Automation</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors">Women in Engineering</a></li>
                            <li><a href="#" className="hover:text-ieee-blue transition-colors">SIGHT Group</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2 inline-block">Contact Us</h4>
                         <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-ieee-blue mt-1 flex-shrink-0" />
                                <span className="text-sm">
                                    Department of EEE,<br />
                                    University College of Engineering,<br />
                                    City Name, State, 123456
                                </span>
                            </li>
                             <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-ieee-blue flex-shrink-0" />
                                <a href="mailto:contact@ieee-sb.org" className="text-sm hover:text-white transition-colors">contact@ieee-sb.org</a>
                            </li>
                             <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-ieee-blue flex-shrink-0" />
                                <a href="tel:+911234567890" className="text-sm hover:text-white transition-colors">+91 123 456 7890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
