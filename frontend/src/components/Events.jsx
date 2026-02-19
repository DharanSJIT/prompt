import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Hackathon 2024',
    date: 'March 15, 2024',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3852f92?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Competition',
  },
  {
    title: 'AI Workshop',
    date: 'April 05, 2024',
    time: '10:00 AM - 01:00 PM',
    location: 'Lab 204',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Workshop',
  },
  {
    title: 'Guest Lecture: IoT',
    date: 'April 20, 2024',
    time: '02:00 PM - 04:00 PM',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixidx=1&auto=format&fit=crop&w=800&q=80',
    type: 'Seminar',
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-ieee-blue font-bold tracking-widest text-sm uppercase">Upcoming Activities</span>
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 mt-2">Latest Events</h2>
          </div>
          <button className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ieee-blue transition-all">
            View All Events
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-ieee-blue backdrop-blur-sm shadow-sm">
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                  <Calendar className="w-4 h-4 text-ieee-blue" />
                  <span>{event.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ieee-blue transition-colors leading-tight">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-6">
                   <div className="flex items-center gap-2 text-sm text-gray-600">
                     <Clock className="w-4 h-4 text-gray-400" />
                     <span>{event.time}</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm text-gray-600">
                     <MapPin className="w-4 h-4 text-gray-400" />
                     <span>{event.location}</span>
                   </div>
                </div>

                <button className="w-full py-3 rounded-lg border border-ieee-blue text-ieee-blue font-semibold hover:bg-ieee-blue hover:text-white transition-all duration-200">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 w-full transition-all">
                View All Events
            </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
