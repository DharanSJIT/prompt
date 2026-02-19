import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChapterDetails from './pages/ChapterDetails';
import AboutPage from './pages/About';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/Team';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <div className="font-sans text-gray-900 bg-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/chapter/:id" element={<ChapterDetails />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;

