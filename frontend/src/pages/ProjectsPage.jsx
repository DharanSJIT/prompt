import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Cpu, Database, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: "Smart Campus Navigation",
        category: "App Development",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "An AR-based mobile application to help students and visitors navigate the sprawling campus with ease.",
        techStack: ["Flutter", "ARKit", "Firebase"],
        team: ["John Doe", "Alice Smith"],
        links: { github: "#", demo: "#" },
        status: "Completed"
    },
    {
        id: 2,
        title: "Autonomous Drone for Agriculture",
        category: "Robotics",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "A drone system capable of monitoring crop health using multispectral imaging and AI analysis.",
        techStack: ["Python", "OpenCV", "Raspberry Pi", "ROS"],
        team: ["David Lee", "Sarah Jones"],
        links: { github: "#", demo: "#" },
        status: "In Progress"
    },
    {
        id: 3,
        title: "Blockchain Voting System",
        category: "Blockchain",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "A decentralized voting platform ensuring transparency and security for student council elections.",
        techStack: ["Solidity", "Ethereum", "React", "Web3.js"],
        team: ["Mike Brown", "Emily White"],
        links: { github: "#", demo: "#" },
        status: "Completed"
    },
    {
        id: 4,
        title: "AI-Powered Waste Sorter",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "A smart bin that uses computer vision to automatically segregate waste into recyclable and non-recyclable.",
        techStack: ["TensorFlow", "Keras", "IoT", "Arduino"],
        team: ["Chris Green", "Pat Taylor"],
        links: { github: "#", demo: "#" },
        status: "Prototype"
    },
    {
        id: 5,
        title: "Energy Efficient Smart Home",
        category: "IoT",
        image: "https://images.unsplash.com/photo-1558002038-10917738d47d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "An IoT dashboard to monitor and optimize energy consumption in residential buildings.",
        techStack: ["Node.js", "React", "MQTT", "ESP32"],
        team: ["Alex Wilson", "Sam Chen"],
        links: { github: "#", demo: "#" },
        status: "In Progress"
    }
];

const categoryIcons = {
    "App Development": <Code className="w-5 h-5" />,
    "Robotics": <Cpu className="w-5 h-5" />,
    "Blockchain": <Database className="w-5 h-5" />,
    "AI/ML": <Layers className="w-5 h-5" />,
    "IoT": <ExternalLink className="w-5 h-5" /> // Fallback or specific icon
};

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-20 min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
                    >
                        Innovation Hub
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Showcasing groundbreaking projects built by our talented student members. bridging the gap between theory and practice.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <button className="bg-ieee-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                            Submit Your Project
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                     <div className="flex overflow-x-auto gap-2 no-scrollbar pb-2 md:pb-0 justify-start md:justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                                    filter === cat 
                                    ? 'bg-ieee-blue text-white border-ieee-blue shadow-md' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div 
                    layout 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 flex gap-2">
                                     <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-gray-800 shadow-sm border border-gray-100 flex items-center gap-1">
                                        {categoryIcons[project.category] || <Code className="w-3 h-3" />} {project.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-white/20 backdrop-blur-md ${
                                        project.status === 'Completed' ? 'bg-green-500/90 text-white' : 
                                        project.status === 'In Progress' ? 'bg-blue-500/90 text-white' : 'bg-yellow-500/90 text-white'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                                    <div className="flex gap-3">
                                        <a href={project.links.github} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.links.demo} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-ieee-blue transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ieee-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                        <span>By: {project.team.join(", ")}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                     <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No projects found</h3>
                        <p className="text-gray-500">
                            Try selecting a different category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
