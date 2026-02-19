import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Chapters from '../components/Chapters';
import Benefits from '../components/Benefits';
import Events from '../components/Events';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Resources from '../components/Resources';

function Home() {
    const location = useLocation();

    // Handle scroll to hash on mount or change
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    // Smooth scrolling for legacy anchor links (if any)
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // validation to ensure it's not a router link handled elsewhere
                if(this.getAttribute('data-no-scroll')) return;
                
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }, []);

    return (
        <div className="font-sans text-gray-900 bg-white">
            <Hero />
            <Stats />
            <About />
            <Chapters />
            <Benefits />
            <Resources />
            <Events />
            <Team />
            <Contact />
        </div>
    );
}

export default Home;
