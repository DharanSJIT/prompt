import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
        setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col justify-center">
        {/* Header */}
        <div className="bg-ieee-blue text-white py-20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-5xl font-heading font-extrabold mb-4 relative z-10"
            >
                Get in Touch
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto relative z-10"
            >
                We'd love to hear from you. Reach out with any questions, feedback, or collaboration ideas.
            </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full -mt-10 md:-mt-20 relative z-20">
            <div className="grid lg:grid-cols-3 gap-10">
                {/* Contact Info Cards */}
                <div className="lg:col-span-1 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-ieee-blue hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-ieee-blue rounded-full flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                            IEEE Student Branch,<br/>
                            Dept. of EEE, Some College of Engineering,<br/>
                            City, State - 123456
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                        <p className="text-gray-600">
                           <a href="mailto:info@ieee-sb.org" className="hover:text-ieee-blue transition-colors">info@ieee-sb.org</a><br/>
                           <a href="mailto:support@ieee-sb.org" className="hover:text-ieee-blue transition-colors">support@ieee-sb.org</a>
                        </p>
                    </motion.div>
                </div>

                {/* Main Form */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                >
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Send us a Message</h2>
                    {formStatus === 'success' ? (
                        <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center animate-fade-in">
                            <p className="font-semibold text-lg">Thank you! Your message has been sent.</p>
                            <p className="text-sm">We'll get back to you shortly.</p>
                            <button onClick={() => setFormStatus(null)} className="mt-4 text-sm font-medium underline">Send another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" 
                                        placeholder="john@example.com" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" 
                                    placeholder="Inquiry about membership" 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ieee-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none" 
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={formStatus === 'sending'}
                                className={`w-full py-4 bg-ieee-blue text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
