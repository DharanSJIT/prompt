import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Jane Doe',
    role: 'Chairperson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
  {
    name: 'John Smith',
    role: 'Vice Chairperson',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
  {
    name: 'Emily Davis',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
   {
    name: 'Michael Brown',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { linkedin: '#', twitter: '#', mail: '#' },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ieee-blue font-bold tracking-widest text-sm uppercase">Our Leadership</span>
          <h2 className="text-4xl font-heading font-extrabold text-gray-900 mt-2">Meet the Team</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mt-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Dedicated students driving the vision and mission of our IEEE Student Branch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2 text-center p-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ieee-blue to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner group-hover:border-ieee-blue transition-colors duration-300 relative group-hover:scale-110">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-heading font-bold text-gray-900 mb-1 group-hover:text-ieee-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                {member.role}
              </p>

              <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <a href={member.socials.linkedin} className="text-gray-400 hover:text-ieee-blue hover:bg-blue-50 p-2 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.socials.twitter} className="text-gray-400 hover:text-sky-500 hover:bg-sky-50 p-2 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.socials.mail} className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
