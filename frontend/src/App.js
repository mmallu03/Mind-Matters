// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MoodTrackerPage from './components/MoodTrackerPage';
import Challenges from './components/Challenges';
import RewardsHub from './components/RewardsHub';
import Resources from './components/Resources';
import Footer from './components/Footer';
import JournalList from './components/JournalList';

import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        {/* The nav element is outside of the Routes component, so it appears on all pages */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mood-tracker">Mood Tracker</Link></li>
            <li><Link to="/journal-list">Journal List</Link></li>
            <li><Link to="/challenges">Challenges</Link></li>
            <li><Link to="/rewards-hub">Rewards Hub</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood-tracker" element={<MoodTrackerPage />} />
          <Route path="/journal-list" element={<JournalList />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/rewards-hub" element={<RewardsHub />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer /> {/* Add Footer component */}
      </div>
    </Router>
  );
}

export default App;
