import React from 'react';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-ieee-light/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="text-center mb-16">
                    <span className="text-ieee-blue font-bold tracking-widest text-sm uppercase">Get In Touch</span>
                    <h2 className="text-4xl font-heading font-extrabold text-gray-900 mt-2">Connect With Us</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Have questions or suggestions? We'd love to hear from you. Reach out to us through any of the following channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-ieee-blue rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                                    <p className="text-gray-600 text-sm">
                                        IEEE Student Branch,<br/>
                                        Dept. of EEE, Some College of Engineering,<br/>
                                        City, State - 123456
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-ieee-blue rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                                    <p className="text-gray-600 text-sm">
                                        info@ieee-sb.org<br/>
                                        support@ieee-sb.org
                                    </p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-ieee-blue rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                                    <p className="text-gray-600 text-sm">
                                        +91 98765 43210 (Chairperson)<br/>
                                        +91 12345 67890 (Office)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all" placeholder="Inquiry about membership" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-ieee-blue text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
