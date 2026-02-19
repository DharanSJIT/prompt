import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { chaptersData } from '../data/chaptersData';
import { ArrowLeft, Calendar, User, Target, Zap, Clock, BookOpen, ExternalLink, ChevronRight, Award } from 'lucide-react';

const ChapterDetails = () => {
    const { id } = useParams();
    const chapter = chaptersData.find(c => c.id === id);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-md w-full">
                    <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ArrowLeft className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">Chapter Not Found</h2>
                    <p className="text-gray-500 mb-6">The chapter you are looking for does not exist or has been moved.</p>
                    <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ieee-blue hover:bg-blue-700 transition-colors w-full">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    // Color helpers
    const getThemeColor = (type) => {
        const colors = {
            blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', light: 'bg-blue-50', hover: 'hover:bg-blue-700' },
            green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', light: 'bg-emerald-50', hover: 'hover:bg-emerald-700' },
            purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', light: 'bg-purple-50', hover: 'hover:bg-purple-700' },
            orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', light: 'bg-orange-50', hover: 'hover:bg-orange-700' },
        };
        return colors[chapter.color] || colors.blue;
    }
    const theme = getThemeColor();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section with Parallax-like Image */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={chapter.heroImage} 
                        alt={`${chapter.name} Background`} 
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                </div>

                <div className="absolute inset-0 flex items-end pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full w-fit">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>
                        
                        <div className="animate-fade-in-up">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme.bg} text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg`}>
                                <Award className="w-3 h-3" /> {chapter.acronym}
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight max-w-5xl shadow-black drop-shadow-lg">
                                {chapter.name}
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-light border-l-4 border-white/30 pl-6 backdrop-blur-sm">
                                {chapter.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm/50 backdrop-blur-md bg-white/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto gap-4 py-3 no-scrollbar">
                        {['overview', 'publications', 'team', 'events', 'join'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 capitalize ${
                                    activeTab === tab
                                        ? `${theme.bg} text-white shadow-md transform scale-105`
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="animate-fade-in space-y-16">
                        {/* Mission & Vision Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                                <div className={`w-12 h-12 rounded-xl ${theme.light} ${theme.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{chapter.vision}</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                                <div className={`w-12 h-12 rounded-xl ${theme.light} ${theme.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{chapter.mission}</p>
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                             <div className="p-8 md:p-12 text-center">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Core Research Areas</h2>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {chapter.focusAreas.map((area, idx) => (
                                        <span key={idx} className={`px-6 py-3 rounded-xl text-sm font-semibold bg-gray-50 text-gray-700 border border-gray-200 hover:${theme.text} hover:border-current transition-colors cursor-default`}>
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Publications Tab */}
                {activeTab === 'publications' && (
                    <div className="animate-fade-in">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 font-heading">Key Publications</h2>
                                <p className="text-gray-500 mt-2">Leading journals and magazines in the field.</p>
                            </div>
                            <BookOpen className={`w-10 h-10 ${theme.text} opacity-20`} />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {chapter.publications && chapter.publications.map((pub, idx) => (
                                <div key={idx} className="bg-white group rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full relative overflow-hidden">
                                     <div className={`absolute top-0 left-0 w-1 h-full ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                     <div className="mb-4">
                                         <div className={`w-10 h-10 rounded-lg ${theme.light} flex items-center justify-center text-gray-600 group-hover:${theme.text} transition-colors`}>
                                             <BookOpen className="w-5 h-5" />
                                         </div>
                                     </div>
                                     <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                                         {pub.title}
                                     </h3>
                                     <div className="mt-auto pt-4 flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                                         Access Journal <ExternalLink className="w-4 h-4 ml-2" />
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Team Tab */}
                {activeTab === 'team' && (
                    <div className="animate-fade-in">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 font-heading">Meet the Leadership</h2>
                             <p className="text-gray-500 mt-2 max-w-2xl mx-auto">The dedicated students driving our chapter's success.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {chapter.representatives.map((rep, idx) => (
                                <div key={idx} className="group relative">
                                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4 relative">
                                        <img 
                                            src={rep.image} 
                                            alt={rep.name} 
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-black/60 to-transparent flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                             {/* Social icons could go here */}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center">{rep.name}</h3>
                                    <p className={`text-sm font-medium text-center ${theme.text}`}>{rep.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Events Tab */}
                {activeTab === 'events' && (
                    <div className="animate-fade-in grid lg:grid-cols-2 gap-12">
                         {/* Upcoming */}
                         <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`p-2 rounded-lg ${theme.light}`}>
                                    <Calendar className={`w-6 h-6 ${theme.text}`} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 font-heading">Upcoming Activities</h2>
                            </div>
                            
                            <div className="space-y-4">
                                {chapter.upcomingEvents.length > 0 ? (
                                    chapter.upcomingEvents.map((event, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex gap-4">
                                            <div className={`shrink-0 w-16 h-16 rounded-lg ${theme.light} flex flex-col items-center justify-center text-center`}>
                                                <span className={`text-xs font-bold uppercase ${theme.text}`}>{event.date.split(' ')[0]}</span>
                                                <span className={`text-xl font-bold ${theme.text}`}>{event.date.split(' ')[1].replace(',', '')}</span>
                                            </div>
                                            <div>
                                                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold bg-gray-100 text-gray-600 mb-2`}>{event.type}</span>
                                                <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray-500">
                                        No upcoming events scheduled. Stay tuned!
                                    </div>
                                )}
                            </div>
                         </div>

                         {/* Past */}
                         <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`p-2 rounded-lg bg-gray-100`}>
                                    <Clock className={`w-6 h-6 text-gray-600`} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 font-heading">Past Events</h2>
                            </div>

                            <div className="relative border-l-2 border-gray-200 ml-4 space-y-8 pl-8 py-2">
                                {chapter.pastEvents.map((event, idx) => (
                                    <div key={idx} className="relative">
                                        <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-2 border-white ${theme.bg}`}></div>
                                        <div className="text-sm text-gray-400 font-medium mb-1">{event.date}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </div>
                )}

                {/* Join Tab */}
                {activeTab === 'join' && (
                    <div className="animate-fade-in max-w-4xl mx-auto text-center">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${theme.light} mb-8 animate-bounce-slow`}>
                            <User className={`w-10 h-10 ${theme.text}`} />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">Become a Member</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Join the {chapter.name} and get exclusive access to workshops, research opportunities, and a global network of professionals.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
                            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className={`text-lg font-bold mb-3 ${theme.text}`}>Networking</h3>
                                <p className="text-sm text-gray-600">Connect with industry leaders and like-minded peers.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className={`text-lg font-bold mb-3 ${theme.text}`}>Resources</h3>
                                <p className="text-sm text-gray-600">Access to IEEE Xplore, magazines, and technical journals.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className={`text-lg font-bold mb-3 ${theme.text}`}>Discounts</h3>
                                <p className="text-sm text-gray-600">Reduced rates for conferences and certification exams.</p>
                            </div>
                        </div>

                        <button className={`inline-flex items-center px-8 py-4 rounded-xl text-lg font-bold text-white ${theme.bg} ${theme.hover} transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1`}>
                            Join {chapter.acronym} Now <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <p className="mt-6 text-sm text-gray-400">
                            *Membership requires an active IEEE Student Membership.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChapterDetails;
