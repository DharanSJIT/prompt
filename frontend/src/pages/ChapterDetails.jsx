import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { chaptersData } from '../data/chaptersData';
import { ArrowLeft, Calendar, User, Target, Zap, Clock, MapPin, Award } from 'lucide-react';

const ChapterDetails = () => {
    const { id } = useParams();
    const chapter = chaptersData.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Chapter Not Found</h2>
                    <Link to="/" className="text-ieee-blue hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    // Color mapping for style
    const getBgColor = (color) => {
        const colors = {
            blue: 'bg-blue-600',
            green: 'bg-green-600',
            purple: 'bg-purple-600',
            orange: 'bg-orange-600',
        };
        return colors[color] || 'bg-ieee-blue';
    }

    const getLightBg = (color) => {
         const colors = {
            blue: 'bg-blue-50',
            green: 'bg-green-50',
            purple: 'bg-purple-50',
            orange: 'bg-orange-50',
        };
        return colors[color] || 'bg-gray-50';
    }

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className={`relative ${getBgColor(chapter.color)} text-white py-24 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <span className="block text-white/80 font-bold tracking-widest uppercase text-sm mb-2">{chapter.acronym}</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight max-w-4xl">
                        {chapter.name}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-50 max-w-2xl leading-relaxed">
                        {chapter.description}
                    </p>
                </div>
            </div>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-lg ${getBgColor(chapter.color)} text-white`}>
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {chapter.vision}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                             <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-lg ${getBgColor(chapter.color)} text-white`}>
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {chapter.mission}
                            </p>
                        </div>
                    </div>

                    {/* Focus Areas */}
                    <div className="mt-16">
                        <h3 className="text-xl font-bold text-center mb-8 uppercase tracking-widest text-gray-500">Core Focus Areas</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {chapter.focusAreas.map((area, idx) => (
                                <span key={idx} className={`px-6 py-2 rounded-full text-sm font-semibold ${getLightBg(chapter.color)} text-gray-700 border border-gray-200`}>
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-extrabold text-gray-900">Student Leadership</h2>
                        <div className={`w-20 h-1 ${getBgColor(chapter.color)} mx-auto mt-4 rounded-full`}></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {chapter.representatives.map((rep, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-100 group-hover:border-blue-500 transition-colors">
                                    <img src={rep.image} alt={rep.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-gray-900">{rep.name}</h3>
                                <p className={`text-sm font-medium mt-1 ${getBgColor(chapter.color).replace('bg-', 'text-')}`}>{rep.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Past Activities */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                                <Clock className="w-6 h-6 text-gray-400" /> Past Activities
                            </h2>
                            <div className="space-y-6">
                                {chapter.pastEvents.map((event, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="flex flex-col items-center">
                                            <div className={`w-3 h-3 rounded-full mt-2 ${getBgColor(chapter.color)}`}></div>
                                            <div className="w-0.5 h-full bg-gray-100 mt-2 group-last:hidden"></div>
                                        </div>
                                        <div className="pb-6">
                                            <div className="text-sm text-gray-500 font-medium mb-1">{event.date} • {event.type}</div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                         {/* Upcoming Activities */}
                         <div>
                            <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-gray-400" /> Upcoming Events
                            </h2>
                             <div className="space-y-4">
                                {chapter.upcomingEvents.map((event, idx) => (
                                    <div key={idx} className={`p-6 rounded-xl border-l-4 ${getBgColor(chapter.color).replace('bg-', 'border-')} bg-gray-50 hover:bg-white hover:shadow-md transition-all`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-sm font-bold tracking-wide uppercase text-gray-500">{event.type}</span>
                                            <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${getBgColor(chapter.color)}`}>
                                                Upcoming
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                        <div className="flex items-center text-gray-600 text-sm">
                                            <Calendar className="w-4 h-4 mr-2" /> {event.date}
                                        </div>
                                    </div>
                                ))}
                                {chapter.upcomingEvents.length === 0 && (
                                    <div className="p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500">
                                        No upcoming events scheduled at the moment.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChapterDetails;
