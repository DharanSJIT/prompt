import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Chapters from './components/Chapters';
import Benefits from './components/Benefits';
import Events from './components/Events';
import Team from './components/Team';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Chapters />
      <Benefits />
      <Resources />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
